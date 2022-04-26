import axios from 'axios';
import { setCookie } from './Cookies';

const RootURI = `${window.location.origin}/`;
//const LoginURI = `${window.location.origin}/login`;
const DefaultURI = `${RootURI}`;

export const Config = {
  "clientId": "962238961844121611",
  "clientSecret": "tL6uJ7ExujmJnueAB5Thoqi8qNiCufA2",
  "redirectUri": `${DefaultURI}`,
  "authURL": "https://discord.com/api/oauth2/authorize"
};


Config.authURL = `${Config.authURL}?client_id=${Config.clientId}
&redirect_uri=${Config.redirectUri}
&response_type=code&scope=identify&prompt=none`.replace(/\n|\r/g, "");

export async function GetDiscordToken() {
  let access_token = sessionStorage.getItem('access_token');
  if (access_token) {
    console.log('비 로그인시, 로그인가능. 토큰이 이미 존재함: ' + access_token);
    return access_token; //이미 발행된 토큰이 있으면 그냥 있는거 리턴
  }


  let splitedCode = window.location.search.split('?code=');
  let code = splitedCode[1];
  if (!code) {
    console.warn('현재 토큰 정보를 가져올 수 없는 URI 상태입니다');
    window.open(RootURI + 'login', "_self");
    return undefined;
  }

  const getParams = async () => {
    let params = new URLSearchParams();
    params.append("client_id", Config["clientId"]);
    params.append("client_secret", Config["clientSecret"]);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", Config["redirectUri"]);
    //params.append("prompt", "none");
    return params;
  }

  let params = await getParams();

  //토큰을 가져온다
  //discordData를 출력해보면 discord의 access_token정보가 담긴 json을 볼 수 있다.
  const discordJson = await axios({
    url: 'https://discord.com/api/oauth2/token',
    method: 'POST',
    data: params
  }).then(async (discordJson) => {
    return discordJson.data;
  }).catch(error => {
    //Config.redirectUri = LoginURI;
    return undefined;
  });

  access_token = discordJson.access_token;
  sessionStorage.setItem('access_token', access_token);

  console.log('토큰: ' + access_token);

  return access_token;
}

export async function GetUser() {

  const access_token = await GetDiscordToken();
  const authData = {
    headers: {
      "authorization": `Bearer ${access_token}`
    }
  };

  //유저 데이터 가져오기
  const user = await axios.get("https://discord.com/api/users/@me", authData);
  return user.data; //유저 데이터를 리턴
}

export async function GetUserName() {
  try {
    const user = await GetUser();

    console.log(`로그인한 유저의 이름은 ${user.username} 입니다`);
    setCookie('userName', user.username);
    return user.username;
  } catch (error) {
    console.error("로그인상태를 확인하세요. 유저정보를 가져올 수 없습니다. Error: from GetUser()");

    return undefined;
  }
}
