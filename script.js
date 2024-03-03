//https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=3c93d0ea89d37377b1575a83cbe65cd7&units=metric
const apiKey="3c93d0ea89d37377b1575a83cbe65cd7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const input = document.querySelector("input");
const button = document.querySelector("button");
const weatherImage = document.querySelector(".weather-img")

 async function showTheWeather(city){
    const responses=await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(responses.status === 404){
        document.querySelector(".error").style.display="block"; //opposite of display none ie.to show error
        document.querySelector(".weather").style.display="none";//to hide weather details
    }else{
        console.log(responses);
        const data = await responses.json();
        document.querySelector('.city').textContent = data.name;
        document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
        document.querySelector(".windSpeed").textContent = data.wind.speed + "Km/hr";
        document.querySelector(".Hum").textContent = data.main.humidity + "%";
    
        console.log(data);
    
         if(data.weather[0].main === "Haze") {
            weatherImage.src = "images/haze.png";
         }else if (data.weather[0].main === "Clouds") {
            weatherImage.src = "images/clouds.png";
         }else if(data.weather[0].main === "Clear"){
            weatherImage.src = "images/clear.png";
         } else if(data.weather[0].main === "Mist"){
            weatherImage.src = "images/mist.png";
         }else if (data.weather[0].main === "Rain"){
            weatherImage.src = "images/rainy-day.png";
         }
    
         document.querySelector(".weather").style.display = 'block';//to show weather details
         document.querySelector(".error").style.display="none";//to not show any error
    }


   
    
    }

    button.addEventListener('click', function() {
    showTheWeather(input.value)
    })












