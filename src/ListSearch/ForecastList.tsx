import { List } from '@mui/material';
import * as React from 'react';
import { Forecast } from '../models';
import { ForecastListItem } from './ForecastListItem';

type ListProps = {
  selected?: Forecast;
  forecasts: Forecast[];
  onRemove: (forecast: Forecast) => void;
  onSelect: (forecast: Forecast) => void;
};

export const ForecastList = ({
  selected,
  forecasts,
  onRemove,
  onSelect,
}: ListProps) => {
  if (!forecasts.length) return null;

  return (
    <List>
      {forecasts.map((f) => (
        <ForecastListItem
          key={f.id}
          selected={selected === f}
          forecast={f}
          onSelect={() => onSelect(f)}
          onRemove={() => onRemove(f)}
        />
      ))}
    </List>
  );
};
