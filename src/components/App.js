import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { firebaseApp} from '../firebase';

import AddTask from './AddTask';
import TaskList from'./TaskList';
import BottomNav from './BottomNav';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
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
				iconElementRight={
					<FlatButton label="Sign Out"  
					style={{lineHeight: '25px', height: '25px', marginTop: '0'}}
					  labelColor='#ffffff'
					  
					  onClick={() => this.signOut()}
			   		/>}
			  />
			<Tabs
			    onChange={this.handleChange}
      			value={this.state.slideIndex}
      			inkBarStyle={{backgroundColor: '#FF8A80'}}
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
			  	</div>
				<div>
			  		<h2>Completed Tasks</h2>
			  		<CompleteTaskList />

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