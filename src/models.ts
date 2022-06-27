interface Response {
  cod: ResponseCode;
}

interface WeatherSys {
  country: string;
}

export interface Daily {
  dt: number;
  weather: ForecastWeather[];
  wind_deg: number;
  wind_speed: number;
  pressure: number;
  sys: WeatherSys;
}

export interface DailyCurrent extends Daily {
  temp: string;
}

export interface DailyWeather extends Daily {
  temp: {
    day: number;
    max: number;
    min: number;
  };
}

interface ForecastWeather {
  description: string;
  id: number;
  main: string;
  icon: string;
}

interface ForecastMain {
  temp: number;
}

export interface ExtendedForecast extends Response {
  daily: DailyWeather[];
  current: DailyCurrent;
}

export interface Forecast extends Response {
  id: number;
  name: string;
  weather: ForecastWeather[];
  main: ForecastMain;
  coord: Coord;
  sys: WeatherSys;
}

interface Coord {
  lat: number;
  lon: number;
}

export enum ResponseCode {
  GOOD = 200,
  NOT_FOUND = '404',
  BAD_KEY = 401,
}
