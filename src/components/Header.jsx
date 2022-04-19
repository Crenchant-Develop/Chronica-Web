import { Link } from "react-router-dom";
import Logo from '../Components/Logo';

export default function Header(props) {
  return (
    <header className="header">
      <Logo className="logo" logoImage={props.logoImage} />
      <h1>
        NETE▲
      </h1>
      <h5>당신이 만드는 일대기, 네티아</h5>
    </header>
  );
}