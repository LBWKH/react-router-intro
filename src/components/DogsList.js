import React from "react";
import { Link } from "react-router-dom";
import dogs from "../dogs.json";

function DogsList() {
  return (
    <div className="columns">
      {dogs.map((dog) => (
        <div className="column" key={dog.name}>
          <Link to={`/cachorro/${dog.name}`}>
            <img src={dog.img} alt={dog.name} className="image" />
            <strong>{dog.name}</strong>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DogsList;
