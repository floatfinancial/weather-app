import format from 'date-fns/format';
import React from 'react';
import { DailyWeather } from '../models';
import { WeatherIcon } from './WeatherIcon';

export const Daily = (weather: DailyWeather) => {
  const date = new Date(weather.dt * 1000);
  return (
    <>
      <div>{format(date, 'd')}</div>
      <div>{format(date, 'E')}</div>
      <WeatherIcon src={weather.weather[0].icon} />
      <div>{Math.round(weather.temp.day)}°C</div>
    </>
  );
};
