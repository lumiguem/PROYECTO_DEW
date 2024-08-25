import React from 'react';
import './Imagenes.css';

function Imagenes() {
  return (
    <div id='imagenes' className="imagenes">
      <h2>Vuelvete el siguiente profesional con nuestros cursos intensivos</h2>
      <div className="bloques-imagenes">
        <div className="bloque">
          <img src="/img/image1.jpg"/>
          <div className="texto">Texto 1</div>
        </div>
        <div className="bloque">
          <img src="/img/image2.jpg"/>
          <div className="texto">Texto 2</div>
        </div>
        <div className="bloque">
          <img src="/img/image3.jpg"/>
          <div className="texto">Texto 3</div>
        </div>
        <div className="bloque">
          <img src="/img/image4.jpg"/>
          <div className="texto">Texto 4</div>
        </div>
        <div className="bloque">
          <img src="/img/image1.jpg"/>
          <div className="texto">Texto 1</div>
        </div>
      </div>
    </div>
  );
}

export default Imagenes;