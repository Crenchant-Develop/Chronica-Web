import axios from 'axios';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../Theme';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../App.css';

const devRedirectURI = `http://localhost:3030/getuser`;
//const redirectURI = `http://chronica-web.vercel.app/getuser`;

const config = {
  "clientId": "962607441382625360",
  'clientSecret': 'm8bzU6EnND-XGDlJRVGyFSzfyCqvOg03',
  "redirectUri": devRedirectURI
};

async function GetDiscordToken() {
  let access_token = sessionStorage.getItem('access_token');
  if (access_token) {
    return access_token;
  }
  var code = window.location.search.split('?code=')[1];
  var params = new URLSearchParams();

  params.append("client_id", config["clientId"]);
  params.append("client_secret", config["clientSecret"]);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", config["redirectUri"]);


  //discordData를 출력해보면 discord의 access_token정보가 담긴 json을 볼 수 있다.
  const discordJson = await axios({
    url: 'https://discord.com/api/oauth2/token',
    method: 'POST',
    data: params
  });

  access_token = await discordJson.data.access_token;
  sessionStorage.setItem('access_token', access_token);

  return access_token;
}

export async function GetUser() {
  const authData = {
    headers: {
      "authorization": `Bearer ${await GetDiscordToken()}`
    }
  };

  const user = await axios.get("https://discord.com/api/users/@me", authData);
  return user.data; //유저 데이터를 리턴
}

export default function ShowUser() {
  const [userName, setUserName] = useState("");

  GetUser().then(user => {
    setUserName(user.username);
    sessionStorage.setItem('userName', JSON.stringify(userName));
  });

  return (
    <div className="main">
      <h2>NETEA</h2>
      <h5>네티아의 일대기를 만드는 것은 {userName}님입니다.</h5>
      <Stack spacing={2} direction="row" className="context">
        <ThemeProvider theme={Theme}>
          <Link to="/stat" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="large">스탯포인트 분배</Button>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="large">메인 화면으로</Button>
          </Link>
        </ThemeProvider>
      </Stack>
    </div>
  );
}