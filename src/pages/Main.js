import React, { useEffect, useState } from 'react';

//defined components
import { GetUserName } from '../components/GetUser';
import { getCookie, setCookie } from '../components/Cookies';
import Lorem from '../components/Lorem';

import { Link } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '../components/Theme';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Main() {
  let [userName, setUserName] = useState(undefined);

  const onUserNamer = () => {
    (async () => { 
      //코드가 두 번 실행되는 버그가 있음. 원인 분석이 필요함
      setUserName(await GetUserName());
    })();
  };

  useEffect(onUserNamer, [onUserNamer]);

  return (
    <div className="main context">

      <br />
      {userName ? userName : "모험가"}님! 네티아 세계에서 무엇을 하고 싶으세요?<br /><br />
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center">
        <ThemeProvider theme={Theme}>
          <Button variant="contained" size="large" onClick={(event) => {
            event.stopPropagation();
            window.open("https://discord.gg/VAfjrWUcZG", "_blank");
          }}>서버 방문하기</Button>
          <Link to="/inventory" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="large">인벤토리 화면</Button>
          </Link>
        </ThemeProvider>
      </Stack>

      <Lorem />
    </div>
  );
};

export default Main;