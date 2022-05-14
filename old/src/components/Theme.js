import '../App.scss';
import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#606080',
    },
    secondary: {
      main: '#706080',
    },
  },

  typography: {
    fontFamily: 'Pretendard-Regular',
  },
});

const TitleTheme = createTheme({
  typography: {
    fontFamily: 'Iceland-Regular',
  },
});

export { Theme, TitleTheme };