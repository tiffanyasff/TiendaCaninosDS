import React from "react";
import "../styles/login.css";
import { LoadingDarkButton } from "../componentes/button";
import { WhiteBorderTextField } from "../componentes/textFields";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../routes/publicRoutes";

function Login() {
  const Navigate = useNavigate();
  const handleRegisterClick = () => {
    Navigate(PublicRoutes.SIGNUP);
  };
  return (
    <div className="login">
      <div className="left">
        <img src="/fondoLogin.jpg" alt="imagen banner" className="banner-left" />
      </div>
      <div className="right">
        <div className="card">
          <h1 className="title">Bienvenido de vuelta</h1>
          <p className="text-card">ingresa tus credenciales para acceder</p>

          <form onSubmit={false} className="formulario-login">
            <WhiteBorderTextField
              fullWidth
              size="small"
              label="Correo Electrónico"
              required
              name="email"
              type="email"
            />
            <WhiteBorderTextField
              fullWidth
              size="small"
              label="contraseña"
              required
              name="password"
              type="password"
            />
            <LoadingDarkButton variant="contained" fullWidth type="submit">
              Ingresar
            </LoadingDarkButton>
          </form>
          <p className="forgot-password">
            <button>¿olvidaste tu contraseña?</button>
          </p>
          <p className="register-button">
            ¿aun no tienes una cuenta?
            <button onClick={handleRegisterClick}>registrate aqui</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
