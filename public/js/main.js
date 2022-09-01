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
firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//listen to form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // get Values
    let name = getInputVal('name');
    let subject = getInputVal('subject');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    //save message

    saveMessage(name, subject, email, phone, message);

    //show alert
    document.querySelector('.alert').style.display='block';

    //Hide alert after 3 s
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    }, 3000)
    //clear form
    document.getElementById('contactForm').reset();
}
//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, subject, email, phone, message){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        subject: subject,
        email: email,
        phone: phone,
        message: message
    })
}