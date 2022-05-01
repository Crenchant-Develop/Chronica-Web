import React from "react";
import Lorem from './Lorem';

function Section(props) {
  return <div className="section">
    {props.children}
    <Lorem />
  </div>;
}

export default Section;