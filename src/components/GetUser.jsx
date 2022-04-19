import axios from 'axios';

export const Config = {
  "clientId": "962238961844121611",
  "clientSecret": "3wrRf2d3gT33c_F5JDWCYNjndMph6Yjy",
  "redirectUri": `${window.location.origin}/`,
  "authURL": "https://discord.com/api/oauth2/authorize"
};

Config.authURL = `${Config.authURL}?client_id=${Config.clientId}
&redirect_uri=${Config.redirectUri}
&response_type=code&scope=identify&prompt=none`;
//Config.authURL = Config.authURL.replace(/\n|\r/g, "");

async function GetDiscordToken() {
  let access_token = sessionStorage.getItem('access_token');
  if (access_token) {
    return access_token; //이미 발행된 토큰이 있으면 그냥 있는거 리턴
  }

  let code = window.location.search.split('?code=')[1];
  if (code == null) {
    return "none";
  }

  const getParams = () => {
    let params = new URLSearchParams();
    params.append("client_id", Config["clientId"]);
    params.append("client_secret", Config["clientSecret"]);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", Config["redirectUri"]);
    //params.append("prompt", "none");
    return params;
  }

  let params = getParams();
  //토큰을 가져온다
  //discordData를 출력해보면 discord의 access_token정보가 담긴 json을 볼 수 있다.
  const discordJson = await axios({
    url: 'https://discord.com/api/oauth2/token',
    method: 'POST',
    data: params
  })

  access_token = discordJson.data.access_token;
  sessionStorage.setItem('access_token', access_token);

  return access_token;
}

async function GetUser() {
  const authData = {
    headers: {
      "authorization": `Bearer ${await GetDiscordToken()}`
    }
  };

  //유저 데이터 가져오기
  const user = await axios.get("https://discord.com/api/users/@me", authData);
  sessionStorage.setItem('userName', user.data.username);

  return user.data; //유저 데이터를 리턴
}

export default GetUser;