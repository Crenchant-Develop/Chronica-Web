import { getCookie } from '../components/Cookies';
import LoginButton from '../components/LoginButton'

//로그인 페이지
export default function Login(props) {
  return <LoginButton className="loginButton" authURL={props.authURL} />;
}