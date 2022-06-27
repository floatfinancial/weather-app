import { Forecast, ExtendedForecast } from './models';

const delay = (ms = 500) =>
  new Promise((res) => setTimeout(() => res(true), ms));

const API_KEY = '38c37c2bdf50280afb9576f78394befb';
const BASE = 'https://api.openweathermap.org/data/2.5';

export const fetchCity = async (param: string): Promise<Forecast> => {
  await delay();
  const res = await fetch(
    `${BASE}/weather/?q=${param}&units=metric&appid=${API_KEY}`,
  );
  const json: Forecast = await res.json();

  return json;
};

export const fetchForecast = async (lat: number, lon: number) => {
  await delay();
  const res = await fetch(
    `${BASE}/onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&appid=${API_KEY}`,
  );
  const json: ExtendedForecast = await res.json();
  return json;
};
