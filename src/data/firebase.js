const { initializeApp } = require('firebase/app');


var firebaseConfig = {
  apiKey: "AIzaSyCTpAIr5Hv0YsD0Xa_oL50ZeWDIQ_-JGtA",
  authDomain: "appfinanceapi.firebaseapp.com",
  databaseURL: "https://appfinanceapi-default-rtdb.firebaseio.com",
  projectId: "appfinanceapi",
  storageBucket: "appfinanceapi.appspot.com",
  messagingSenderId: "971167538559",
  appId: "1:971167538559:web:6320c625203b2a749dce4a",
  measurementId: "G-HDHYLR13JG"
};

exports.app = initializeApp(firebaseConfig);