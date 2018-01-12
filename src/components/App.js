import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { firebaseApp} from '../firebase';

import AddTask from './AddTask';
import TaskList from'./TaskList';
import BottomNav from './BottomNav';

import CompleteTaskList from './CompleteTaskList';


class App extends Component {
	signOut(){
		firebaseApp.auth().signOut();
	}
	render() {
		return (
			<MuiThemeProvider >
			  <AppBar 
			  style={{textAlign: 'left', backgroundColor: '#212121', 
			  height: 40, 
				}}
			  title="Tracker" 
				showMenuIconButton={false}
			  />
			  			 <RaisedButton label="Sign Out"  
			  backgroundColor='#212121'
			  labelColor='#ffffff'
			  style={{display: 'block', width: '200px', margin: '20px auto auto auto'}}
			   onClick={() => this.signOut()}
			   />
			  		<AddTask />
			  		<TaskList />
			  		<h2>Completed Tasks</h2>
			  		<CompleteTaskList />
			   <BottomNav/>
			 </MuiThemeProvider>
		)
	}
}


MuiThemeProvider.propTypes = {
  children: PropTypes.array
};


function mapStateToProps(state) {
	// console.log(state);

	return {}
}

export default connect(mapStateToProps, null)(App);