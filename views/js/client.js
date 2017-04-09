$( document ).ready(function() {
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");

    if (isMobile.matches) {
        console.log('mobile device')//Conditional script here
    }
 });

function heClickMe(){
  document.getElementById('title1').innerHTML = "IT'S MINE NOW !!"
}

function heClickYou(){
  document.getElementById('title1').innerHTML = "Man069 serveur"
}

window.onload = function(){
  //GetWeatherAPI('Lyon');

}

function GetWeatherAPI(data){
  var city = document.getElementById('weatherCity').value;
  var ApiKEY = 'e257b573e65f97900667772d2619e2f0';
  var http = new XMLHttpRequest();
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid=' + ApiKEY;
  http.open('GET',url,true);
  http.onreadystatechange = function () {
    if(http.readyState == 4 && http.status == 200){
      WeatherProcessing(http.responseText);
    }
    else{
      console.log('ERROR Weather process')
    }
  }
  http.send(null);
}


function WeatherProcessing(data){
  var space = document.getElementById('resultWeather');
}
