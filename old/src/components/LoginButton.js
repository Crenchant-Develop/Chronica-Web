import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Theme } from "./Theme";
import SvgIcon from '@mui/material/SvgIcon';

import { ReactComponent as DiscordIco } from '../DiscordIcon.svg';

function LoginIcon() {
  return (
    <SvgIcon
      fontSize="inherit"
      style={
        {
          top: '50%',
          transform: 'scale(1.5)'
        }
      } >
      <DiscordIco />
    </SvgIcon>
  );
}

function LoginButton(props) {
  const style = { minWidth: '10vw', minHeight: '4vw' };
  return (
    <ThemeProvider theme={Theme}>
      <Button className={props.className} startIcon={<LoginIcon />}

        style={style}
        variant="contained"
        size="large"
        onClick={(event) => {
          event.stopPropagation();
          window.open(props.authURL, "_self");
        }}>
        디스코드 로그인
      </Button>
    </ThemeProvider>

  );
}

export default LoginButton;