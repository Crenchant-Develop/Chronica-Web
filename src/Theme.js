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

export default Theme;