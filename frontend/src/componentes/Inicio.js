import React from "react";
import "../estilos/Inicio.css";
import perritoPortada from "../img/perritoPortada.png";
// import dog1 from "../img/dog1.png";
// import dog2 from "../img/dog2.png";
// import dog3 from "../img/dog3.png";

const Inicio = () => {
  return (
    <div>
      {/* Containers */}
      <div className="containers">
        <div className="container orange">
          <img src={perritoPortada} alt="Dog 1" />
          <p>Razas Pequeñas</p>
        </div>
        <div className="container blue">
          <img src={perritoPortada} alt="Dog 2" />
          <p>Razas Medianas</p>
        </div>
        <div className="container purple">
          <img src={perritoPortada} alt="Dog 3" />
          <p>Razas Grandes</p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
