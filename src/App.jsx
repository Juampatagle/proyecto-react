
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a MiTienda!" />
    </div>
  );
}

export default App;
