import { IconButton, ListItemButton, ListItemText } from '@mui/material';
import { Delete } from '@mui/icons-material';
import * as React from 'react';
import { Forecast } from '../models';

type ForecastListItemProps = {
  forecast: Forecast;
  onRemove: () => void;
  onSelect: () => void;
  selected?: boolean;
};

export const ForecastListItem = ({
  forecast,
  onRemove,
  onSelect,
  selected,
}: ForecastListItemProps) => (
  <div style={{ position: 'relative' }}>
    <ListItemButton onClick={onSelect} selected={selected}>
      <ListItemText>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingRight: 60,
          }}
        >
          <div>
            {forecast.name}, {forecast.sys.country}
          </div>
          <div>
            {Math.round(forecast.main.temp)}°C, {forecast.weather[0].main}
          </div>
        </div>
      </ListItemText>
    </ListItemButton>
    <div
      style={{
        position: 'absolute',
        right: 20,
        top: '50%',
        transform: 'translate3d(0,-50%,0)',
      }}
    >
      <IconButton onClick={onRemove}>
        <Delete />
      </IconButton>
    </div>
  </div>
);
