import GetUser from '../components/GetUser';
import LoginButton from '../components/LoginButton'

//로그인 페이지
export default function Login(props) {
  GetUser();
  return <LoginButton className="loginButton" authURL={props.authURL}/>;
}