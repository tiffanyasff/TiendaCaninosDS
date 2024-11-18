import React from "react";
import "../styles/signup.css";
import { LoadingDarkButton } from "../componentes/button";
import { WhiteBorderTextField } from "../componentes/textFields";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../routes/publicRoutes";

function Signup() {
  const Navigate = useNavigate();
  const handleRegisterClick = () => {
    Navigate(PublicRoutes.LOGIN);
  };
  return (
    <div className="signup">
      <div className="left">
        <div className="card">
          <h1 className="title">Bienvenido a Encuentra Patitas</h1>
          <p className="text-card">crea una cuenta para acceder</p>

          <form onSubmit={false} className="formulario-signup">
            <div className="rows-formulario">
              <WhiteBorderTextField
                fullWidth
                size="small"
                label="Nombre"
                required
                name="name"
                type="text"
              />
              <WhiteBorderTextField
                fullWidth
                size="small"
                label="Apellido"
                name="lastname"
                type="text"
              />
            </div>

            <WhiteBorderTextField
              fullWidth
              size="small"
              label="Correo Electrónico"
              required
              name="email"
              type="email"
            />
            <div className="rows-formulario">
              <WhiteBorderTextField
                fullWidth
                size="small"
                label="contraseña"
                required
                name="password"
                type="password"
              />
              <WhiteBorderTextField
                fullWidth
                size="small"
                label="confirmar"
                required
                name="confirm-password"
                type="password"
              />
            </div>

            <LoadingDarkButton variant="contained" fullWidth type="submit">
              Crear Cuenta
            </LoadingDarkButton>
          </form>

          <p className="register-button">
            ¿ya tienes una cuenta?
            <button onClick={handleRegisterClick}>inicia sesión</button>
          </p>
        </div>
      </div>
      <div className="right">
        <img src="/fondoLogin.jpg" alt="imagen banner" className="banner-left" />
      </div>
    </div>
  );
}

export default Signup;
