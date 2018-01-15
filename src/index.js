import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { logUser } from './actions';

import { firebaseApp } from './firebase';
import history from './history';

import App from './components/App';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
	if(user){
		// console.log('user has signed in or up', user);
		const { email } = user;
			store.dispatch(logUser(email));
		   history.push('/app');

	}else{
		// console.log('user has signed out os still needs to sign in.');
		   history.push('/');
	}
})

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Route exact path="/" component={SignUp} />
				<Route path="/app" component={App} />
				<Route path="/signin" component={SignIn} />
				<Route path="/signup" component={SignUp} />
			</div>
		</Router>
	</Provider>, document.querySelector('#root')

)

