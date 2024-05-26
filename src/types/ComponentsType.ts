import { ForecastResponse } from "./5daysType";
import { WeatherData } from "./SliceType";

export interface SearchBarComp {
    search: {
      lat: string,
      lon: string
    },
    controlledSearchBar: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void,
    onSubmit: (lat: string, lon: string) => void
  }
  
  export interface SoundBarComp {
    volume: number;
    changeVolume: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  export interface HeaderChaptersComp  {
    chapters: string[] ,
    section:string,
    handleSection: (section: string) => void;
  };



  export interface MainComp {
    section:string,
    getWeatherIcon: getWeatherIconType
  }


  export type getWeatherIconType = (weatherItem:string) => string | null

  export interface FiveDaysWeatherComp{
    getWeatherIcon : getWeatherIconType
  }

  export interface CurrentWeatherComp{
    getWeatherIcon:getWeatherIconType
  }