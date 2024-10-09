// src/App.jsx
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  console.log("App component is rendering");
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a MiTienda!" />
    </div>
  );
};

export default App;


