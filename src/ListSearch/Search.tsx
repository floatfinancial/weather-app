import * as React from 'react';
import {
  TextField,
  InputAdornment,
  CircularProgress,
  TextFieldProps,
  Snackbar,
  Alert,
  AlertProps,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { fetchCity } from '../weather.service';
import { Forecast, ResponseCode } from '../models';

type SearchProps = {
  onAdd: (forecast: Forecast) => void;
} & TextFieldProps;

export const Search = ({ onAdd, ...rest }: SearchProps) => {
  const [value, setValue] = React.useState('');
  const [searching, setSearching] = React.useState(false);
  const [alert, setAlert] = React.useState<Partial<AlertProps>>();
  const [showAlert, setShowAlert] = React.useState(false);

  const showSnackBar = (props: Partial<AlertProps>) => {
    setAlert(props);
    setShowAlert(true);
  };

  const hideSnackbar = () => setShowAlert(false);

  const onSearch = async (term: string) => {
    setSearching(true);
    try {
      const city = await fetchCity(term);
      if (city.cod === ResponseCode.GOOD) {
        onAdd(city);
        setValue('');
        showSnackBar({
          severity: 'success',
          children: `${city.name}, ${city.sys.country} added!`,
        });
      } else if (city.cod === ResponseCode.NOT_FOUND) {
        showSnackBar({ severity: 'error', children: `${term} not found` });
      } else if (city.cod === ResponseCode.BAD_KEY) {
        showSnackBar({ severity: 'error', children: `Invalid API Key` });
      }
    } catch {
      showSnackBar({
        severity: 'error',
        children: `An unknown error occurred`,
      });
    } finally {
      setSearching(false);
    }
  };

  return (
    <>
      <TextField
        {...rest}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSearch(value);
        }}
        disabled={searching}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {searching ? <CircularProgress size={20} /> : <SearchIcon />}
            </InputAdornment>
          ),
        }}
      />
      <Snackbar autoHideDuration={5000} onClose={hideSnackbar} open={showAlert}>
        <Alert variant="filled" onClose={hideSnackbar} {...(alert || {})} />
      </Snackbar>
    </>
  );
};
