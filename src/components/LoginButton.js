import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Theme from "./Theme";
import SvgIcon from '@mui/material/SvgIcon';

import { ReactComponent as DiscordIco } from '../DiscordIcon.svg';

function LoginIcon(props) {
  return (
    <SvgIcon {...props} >
      <DiscordIco />
    </SvgIcon>
  );
}

function LoginButton(props) {
  return (
    <article className="context">
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center">
        <ThemeProvider theme={Theme}>
          <Button className={props.className} startIcon={
            <LoginIcon
              fontSize="inherit"
              style={
                {
                  top: '50%',
                  transform: 'scale(1.5)'
                }
              }
            />
          }

            style={
              { minWidth: '10vw', minHeight: '4vw' }
            }
            variant="contained"
            size="large"
            onClick={(event) => {
              event.stopPropagation();
              window.open(props.authURL, "_self");
            }}>
            디스코드 로그인
          </Button>
        </ThemeProvider>
      </Stack>
    </article>
  );
}

export default LoginButton;