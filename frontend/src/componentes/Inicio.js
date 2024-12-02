import React from "react";
import "../estilos/Inicio.css";
import perritoPortada from "../img/perritoPortada.png";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      {/* Containers */}
      <div className="containers">
        <div
          className="container orange"
          onClick={() => handleNavigation("/razaspequenas")}
        >
          <img src={perritoPortada} alt="Dog 1" />
          <p>Razas Pequeñas</p>
        </div>
        <div
          className="container blue"
          onClick={() => handleNavigation("/razasmedianas")}
        >
          <img src={perritoPortada} alt="Dog 2" />
          <p>Razas Medianas</p>
        </div>
        <div
          className="container purple"
          onClick={() => handleNavigation("/razasgrandes")}
        >
          <img src={perritoPortada} alt="Dog 3" />
          <p>Razas Grandes</p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
