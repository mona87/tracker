import * as firebase from 'firebase';


const config ={
	  // Initialize Firebase
    apiKey: "AIzaSyAHSG4UhtErpNxsvF5F5wGtIXfk2tYOObY",
    authDomain: "ask-me-c42d8.firebaseapp.com",
    databaseURL: "https://ask-me-c42d8.firebaseio.com",
    projectId: "ask-me-c42d8",
    storageBucket: "",
    messagingSenderId: "964795623932"
};

export const firebaseApp = firebase.initializeApp(config);
export const taskRef = firebase.database().ref('tasks');
export const completeTaskRef = firebase.database().ref('completeTasks')