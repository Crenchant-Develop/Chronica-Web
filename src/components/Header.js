import { TitleTheme } from "./Theme";
import { ThemeProvider } from '@mui/material/styles';
import Nav from './Nav';

export default function Header(props) {
  return (
    <header className="header" id="wrapper">
      <ThemeProvider theme={TitleTheme}>
        <Nav />
      </ThemeProvider>
    </header>
  );
}