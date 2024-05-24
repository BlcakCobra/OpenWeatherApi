import { ForecastResponse } from "./5daysType";

interface Coord {
  lon: number;
  lat: number;
}
type WeatherMain = 'Clear' | 'Clouds' | 'Drizzle' | 'Rain' | 'Thunderstorm' | 'Snow' | 'Mist' | 'Smoke' | 'Dust' | 'Sand' | 'Ash' | 'Squall' | 'Tornado';


interface Weather {
  id: number;
  main: WeatherMain | null;
  description: string;
  icon: string;
}

interface MainTemp {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number; 
  grnd_level?: number; 
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Rain {
  "1h": number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherData {
  coord: Coord;
  weather: Weather[];
  base: string;
  main:  MainTemp;
  visibility: number;
  wind: Wind;
  rain?: Rain; 
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
  export interface CurrentWeatherInitialState {
    weatherNow: WeatherData | null,
    weather5Days: ForecastResponse | null,
    status: string 
}



