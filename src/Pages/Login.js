import GetUser from '../components/GetUser';
import LoginButton from '../components/LoginButton'

export default function Login(props) {
  GetUser();
  return <LoginButton className="loginButton" authURL={props.authURL}/>;
}
