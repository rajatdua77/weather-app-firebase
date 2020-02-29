const checkUserAuthState = () =>{
   firebase.auth().onAuthStateChanged(user=>{
        if(user){
            return true;
        }
        else
        return false;
    })
       
    
}
window.onload = function(){
    if(checkUserAuthState()){
        window.location.href = '/weather.html'
    }else{
        window.location.href = '/login.html'
    }
}