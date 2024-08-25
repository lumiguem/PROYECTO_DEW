import React, { useState, useEffect } from 'react';
import './Banner.css';

const images = [
  '/img/banner1.jpg',
  '/img/banner2.jpg',
  '/img/banner3.jpg'
];

function Banner() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='banner' className="banner">
      <img src={images[currentImage]} alt="Banner" />
    </div>
  );
}

export default Banner;