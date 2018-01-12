import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import { firebaseApp } from '../firebase';
import FlatButton from 'material-ui/FlatButton';

class SignUp extends Component {
	constructor(props){
		super(props);

		this.state={
			email: '',
			password: '',
			err: {
				message: ''
			}
		}
	}
	signUp(){
		const { email, password } = this.state;
		firebaseApp.auth().createUserWithEmailAndPassword(email, password)
		.catch(err => {
			console.log('err', err);
			this.setState({err})
		})
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
				<div className="signin-wrapper">
					<form>
					    <TextField
		      				inputStyle={{}}
		      				floatingLabelText="Email"
		      				onChange={e => this.setState({email: e.target.value})}
		   					errorText={this.state.err.message}
		   				/>
		   				<TextField
		      				inputStyle={{}}	
		      				floatingLabelText="Password"
      						type="password"
      						errorText={this.state.err.message}
      						onChange={e => this.setState({password: e.target.value})}
		   				/>
		   			 <RaisedButton label="Sign Up"  
	   				  backgroundColor='#212121'
	   				  labelColor='#ffffff'
	   				  style={{display: 'block', width: '200px', margin: '20px auto auto auto'}}
	   				   onClick={() => this.signUp()}
	   				   />
	   				</form>
	   				<Link to="/signin"> 
	   					<FlatButton 
	   					label="Sign In" 
	   					style={{position: 'fixed', top: '20px', right: '20px', marginTop: '20px'}}
	   					/>
	   				</Link>
				</div>
			</MuiThemeProvider >
		)
	}
}

MuiThemeProvider.propTypes = {
  children: PropTypes.array
};

export default SignUp;