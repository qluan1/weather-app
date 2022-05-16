import React, {useState} from 'react';
import UserForm from './components/UserForm';
import WeatherInfo from './components/WeatherInfo';
import { parseCityName } from './components/utils';
import WeatherApiKey from './apiKey';
import './App.css';

function queryUrl(cityName) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WeatherApiKey}`;
} 

let sampleData = require('./components/sample.json');

function App () {
    let [weatherData, setWeatherData] = useState(sampleData);
    
    function getWeatherData(cityName) {
        fetch(queryUrl(parseCityName(cityName)))
        .then((response) => response.json())
        .then((data) => setWeatherData(data));
    }

    return (
        <div>
            <UserForm 
                getWeatherData={getWeatherData}
            />
            <WeatherInfo 
                weatherData={weatherData}
            />
        </div>
    );
}

export default App;