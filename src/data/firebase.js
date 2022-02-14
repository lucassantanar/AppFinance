const { initializeApp } = require('firebase/app');


var firebaseConfig = {
  apiKey: "AIzaSyD2qc21PspBtpAZ4Au7JI3RRBCLCmp07tk",
  authDomain: "apiappfinance.firebaseapp.com",
  databaseURL: "https://apiappfinance-default-rtdb.firebaseio.com",
  projectId: "apiappfinance",
  storageBucket: "apiappfinance.appspot.com",
  messagingSenderId: "841154499287",
  appId: "1:841154499287:web:69bc22ad82f68ba3009692",
  measurementId: "G-VEWK7E1JER"
};

exports.app = initializeApp(firebaseConfig);