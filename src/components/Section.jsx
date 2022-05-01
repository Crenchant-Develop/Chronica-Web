import React from "react";

function Section(props) {
  return <article className="section">
    {props.children}
  </article>;
}

export default Section;