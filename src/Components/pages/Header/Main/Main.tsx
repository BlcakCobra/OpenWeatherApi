import React from 'react'
import style from "./Main.module.css"
import { MainComp } from '../../../../types/ComponentsType'
import { CurrentWeather } from './CurrentWeatherComp/CurrentWeather'
import { FiveDaysWeather } from './FiveDaysWeatherComp/FiveDaysWeather'

export const Main: React.FC<MainComp> = ({section,getWeatherIcon,getFiveDayWeatherIcons}) => {
    return (
    <div className={style.Main}>
        {
            section === "CurrentWeather" && <CurrentWeather getWeatherIcon={getWeatherIcon}/>
        }
        {
            section === "5 Day / 3 Hour Forecast" && <FiveDaysWeather getFiveDayWeatherIcons={getFiveDayWeatherIcons}/>
        }
    </div>
  )
}
