import { useAppSelector } from '../../../../hooks';
import style from "./CurrentWeather.module.css"


export default function CurrentWeather() {
  const {weatherNow} = useAppSelector(state => state.currentWeather)
  return (
    <div className={style.weather_box}>
      <h2>Current Weather</h2>
      {weatherNow ? (
        <>
        <h2>{weatherNow.name}</h2>
          <div>
            <strong>Temperature:</strong> {weatherNow.main.temp}°C
          </div>
          <div>
            <strong>Weather:</strong> {weatherNow.weather[0].main}
          </div>
          <div>
            <strong>Description:</strong> {weatherNow.weather[0].description}
          </div>
          <div>
            <strong>Humidity:</strong> {weatherNow.main.humidity}%
          </div>
          <div>
            <strong>Min Temperature:</strong> {weatherNow.main.temp_min}°C
          </div>
          <div>
            <strong>Max Temperature:</strong> {weatherNow.main.temp_max}°C
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