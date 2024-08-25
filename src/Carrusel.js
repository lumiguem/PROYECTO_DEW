import React, { useState } from 'react';
import './Carrusel.css'; 

const Carrusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        '/img/banner4.jpg',
        '/img/banner5.jpg',
        '/img/banner6.jpg'
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div id='carrusel' className="carrusel-container">
            <button onClick={prevSlide} className="carrusel-button prev">&#10094;</button>
            <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} className="carrusel-image" />
            <button onClick={nextSlide} className="carrusel-button next">&#10095;</button>
        </div>
    );
};

export default Carrusel;