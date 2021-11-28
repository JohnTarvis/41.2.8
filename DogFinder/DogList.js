import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";
function DogList({dogs}) {
  return (
      <div>
        {dogs.map(dog => (
          <div>
              <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
          </div>
        ))}
      </div>
  );
}
export default DogList;
