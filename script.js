// Rajat Dua
const auth=firebase.auth();

function signUp()
{
    var email=document.getElementById("email").value
    var pass=document.getElementById("pass").value

    auth.createUserWithEmailAndPassword(email,pass)
        .then(data=>{
            window.location.href = '/login.html'
        })
        .catch(err=>console.log(err))

}
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
    firebase.auth().signOut();
    window.location.href='/login.html';

    
}

//weather get
const getWeather = () =>{
    var city = document.getElementById('cityId').value;

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3da39a745a0711f429a30d440fdc7bdc`
const options={
    method:'GET'
}

fetch(url,options)
.then(res=>res.json())
.then(data=>{
    console.log(data)
    document.getElementById('cityName').innerText = data.name;
    document.getElementById('temp').innerText=Math.round(data.main.temp-273)
    document.getElementById('desc').innerText = data.weather[0].description
})
.catch(err=>console.log(err))
}












