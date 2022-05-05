// import { TitleTheme } from "../design/Theme";
// import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


export default function Header(props) {
  return (
    <header {...props}>
      <Grid container sx={props.sx}>
        <div>
          <h1>
            NETE<mark>△</mark>
          </h1>
          <h5>당신이 만드는 일대기, 네티아</h5>
        </div>
      </Grid>
    </header>
  );
}