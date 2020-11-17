import React from "react";

function HomePage(props) {
  return (
    <div>
      {props.language === "pt-br" ? (
        <h1>Olá! Bem-vindo à página principal!</h1>
      ) : (
        <h1>Welcome to the Homepage!</h1>
      )}
    </div>
  );
}

export default HomePage;
