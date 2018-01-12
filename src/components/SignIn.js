import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import { firebaseApp } from '../firebase';
import FlatButton from 'material-ui/FlatButton';

class SignIn extends Component {
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
	signIn(){
		const { email, password } = this.state;
		firebaseApp.auth().signInWithEmailAndPassword(email, password)
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
		   					onKeyPress={ e => {
		      					if(e.key === 'Enter'){
		      						e.preventDefault();
		      						this.signIn();
		      					}
      					}}
		   				/>
		   				<TextField
		      				inputStyle={{}}	
		      				floatingLabelText="Password"
      						type="password"
      						errorText={this.state.err.message}
      						onChange={e => this.setState({password: e.target.value})}
		   					onKeyPress={ e => {
		      					if(e.key === 'Enter'){
		      						e.preventDefault();
		      						this.signIn();
		      					}
      					}}
		   				/>
		   			 <RaisedButton label="Sign In"  
	   				  backgroundColor='#212121'
	   				  labelColor='#ffffff'
	   				  style={{display: 'block', width: '200px', margin: '20px auto auto auto'}}
	   				   onClick={() => this.signIn()}
	   				   />
	   				</form>

	   				<Link to="/signup"> 
	   					<FlatButton 
	   					label="Sign Up Here" 
	   					style={{position: 'fixed', top: '20px', right: '20px', marginTop: '20px'}}
	   					/>
	   				</Link>
				</div>
			</MuiThemeProvider>
		)
	}
}

MuiThemeProvider.propTypes = {
  children: PropTypes.array
};

export default SignIn;