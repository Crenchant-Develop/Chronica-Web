import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Theme } from "./Theme";
import { ThemeProvider } from '@mui/material/styles';

export default function Nav() {
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
        <nav>
            <ThemeProvider theme={Theme}>
                <Button
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon sx={{ fontSize: 40 }} />
                </Button>
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
                    <MenuItem>테</MenuItem>
                    <MenuItem>스</MenuItem>
                    <MenuItem>트</MenuItem>
                </Menu>
            </ThemeProvider>
        </nav>
    );
}