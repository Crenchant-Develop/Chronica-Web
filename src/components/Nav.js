import * as React from 'react';
import Link from '@mui/material/Link';

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

// import { Theme } from "../design/Theme";
// import { ThemeProvider } from '@mui/material/styles';

// import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
import Grid from '@mui/material/Grid';

function Item(props) {
  const navContainer = {
    backgroundColor: '#202020',
    position: 'relative',
    top: '-18px'
  }

  return (
    <Grid sx={navContainer}>
      <h3 className="subtitle">
        {props.subtitle}
      </h3>
      {props.children}
    </Grid>
  )
}

export default function Nav(props) {

  if (props.condition) {
    return (
      [
        <Item subtitle="응애" key="0">
          <Link href="/1" underline="hover">
            {'응애'}
          </Link>&nbsp;
          <Link href="/2" underline="hover">
            {'나 아기 메뉴'}
          </Link>
        </Item>,
        <Item subtitle="테스트 중입니다만," key="1">
          문제라도?
        </Item>,
        <Item subtitle="삑삑이의 유래" key="2">
          <Link
            rel="noopener noreferrer"
            href="https://youtu.be/gS3O7c4zpKk"
            target="_blank"
            underline="hover">
            {'여기 참고'}
          </Link>
        </Item>,
        <Item subtitle="디스코드 서버" key="3">
          <Link
            rel="noopener noreferrer"
            href="https://discord.gg/VAfjrWUcZG"
            target="_blank"
            underline="hover">
            {'서버 방문하기'}
          </Link>
        </Item>
      ]
    );
  }
  else {
    return undefined;
  }
}


// export default function Nav(props) {
//     const [anchorEl, setAnchorEl] = React.useState(null);

//     function handleClick(event) {
//         if (anchorEl !== event.currentTarget) {
//             setAnchorEl(event.currentTarget);
//         }
//     }

//     function handleClose() {
//         setAnchorEl(null);
//     }

//     return (
//         <ThemeProvider theme={Theme}>
//             <Box sx={{ flexGrow: 1 }}>
//                 <AppBar style={{
//                     backgroundColor: "#202020",
//                     boxShadow: "none",
//                 }}>
//                     <Toolbar>
//                         <IconButton
//                             color="inherit"
//                             aria-owns={anchorEl ? "simple-menu" : undefined}
//                             onClick={handleClick}
//                         >
//                             <MenuIcon sx={{ fontSize: 40 }} />
//                         </IconButton>
//                         <Menu
//                             PaperProps={{
//                                 style: {
//                                     width: 200
//                                 },
//                             }}
//                             id="simple-menu"
//                             anchorEl={anchorEl}
//                             open={Boolean(anchorEl)}
//                             onClose={handleClose}
//                         >
//                             <MenuItem>응애</MenuItem>
//                             <MenuItem>나 아기 메뉴</MenuItem>
//                         </Menu>
//                         <Button color="inherit">Login</Button>
//                         <Link className={props.className} to="/">
//                             <Button>
//                                 <HomeIcon sx={{ fontSize: 40 }} />
//                             </Button>
//                         </Link>
//                     </Toolbar>
//                 </AppBar>
//             </Box>
//         </ThemeProvider >
//     );
// }