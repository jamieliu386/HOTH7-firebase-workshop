import firebase from "firebase";

// Configuration object
const config = {
	apiKey: "AIzaSyBVkHrj182dfk4NAEfwcRPN_DkC_HOOk8Q",
	authDomain: "hoth7-firebase-workshop.firebaseapp.com",
	databaseURL: "https://hoth7-firebase-workshop.firebaseio.com",
	projectId: "hoth7-firebase-workshop",
	storageBucket: "hoth7-firebase-workshop.appspot.com",
	messagingSenderId: "328418075634",
	appId: "1:328418075634:web:2b44d5c432aa54189c016b",
};

// Initialize firebase app
firebase.initializeApp(config);

// Export firebase reference
export default firebase;
