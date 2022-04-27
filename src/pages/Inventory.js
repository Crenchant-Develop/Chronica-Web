import React from 'react';

//defined components
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../components/Theme';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Inventory() {
  return (
    <article className="context">
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center">
        <ThemeProvider theme={Theme}>
          <Button variant="contained" size="large" onClick={(event) => {
            event.stopPropagation();
            window.open("https://discord.gg/VAfjrWUcZG", "_blank");
          }}>인벤토리 화면입니다.</Button>
        </ThemeProvider>
      </Stack>
    </article>
  );
};

export default Inventory;