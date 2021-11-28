import React from "react";
import {Link} from "react-router-dom";

function ColorList({colors}) {
  const links = colors.map(color => (
    <li key={color.name}>
      <Link to={`/colors/${color.name}`}>{color.name}</Link>
    </li>
  ));
  return (
    <div>
      <h2 color factory></h2>
      <div>
        <Link to="/colors/new">Add</Link>
      </div>
      <p>color.</p>
      <ul>{links}</ul>
    </div>
  );
}

export default ColorList;
