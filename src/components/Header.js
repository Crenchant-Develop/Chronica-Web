import { TitleTheme } from "./Theme";
import { ThemeProvider } from '@mui/material/styles';
import Nav from './Nav';

export default function Header(props) {
  return (
    <ThemeProvider theme={TitleTheme}>
      <header className="header container">
      <Nav/>
      </header>
    </ThemeProvider>
  );
}