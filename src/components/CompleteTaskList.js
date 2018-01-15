import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeTaskRef } from '../firebase';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/FlatButton';


class CompleteTaskList extends Component {
	componentDidMount(){
		completeTaskRef.on('value', snap => {
			let completeTasks = [];
			snap.forEach(completeTask => {
				const {email, title} = completeTask.val();
				completeTasks.push({email, title})
			});
			console.log('complete tasks', completeTasks);
			this.props.setCompleted(completeTasks);
		})
	}
	clearCompleted(){
		completeTaskRef.set([]);
	}
	render(){
		return (
			<div style={{margin: '0 20px 50px 20px'}}>{this.props.completeTasks.map((completeTask, i) =>{
				const { title, email} = completeTask;
				return(

			<Card key={i}
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
					<div><em>completed by {email}</em></div>					
				</CardText>
			</Card>
				)
			})}
   			 <RaisedButton 
	   			 label="Clear All"  
				  backgroundColor='#B71C1C'
				  style={{display: 'block', width: '200px', margin: '50px auto auto auto', color:'#fff'}}
				  onClick={() => this.clearCompleted()}
				 />
		</div>
		)
	}
}

function mapStateToProps(state){
	const { completeTasks }= state;
	return{
		completeTasks
	}
}


export default connect(mapStateToProps, {setCompleted})(CompleteTaskList);