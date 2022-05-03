import { TitleTheme } from "./Theme";
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Nav from './Nav';

export default function Header(props) {
  return (
    <Grid item xs={props.itemStyle}>
      <header {...props}>
        {/* <Nav /> */}
      </header>
    </Grid>
  );
}