
import Menu from './Menu';
import Banner from './Banner';
import Servicios from './Servicios';
import Imagenes from './Imagenes';
import Carrusel from './Carrusel';
import Formulario from './Formulario'
import Footer from './Footer';
import Login from './Login';

function App() {
  return (
    <div className='container'>
      <Menu/>
      <Banner />
      <Servicios />
      <Imagenes />
      <Carrusel />
      <Formulario/>
      <Footer />
      <Login/>
    </div>
  );
}

export default App;
