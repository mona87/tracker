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
import {Tabs, Tab} from 'material-ui/Tabs';
// import Slider from 'material-ui/Slider';
import SwipeableViews from 'react-swipeable-views';

import CompleteTaskList from './CompleteTaskList';


class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      slideIndex: 0,
	    };
	}
	handleChange = (value) => {
	    this.setState({
	      slideIndex: value,
	    });
	};
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
			<Tabs
			    onChange={this.handleChange}
      			value={this.state.slideIndex}
			 >
			    <Tab label="Task List" value={0}  style={{backgroundColor: '#455A64'}}/>
			    <Tab label="Completed" value={1}  style={{backgroundColor: '#455A64'}}/>
			 </Tabs> 
			 <SwipeableViews
		          index={this.state.slideIndex}
		          onChangeIndex={this.handleChange}
		          style={{marginBottom: '50px'}}
		        >
			     <div>
			  		<AddTask />
			  		<TaskList />
			  		<RaisedButton label="Sign Out"  
					  backgroundColor='#212121'
					  labelColor='#ffffff'
					  style={{display: 'block', width: '200px', margin: '20px auto auto auto'}}
					  onClick={() => this.signOut()}
			   		/>
			  	</div>
				<div>
			  		<h2>Completed Tasks</h2>
			  		<CompleteTaskList />
			  		<RaisedButton label="Sign Out"  
					  backgroundColor='#212121'
					  labelColor='#ffffff'
					  style={{display: 'block', width: '200px', margin: '20px auto auto auto'}}
					  onClick={() => this.signOut()}
			   		/>
				</div>
				<div>			  			

			   </div>
			</SwipeableViews>
	
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