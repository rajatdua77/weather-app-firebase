//login
const auth=firebase.auth();
    //login function   
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           
           document.getElementById("login").style.display="null";
           window.location.href='/weather.html';

           var user = firebase.auth().currentUser;
           if (user != null) {
            var email_id = user.email;
          document.getElementById("welc").innerHTML="Welcome "+email_id +"to my osm Weather App";
           }
         
        } else {
          // No user is signed in.
         
           document.getElementById("login").style.display="block";

        }
      });    

function login()
{
    var email=document.getElementById("email").value
    var pass=document.getElementById("pass").value

    auth.signInWithEmailAndPassword(email, pass)
      
        .catch(err=>console.log(err))
        //window.alert("working");

};

function logout()
{
    firebase.auth().signOut()
    .then(data=>{
        window.location.href = '/login.html'
    })
    .catch(err=>console.log(err))
   
}
