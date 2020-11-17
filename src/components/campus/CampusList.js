import React from "react";
import { Link } from "react-router-dom";

const campusList = [
  { text: "São Paulo", path: "/sao-paulo" },
  { text: "Miami", path: "/miami" },
  { text: "Mexico City", path: "/mexico-city" },
  { text: "Berlin", path: "/berlin" },
];

function CampusList() {
  return (
    <div>
      <ul>
        {campusList.map((campus, i) => (
          <li key={i}>
            <Link to={`/campus${campus.path}`}>{campus.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CampusList;
