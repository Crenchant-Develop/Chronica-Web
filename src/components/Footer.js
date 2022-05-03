import React from "react";
import { BottomNavigation } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Footer(props) {
  const style = {
    backgroundColor: '#202020',
    boxShadow: '0 0 10px black',
    width: '100%',
    height: '5vw',
  };

  return (
    <Grid item xs={props.itemStyle}>
      <footer {...props}>
        <BottomNavigation className="context" style={style}>
          <h5 style={{ color: '#606060' }}>Copyright &copy; 2022 Netea All Rights Reserved.</h5>
        </BottomNavigation>
      </footer>
    </Grid>
  );
}