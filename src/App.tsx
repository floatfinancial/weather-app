import React, { useState } from 'react';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Detail } from './Detail';
import { Forecast } from './models';
import { ListSearch } from './ListSearch';

interface AppState {
  forecasts: Forecast[];
  selected?: Forecast;
}

export const App = () => {
  const [state, setState] = useState<AppState>({
    forecasts: [],
  });

  return (
    <div style={{ minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '40px' }}>
        <div style={{ marginBottom: 20 }}>
          <ListSearch
            selected={state.selected}
            forecasts={state.forecasts}
            onAdd={(f) =>
              setState((s) => ({ ...s, forecasts: [...s.forecasts, f] }))
            }
            onRemove={(f) =>
              setState((s) => ({
                ...s,
                forecasts: s.forecasts.filter(({ id }) => id !== f.id),
              }))
            }
            onSelect={(selected) => setState({ ...state, selected })}
          />
        </div>

        {state.selected ? <Detail {...state.selected} /> : null}
      </div>
    </div>
  );
};
