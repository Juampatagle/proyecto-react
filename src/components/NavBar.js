// src/components/NavBar.js
import React from "react";
import CartWidget from "./CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Título/Nombre de la tienda */}
        <a className="navbar-brand" href="#">MiTienda</a>
        
        {/* Botón de colapsar en dispositivos pequeños */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Listado de categorías */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ofertas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
          {/* Componente CartWidget */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
