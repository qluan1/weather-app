import React, {useState, useEffect} from 'react';
import {kToC, kToF, mpsToKmph, mpsToMph} from './utils';


function WeatherInfo (props) {

    let [unit, setUnit] = useState('celsius');
    
    function handleClick() {
        setUnit(
            (unit == 'celsius')? 'fahrenheit': 'celsius'
        );
    }

    useEffect(
        () => {
            let current = document.querySelector('.'+'unit-'+ ((unit==='celsius')?'celsius':'fahrenheit'));
            let next = document.querySelector('.'+'unit-'+ ((unit==='celsius')?'fahrenheit':'celsius'));
            if (current) current.classList.remove('unit-clickable');
            if (next) next.classList.add('unit-clickable');
            if (next) next.addEventListener('click', handleClick);

            return (
                () => {
                    if (next) next.removeEventListener('click', handleClick);
                }
            );
        }
    )

    let info =  (
        <div>
            <h1>No Weather Data Yet</h1>
        </div>
    );
    if (props.weatherData && props.weatherData.cod === 200) {
        let cityName = props.weatherData.name;
        let temperature = ((unit === 'celsius')? 
            kToC(props.weatherData.main.temp):
            kToF(props.weatherData.main.temp));
        let feelsLikeTemp = ((unit === 'celsius')? 
            kToC(props.weatherData.main.feels_like):
            kToF(props.weatherData.main.feels_like))
            + 
            ((unit === 'celsius')? '\xB0C':'\xB0F');
        let windSpeed = ((unit === 'celsius')?
            mpsToKmph(props.weatherData.wind.speed):
            mpsToMph(props.weatherData.wind.speed))
            +
            ((unit === 'celsius')? 'km/h': 'm/h');

        
        info = (
            <div>
                <div className="weather-city">
                    {"City: " + cityName}
                </div>
                <div className="temp-container">
                    <div className="temp-reading">{temperature}</div>
                    <div className="unit-controller">
                        <span className="unit-celsius">
                            {"\xB0C"}
                        </span>
                        <span className="unit-separator"></span>
                        <span className="unit-fahrenheit">
                            {"\xB0F"}
                        </span>
                    </div>
                    <img 
                        className="weather-icon" 
                        src={"http://openweathermap.org/img/wn/" 
                            + props.weatherData.weather[0].icon 
                            + "@2x.png"} 
                    />
                </div>
                <div className="weather-description">
                    {"Description: " + props.weatherData.weather[0].description}
                </div>
                <div className="feels-like">
                    {"Feels-like: " + feelsLikeTemp}
                </div>
                <div className="humidity">
                    {"Humidity: " + props.weatherData.main.humidity.toString()+"%"}
                </div>
                <div className="wind-speed">
                    {"Wind Speed:" + windSpeed}
                </div>
            </div>
        );
    }


    return (
        <div>
            {info}
        </div>
    )
}

export default WeatherInfo;