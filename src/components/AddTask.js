import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { taskRef } from '../firebase';
import { connect } from 'react-redux';


class AddTask extends Component {
	constructor(props){
		super(props);
		this.state ={
			title: ''
		}
	}
	addTask(){
		// console.log('state', this.state);
		const { email } = this.props.user;
		taskRef.push({email , title: this.state.title})
	}
	render(){
		return(
		<form>
		 <TextField
			style={{display:'block', margin:'auto'}}
			floatingLabelText="Add a task"
			onChange={e => this.setState({title: e.target.value})}
		/>
		 <RaisedButton label="Submit"  
		  backgroundColor='#212121'
		  labelColor='#ffffff'
		  style={{display: 'block', width: '200px', margin: '20px auto 50px auto'}}
		   onClick={() => this.addTask()}
		   />
		</form>
		)
	}
}

function mapStateToProps(state){
	const { user } = state;
	// console.log('state',state)
	return { 
		user
	}
}

export default connect(mapStateToProps, null)(AddTask);