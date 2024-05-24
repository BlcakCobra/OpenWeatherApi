import { useAppSelector } from '../../../../../hooks';
import style from "./CurrentWeather.module.css"
import { CurrentWeatherComp, getWeatherIconType } from '../../../../../types/ComponentsType';

  export const CurrentWeather: React.FC<CurrentWeatherComp> = ({getWeatherIcon}) => {

  const {weatherNow} = useAppSelector(state => state.currentWeather)

  
  return (
    <div className={style.weather_box}>
      <h2>Current Weather</h2>
      {weatherNow ? (
        <>
        <div className={style.iconBox}>
        <img alt="" src={getWeatherIcon(weatherNow)!} className={style.icon}/>
        </div>
        <h2>{weatherNow.name}</h2>
          <div>
            <strong>Temperature:</strong> {Math.floor(weatherNow.main.temp-273.15)}°C
          </div>
         
          <div>
            <strong>Description:</strong> {weatherNow.weather[0].description}
          </div>
          <div>
            <strong>Humidity:</strong> {weatherNow.main.humidity}%
          </div>
          <div>
            <strong>Min Temperature:</strong> {Math.floor(weatherNow.main.temp_min-273.15)}°C
          </div>
          <div>
            <strong>Max Temperature:</strong> {Math.floor(weatherNow.main.temp_max-273.15)}°C
          </div>
          <div>
            <strong>Wind Speed:</strong> {weatherNow.wind.speed} m/s
          </div>
          <div>
            <strong>Pressure:</strong> {weatherNow.main.pressure} hPa
          </div>
        </>
      ) : (
        <div>No current weather data available</div>
      )}
    </div>
  );
};