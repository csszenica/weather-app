import React from 'react'

const WeatherData = ({weatherData}) => {
  return (
    <div>
        <p>{ Math.floor(weatherData.main.temp) } °C</p>
        <p>{ weatherData.weather[0].main }:{ weatherData.weather[0].description } </p>
    </div>
  )
}

export default WeatherData