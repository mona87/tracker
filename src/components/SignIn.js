import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import { firebaseApp } from '../firebase';
import FlatButton from 'material-ui/FlatButton';
import BottomNav from './BottomNav';

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
					iconElementRight={
					<Link to="/signup"> 
	   					<FlatButton 
	   					label="Sign Up" 
	   					style={{color:'#fff', lineHeight: '25px', height: '25px', marginTop: '0px'}}
	   					/>
	   				</Link>}
			  />
				<div className="signin-wrapper">
					<form style={{ marginTop: '100px'}}>
					    <TextField
		      				inputStyle={{}}
		      				style={{display: 'block', margin: 'auto'}}
		      				floatingLabelText="Email"
		      				underlineFocusStyle={{borderColor: '#455A64'}}
      						floatingLabelFocusStyle ={{color: '#455A64'}}
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
		      				style={{display: 'block', margin: 'auto'}}
		      				floatingLabelText="Password"
      						type="password"
      						underlineFocusStyle={{borderColor: '#455A64'}}
      						floatingLabelFocusStyle ={{color: '#455A64'}}
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
	   				  backgroundColor='#2E7D32'
	   				  labelColor='#ffffff'
	   				  style={{display: 'block', width: '200px', margin: '50px auto auto auto'}}
	   				   onClick={() => this.signIn()}
	   				   />
	   				</form>

	   			
				</div>
					   <BottomNav/>
			</MuiThemeProvider>
		)
	}
}

MuiThemeProvider.propTypes = {
  children: PropTypes.array
};

export default SignIn;