import { CircularProgress, Divider, Typography } from '@mui/material';
import * as React from 'react';
import { ExtendedForecast, Forecast } from '../models';
import { fetchForecast } from '../weather.service';
import { Current } from './Current';
import { Daily } from './Daily';

type DetailStateFetching = {
  fetching: true;
  extendedForecast: null;
};

type DetailStateFetched = {
  fetching: false;
  extendedForecast: ExtendedForecast;
};

type DetailState = DetailStateFetching | DetailStateFetched;

export const Detail = (forecast: Forecast) => {
  const [state, setState] = React.useState<DetailState>({
    fetching: true,
    extendedForecast: null,
  });

  React.useEffect(() => {
    const fetch = async () => {
      setState({ extendedForecast: null, fetching: true });
      const extendedForecast = await fetchForecast(
        forecast.coord.lat,
        forecast.coord.lon,
      );
      setState({ fetching: false, extendedForecast });
    };
    fetch();
  }, [forecast.coord.lat, forecast.coord.lon]);

  if (state.fetching) {
    return (
      <div style={{ textAlign: 'center', padding: 20 }}>
        <Typography variant="body1" style={{ marginBottom: 10 }}>
          Fetching forecast for {forecast.name}, {forecast.sys.country}
        </Typography>
        <CircularProgress size={20} />
      </div>
    );
  }

  return (
    <>
      <Typography variant="h4">
        {forecast.name}, {forecast.sys.country}
      </Typography>
      <br />
      <Typography variant="h5">Current Conditions</Typography>
      <Divider />
      <br />
      <Current {...state.extendedForecast.current} />
      <br />
      <Typography variant="h5">Forecast Conditions</Typography>
      <Divider />
      <br />
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {state.extendedForecast.daily.slice(0, 6).map((daily) => (
          <div style={{ flex: 1, textAlign: 'center', marginBottom: 15 }}>
            <Daily {...daily} />
          </div>
        ))}
      </div>
    </>
  );
};
