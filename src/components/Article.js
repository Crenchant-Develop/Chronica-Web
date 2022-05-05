import React from "react";
import Grid from '@mui/material/Grid';

function Article(props) {
  return (
    <article {...props}>
        {props.children}
    </article>
  );
}

export default Article;