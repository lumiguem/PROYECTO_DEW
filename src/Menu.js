// src/components/Menu.js
import React from 'react';
import './Menu.css';
import mostrarLogIn from './mostrarLogIn';
import ocultarLogin from './ocultarLogIn';

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li onClick={ocultarLogin}><a href="#">Inicio</a></li>
        <li><a href="#servicios">Carreras</a></li>
        <li><a href="#imagenes">Cursos</a></li>
        <li><a href="#">Matriculas</a></li>
        <li><a href="#fondo">Informes</a></li>
        <li onClick={mostrarLogIn}><a href="#">Registrate</a></li>
      </ul>
    </nav>
  );
}

export default Menu;