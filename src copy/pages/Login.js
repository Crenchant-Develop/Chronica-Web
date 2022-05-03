import LoginButton from '../components/LoginButton'
import Stack from '@mui/material/Stack';

//로그인 페이지
export default function Login(props) {
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center">
      <LoginButton className="loginButton" authURL={props.authURL} />
    </Stack>
  );
}