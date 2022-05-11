import { TitleTheme } from "./Theme";
import { ThemeProvider } from '@mui/material/styles';

export default function Header(props) {
  return (
    <ThemeProvider theme={TitleTheme}>
      <header className="header">
        <div className="context">
          <h1>
            NETE
            <div className='delta'>
              △
            </div>
          </h1>
          <h5>당신이 만드는 일대기, 네티아</h5>
        </div>
      </header>
    </ThemeProvider>
  );
}