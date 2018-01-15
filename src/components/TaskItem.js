import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Card, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { completeTaskRef, taskRef } from '../firebase';

class TaskItem extends Component {
	completeGoal() {
		const { email } = this.props.user;
		const { title, serverKey } = this.props.task;
		taskRef.child(serverKey).remove();
		completeTaskRef.push({email, title});
	}
	render() {
		console.log(this.props)
		const { email, title } = this.props.task;
		return (

			<Card 
				style={{
					margin: '0 auto 20px auto', 
					maxWidth: '500px',
				 }}
				containerStyle={{
					addingBottom: 0,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
			}}>
				<CardText style={{display: 'inline-block'}} >
					<div style={{marginBottom: '5px'}}><strong>{title} </strong></div>
					<div><em>submitted by {email}</em></div>					
				</CardText>
			<FlatButton
				style={{marginRight: '20px', color:'#66BB6A'}}
				label="Complete"
				onClick={() => this.completeGoal()}
			>
			</FlatButton>
			</Card>
		)
	}
}

function mapStateToProps(state) {
	const { user } = state;
	return {
		user
	}
}

export default connect(mapStateToProps, null)(TaskItem);