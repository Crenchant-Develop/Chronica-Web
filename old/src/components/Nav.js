import * as React from 'react';
import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Theme } from "./Theme";
import { ThemeProvider } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

export default function Nav(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <ThemeProvider theme={Theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{
                    backgroundColor: "#20202000",
                    boxShadow: "none",
                }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-owns={anchorEl ? "simple-menu" : undefined}
                            onClick={handleClick}
                        >
                            <MenuIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                        <Menu
                            PaperProps={{
                                style: {
                                    width: 200
                                },
                            }}
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem>응애</MenuItem>
                            <MenuItem>나 아기 메뉴</MenuItem>
                            <MenuItem>테스트 중입니다만,</MenuItem>
                            <MenuItem>문제라도?</MenuItem>
                        </Menu>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                        <Link className={props.className} to="/">
                            <Button>
                                <HomeIcon sx={{ fontSize: 40 }} />
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider >
    );
}