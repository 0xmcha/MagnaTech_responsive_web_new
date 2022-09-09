// refernce
    var messagesRef = firebase.database().ref('messages');


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
