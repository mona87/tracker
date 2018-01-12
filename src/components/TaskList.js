import React, {Component} from 'react';
import { connect } from 'react-redux';
import {taskRef} from '../firebase';
import { setTasks } from '../actions';
import TaskItem from './TaskItem';


class TaskList extends Component {
	componentDidMount(){
		taskRef.on('value', snap => {
			let tasks = []
			snap.forEach( task => {
				const { email, title } = task.val();
				const serverKey = task.key;
				tasks.push({email, title, serverKey});
			});
			// console.log(tasks);
			this.props.setTasks(tasks);
		})
	}
	render(){
		console.log('props',this.props.tasks)
		return(
			<div style={{margin: '0 20px 100px 20px'}}>{ this.props.tasks.map((task, i) => {
				return(

					<TaskItem key={i} task={task} />
				)
			})
			}

			</div>

		);
	}
}


function mapStateToProps(state){
	const { tasks } = state;
	return {
		tasks
	}
}


export default connect(mapStateToProps, {setTasks}) (TaskList);