import React, { Component } from 'react';
import './App.css'

class Login extends Component {
         handleSubmit(event) {
            let correo = event.target.correo.value;
            let clave = event.target.password.value;
            
            if (correo == 'admin@mail.com' && clave == '123456') 
              alert('usuario correcto');
            else 
              alert('usuario o clave incorrecto');
            
            alert('El nombre enviado es: ' + correo + ' ' + clave);
          }

  render() {
    return (
        <section id='login' className='login_section' >
            <form
            onSubmit={this.handleSubmit}
            className="login_form">
            <h3>Bienvenido! Ingrese su correo electrónico y contraseña para continuar</h3>


            <div >
              <label className="text-sm " htmlFor="email">Email</label>
              <input type="email" className="form-control" id="icorreo" 
                name="correo"
                placeholder="Ingrese correo" />
            </div>
            <div>
              <label className="text-sm " htmlFor="password">Password</label>
              <input type="password" className="form-control" id="ipassword" 
                name="password"
                placeholder="Ingrese Password" />
            </div>

            <button className="block w-full py-2 bg-red-600 text-white hover:bg-red-500 transition-colors">Login</button>
            <span className="text-sm">No tiene cuenta? Registrarse</span>
          </form>
        </section>

    );
  }
}

export default Login;