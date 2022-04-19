import GetUser from '../Components/GetUser';
import LoginButton from '../Components/LoginButton'

export default function Login(props) {
  GetUser();
  return <LoginButton className="loginButton" authURL={props.authURL}/>;
}
