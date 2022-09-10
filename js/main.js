<<<<<<< Updated upstream
// refernce
    var messagesRef = firebase.database().ref('messages');


=======
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyAbv6MER0tymIAb7TOqMHyqcJ78tNU64Dg",
    authDomain: "magnatech-8d29d.firebaseapp.com",
    databaseURL: "https://magnatech-8d29d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "magnatech-8d29d",
    storageBucket: "magnatech-8d29d.appspot.com",
    messagingSenderId: "30108335069",
    appId: "1:30108335069:web:a2ce72530d936248385434",
    
  };
  //initialize firebase
  const app = initializeApp(firebaseConfig);

  //Reference messages collection
  let messagesRef = firebase.firestor().ref('contactForm');
  
>>>>>>> Stashed changes
  //listen to form
  document.getElementById('contactForm').addEventListener('submit', submitForm);
 
  function submitForm(e){
    e.preventDefault();
    // values
    var name= getInputVal('name');
    var phone= getInputVal('phone');
    var email= getInputVal('email');
    var subject= getInputVal('subject');
    var message= getInputVal('message');

    // save message
    saveMessage(name,phone,email,subject,message);

    
  }

  function getInputVal(id){
    return document.getElementById(id).value;
  }

  // Save message to firebase

  function saveMessage(name,phone,email,subject,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({name: name,
        phone: phone,
        email: email,
        subject: subject,
        message:message})
  }
