//sign up
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