import * as React from 'react';
import { Forecast } from '../models';
import { ForecastList } from './ForecastList';
import { Search } from './Search';

type ListSearchProps = {
  forecasts: Forecast[];
  selected?: Forecast;
  onAdd: (forecast: Forecast) => void;
  onRemove: (forecast: Forecast) => void;
  onSelect: (forecast: Forecast) => void;
};

export const ListSearch = ({
  forecasts,
  selected,
  onAdd,
  onRemove,
  onSelect,
}: ListSearchProps) => {
  return (
    <div>
      <Search
        onAdd={onAdd}
        label="Search for a City"
        fullWidth
        variant="standard"
      />
      <ForecastList
        selected={selected}
        onSelect={onSelect}
        forecasts={forecasts}
        onRemove={onRemove}
      />
    </div>
  );
};
