import React, { useState, useEffect } from "react";
import campusList from "./campus";

function CampusDetail(props) {
  const [state, setState] = useState({
    city: "",
    country: "",
    availableBootcamps: [],
  });

  useEffect(() => {
    console.log(props);

    campusList.forEach((campus) => {
      if (campus.id === props.match.params.city) {
        setState(campus);
      }
    });
  }, [props]);

  return (
    <div className="content">
      <p>
        <strong>City:</strong> {state.city}
      </p>
      <p>
        <strong>Country:</strong> {state.country}
      </p>
      <h4>
        <strong>Available bootcamps:</strong>
      </h4>
      <ul>
        {state.availableBootcamps.map((bootcamp) => (
          <li key={bootcamp}>{bootcamp}</li>
        ))}
      </ul>
    </div>
  );
}

export default CampusDetail;
