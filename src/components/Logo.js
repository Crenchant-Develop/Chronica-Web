import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

import Button from '@mui/material/Button';
import { Theme } from "./Theme";
import { ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

export default function Logo(props) {
    return (
        <ThemeProvider theme={Theme}>
            <Link className={props.className} to="/">
                <Button>
                    <HomeIcon color="primary" sx={{ fontSize: 40 }} />
                </Button>
            </Link>
        </ThemeProvider>
    );
}