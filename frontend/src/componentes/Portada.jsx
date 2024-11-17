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
    <div className="container">
      <div className="image-container">
        <div className="circle"></div>
        <img src={perritoPortada} alt="Perrito Portada" className="pet-image" />
      </div>
      <div className="content">
        <h1>¡Bienvenido!</h1>
        <p>Encuentra tu nuevo mejor amigo con nosotros.</p>
        <button onClick={handleRegistro} className="btn">
          Regístrate
        </button>
      </div>
    </div>
  );
};

export default Portada;
