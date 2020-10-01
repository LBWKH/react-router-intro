import React from "react";

function Greetings(props) {
  console.log(props.match);

  function handleRedirect() {
    props.history.push("/about");
  }

  return (
    <div>
      <p>Welcome to the Greetings page, {props.match.params.name}</p>
      <button onClick={handleRedirect}>Go to about page</button>
    </div>
  );
}

export default Greetings;
