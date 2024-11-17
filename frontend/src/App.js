import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import Navbar from "./componentes/Navbar";
import Portada from "./componentes/Portada";
import Menu from "./componentes/Menu";
import Crear from "./componentes/Crear";
import Ver from "./componentes/Ver";
import Editar from "./componentes/Editar";
import Borrar from "./componentes/Borrar";
import Registrarse from "./componentes/Registrarse";
import InicioUsuario from "./componentes/InicioUsuario";
import Perfil from "./componentes/Perfil";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { PublicRoutes } from "./routes/publicRoutes";

function App() {
  const myWidth = 220;
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* Condicional para mostrar o no el Navbar */}
        {location.pathname !== "/" &&
          location.pathname !== "/registrarse" &&
          location.pathname !== "/iniciousuario" &&
          location.pathname !== "/perfil" && 
          location.pathname !== "/login" && 
          location.pathname !== "/signup" && (
            <Navbar
              drawerWidth={myWidth}
              content={
                <Routes>
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/ver" element={<Ver />} />
                  <Route path="/crear" element={<Crear />} />
                  <Route path="/editar/:id" element={<Editar />} />
                  <Route path="/borrar/:id" element={<Borrar />} />
                </Routes>
              }
            />
          )}

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/iniciousuario" element={<InicioUsuario />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path={PublicRoutes.SIGNUP} element={<Signup />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          {/* El resto de las rutas se gestionan dentro del Navbar */}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
