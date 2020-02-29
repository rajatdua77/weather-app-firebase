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
