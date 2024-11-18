import React from "react";
import { useNavigate } from "react-router-dom";
import "../estilos/PortadaEstilos.css";
import perritoPortada from "../img/perritoPortada.png";

const Portada = () => {
  const navigate = useNavigate();

  const handleRegistro = () => {
    navigate("/registrarse"); // Redirige a la ruta de registro
  };

  return (
    <div className="portada-container">
      <div className="content">
        <div className="text-content">
          <h1>
            En busca de un <br></br>
            <span>Nuevo amigo?</span>
          </h1>
          <h3>Tienda caninos</h3>
          <p>
            Te ayudamos a conectar con tu próximo mejor amigo, contamos con los
            mejores expertos para asesorarte en esta importante decisión.
          </p>
          <button onClick={handleRegistro} className="read-more">
            Regístrate
          </button>
          <button onClick={handleRegistro} className="read-more">
            Login
          </button>
        </div>
        <div className="image-container">
          <img src={perritoPortada} alt="Dog with heart-shaped glasses" />
        </div>
      </div>
    </div>
  );
};

export default Portada;
