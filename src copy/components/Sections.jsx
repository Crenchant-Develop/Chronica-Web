import React from "react";

function Sections(props) {
  return (
    <article {...props}>
      {props.children}
    </article>
  );
}

export default Sections;