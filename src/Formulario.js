import './Formulario.css';
function Confirmacion() {
    alert("Tus dudas fueron enviadas.");
}

function Formulario() {
    const handleSubmit = (event) => {
        event.preventDefault();
        Confirmacion();
    };
    return (
        <form id="fondo" onSubmit={handleSubmit}>
            <div id ="contPrincipal">
                <label className="float-label">
                    <a href="../pages/index.html"><i className='bx bx-arrow-back'></i> Home</a>
                    <h1>Coméntanos sobre tus dudas</h1>
                </label>
                <br/>
                    <label className = "sex" htmlFor="input1">Nombre(s):</label>
                    <br/>
                    <div id = "prueba">
                    <input type="text" className="dato" placeholder="Nombres" />
                </div>
                
                    <label className = "sex1" htmlFor="input2">Apellidos:</label>
                    <br/>
                    <div id = "prueba">
                    <input type="text" className="dato" placeholder="Apellidos" />
                </div>
                
                    <label className = "sex2" htmlFor="input3" id="input3">Edad:</label>
                    <br/>
                    <div id = "prueba">
                    <input type="text" className="dato" placeholder="Ingrese solo número" />
                </div>
                
                    <label className = "sex3" htmlFor="input4" id="input4">Email:</label>
                    <br/>
                    <div id = "prueba">
                    <input type="email" id="correo" className="dato" placeholder="ejemplo@correo.com" />
                </div>
                <br/>
                <div id = "prueba">
                <h2>Escribe aqui tus dudas:</h2>
                </div>
                <br/>
                <textarea name="textarea1" id="textArea1" rows="10"></textarea>
                <div id = "botones">
                    <button id="Env" type="submit">Enviar</button>
                    <button id="Can" type="button">Cancelar</button>
                </div>
            </div>
        </form>
    );
}

export default Formulario;