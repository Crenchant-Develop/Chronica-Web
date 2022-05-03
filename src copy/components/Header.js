import { TitleTheme } from "./Theme";
import { ThemeProvider } from '@mui/material/styles';
import Nav from './Nav';

export default function Header(props) {
  return (
    <header {...props}>
      <Nav />
    </header>
  );
}