//!html elemanlarını seçme
import  fetchWeatherData  from "./api.js";
import { updateUI } from "./ui.js";


 const selectors = {
    city:document.querySelector(".weather-city"),
    datetime: document.querySelector(".weather-datetime"),
    weatherForecast:document.querySelector(".weather-forecast"),
    weatherTemperature:document.querySelector(".weather-temperature"),
    weatherIcon:document.querySelector(".weather-icon"),
    weatherMinMax: document.querySelector(".weather-minmax"),
    weatherRealfeel:document.querySelector(".weather-realfeel"),
    weatherHumidity:document.querySelector(".weather-humidity"),
    weatherWind:document.querySelector(".weather-wind"),
    weatherPressure:document.querySelector(".weather-pressure"),
    searchForm:document.querySelector(".weather-search"),
    searchInput: document.querySelector(".weather-searchform"),
    unitCelsius: document.querySelector(".weather-units-celsius"),
    unitFarenheit: document.querySelector(".weather-units-fahrenheit"),
    maxTemp:document.getElementById("maxTemp")


}

let currCity = "London";
let units ="metric";

//!hava durumu verileri apiden alma ve UI i güncellemek için asenkron fonksiyon
export async function getWeather() {
   const data = await fetchWeatherData(currCity,units);
  // console.log(data);
   updateUI(data,selectors);
   

}

//!arama kısmı için olay izleyici
selectors.searchForm.addEventListener("submit" , async (e) => {
    e.preventDefault();
    currCity = selectors.searchInput.value;
   
   //! console.log(currCity);
   await getWeather();
   selectors.searchInput.value="";
});

selectors.unitCelsius.addEventListener("click", () => {
   if(units !== "metric"){
      units = "metric";
      getWeather();
   }
});

selectors.unitFarenheit.addEventListener("click", () => {
   if(units !== "imperial") {
      units = "imperial";
      getWeather();
   }
});

document.body.addEventListener("load" , async () => {
   await getWeather();
})
