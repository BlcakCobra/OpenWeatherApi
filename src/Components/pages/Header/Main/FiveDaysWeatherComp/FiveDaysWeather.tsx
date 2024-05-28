import React from 'react'
import { useAppSelector } from '../../../../../hooks'
import style from "./FiveDaysWeather.module.css"
import { FiveDaysWeatherComp } from '../../../../../types/ComponentsType'
import { useRef } from 'react'



export const FiveDaysWeather: React.FC<FiveDaysWeatherComp> = ({ getWeatherIcon }) => {
  const { weather5Days } = useAppSelector(state => state.currentWeather);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.WheelEvent) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: e.deltaY,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={style.FiveDaysWeather}>
      {weather5Days ? (
        <>
          <div className={style.title_box}>
            <h2 className={style.h2_title}>Weather for Five Days</h2>
            <h2>{weather5Days.city.name}</h2>
          </div>
          <div 
            className={style.weatherItem_box} 
            ref={containerRef}
            onWheel={handleScroll}
          >
            {weather5Days.list.map((weatherItem, index) => (
              <div key={index} className={style.weatherItem}>
                <img 
                  src={getWeatherIcon(weatherItem.weather[0].main) ?? ''} 
                  alt={weatherItem.weather[0].main} 
                  className={style.icon} 
                />
                <div className={style.description_box}>
                  <div className={style.date}>
                    <strong>Time:</strong> {new Date(weatherItem.dt * 1000).toLocaleTimeString()}
                  </div>
                  
                  <div className={style.temp}>
                    <strong>Temp:</strong> {Math.floor(weatherItem.main.temp) -273}°C
                  </div>
                  <div className={style.description}>
                    <strong>Description:</strong> {weatherItem.weather[0].description}
                  </div>
                  <div className={style.description}>
                    <strong>Max Temp:</strong> {Math.floor(weatherItem.main.temp_max) -273}°C
                  </div>
                  <div className={style.description}>
                    <strong>Min Temp:</strong> {Math.floor(weatherItem.main.temp_min) -273}°C
                  </div>
                  <div className={style.icon}></div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className={style.no_data_message}>Weather data not available</div>
      )}
    </div>
  );
};