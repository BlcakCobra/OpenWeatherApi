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
  export type getWeatherIconType = (weatherItem: WeatherData) => string | null
  export type getFiveDayWeatherIconType = (weatherItem: ForecastResponse) => (string | null)[];

  export interface MainComp {
    section:string,
    getWeatherIcon:(weatherItem: WeatherData) => string | null
    getFiveDayWeatherIcons : (weatherItem: ForecastResponse) => (string | null)[];
  }

  export interface FiveDaysWeatherComp{
    getFiveDayWeatherIcons : (weatherItem: ForecastResponse) => (string | null)[];
  }

  export interface CurrentWeatherComp{
    getWeatherIcon:(weatherItem: WeatherData) => string | null
  }