import React from "react";
import Grid from '@mui/material/Grid';

function Sections(props) {
  return (
    <Grid item xs={props.itemStyle}>
      <article {...props}>
        {props.children}
      </article>
    </Grid>
  );
}

export default Sections;