import React from 'react';

type WeatherIconProps = {
  src: string;
};

export const WeatherIcon = ({ src }: WeatherIconProps) => (
  <img
    alt="weather icon"
    src={`https://openweathermap.org/img/wn/${src}@2x.png`}
  />
);
