import { Typography } from '@mui/material';
import React from 'react';
import { DailyCurrent } from '../models';
import { WeatherIcon } from './WeatherIcon';

export const Current = (current: DailyCurrent) => {
  return (
    <div style={{ display: 'flex' }}>
      <WeatherIcon src={current.weather[0].icon} />
      <div>
        <Typography variant="body1">{Math.round(+current.temp)}°C</Typography>
        <Typography variant="body1">{current.weather[0].main}</Typography>
        <Typography variant="body1">
          Wind: {current.wind_speed} m/s @ {current.wind_deg}°
        </Typography>
        <Typography variant="body1">Pressure: {current.pressure}</Typography>
      </div>
    </div>
  );
};
