import axios from 'axios';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

const config = {
  "clientId": "962607441382625360",
  'clientSecret': 'm8bzU6EnND-XGDlJRVGyFSzfyCqvOg03',
  "redirectUri": "http://netea-chronica.github.io/getuser"
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
      <h2>{userName}님 환영합니다!</h2>
      <h5>이제부터 Chronica를 이용하실 수 있습니다.</h5>
      <Link to="/stat">
        <button>스탯포인트 분배</button>
      </Link>
      <Link to="/">
        <button>메인 화면으로</button>
      </Link>
    </div>
  );
}