import React from "react";
import { Link } from "react-router-dom";

function Color({value, color}) {
  return (
    <div style={{backgroundColor:value}}>
      <div>{color}</div>
      <div>
        <Link to="/">back</Link>
      </div>
    </div>
  );
}

export default Color;
