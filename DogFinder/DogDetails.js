import React from "react";
import {Link} from "react-router-dom";

function DogDetails({dog}) {
  return (
    <div>
        <img src={dog.src} />
        <div>name: {dog.name}</div>
        <div>age: {dog.age}</div>
        <Link to="/dogs">Go Back</Link>
    </div>
  );
}

export default DogDetails;
