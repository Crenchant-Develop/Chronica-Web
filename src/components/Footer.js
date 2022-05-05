import React from "react";
import Grid from '@mui/material/Grid';

export default function Footer(props) {
  return (
    <footer {...props}>
      <Grid container sx={props.sx}>
        <h5>Copyright &copy; 2022 Netea All Rights Reserved.</h5>
      </Grid>
    </footer>
  );
}