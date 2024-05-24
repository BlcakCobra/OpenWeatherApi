import React from 'react'
import { useAppSelector } from '../../../../../hooks'
import style from "./FiveDaysWeather.module.css"
import { FiveDaysWeatherComp } from '../../../../../types/ComponentsType'


  export const FiveDaysWeather: React.FC<FiveDaysWeatherComp> = ({getFiveDayWeatherIcons}) => {
  const { weather5Days } = useAppSelector(state => state.currentWeather)
  
  return (
    <div className={style.FiveDaysWeather}>
      <h2>Weather for Five Days</h2>
      {weather5Days ? (
        <>
          <h2>{weather5Days.city.name}</h2>
          <div className={style.weatherList}>
            {weather5Days.list.map((weatherItem, index) => (
              <div key={index} className={style.weatherItem}>
                <div className={style.date}>{new Date(weatherItem.dt * 1000).toLocaleDateString()}</div>
                <div className={style.temp}>Temp: {weatherItem.main.temp}°C</div>
                <div className={style.description}>{weatherItem.weather[0].description}</div>
                <div className={style.icon}>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>Weather data not available</div>
      )}
    </div>
  )
}