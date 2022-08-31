const firebaseConfig = {
  apiKey: "AIzaSyAbv6MER0tymIAb7TOqMHyqcJ78tNU64Dg",
  authDomain: "magnatech-8d29d.firebaseapp.com",
  databaseURL: "https://magnatech-8d29d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "magnatech-8d29d",
  storageBucket: "magnatech-8d29d.appspot.com",
  messagingSenderId: "30108335069",
  appId: "1:30108335069:web:a2ce72530d936248385434",
  measurementId: "G-HGJEB35VTH"
};
//initialize firebase
firebase.initializeApp(firebaseConfig);

//referance your database
var contactFromDB = firebase.database().ref("contactForm");
document.getElementById("contactForm").addEventListener("submit",submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  

  saveMessages(name, emailid, msgContent);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};