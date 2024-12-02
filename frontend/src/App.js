import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Portada from "./componentes/Portada";
import Menu from "./componentes/Menu";
import Crear from "./componentes/Crear";
import Ver from "./componentes/Ver";
import Editar from "./componentes/Editar";
import Borrar from "./componentes/Borrar";
import Registrarse from "./componentes/Registrarse";
import NavbarUsuario from "./componentes/NavbarUsuario";
import Perfil from "./componentes/Perfil";
import Inicio from "./componentes/Inicio";
import LoginForm from "./componentes/LoginForm";
import Estadisticas from "./componentes/Estadisticas";
import Pedidos from "./componentes/Pedidos";
import RazasPequenas from "./componentes/RazasPequenas";
import RazasMedianas from "./componentes/RazasMedianas";
import RazasGrandes from "./componentes/RazasGrandes";
import { AuthProvider } from "./AuthContext";

function App() {
  const myWidth = 180;
  const location = useLocation();

  // Define las rutas que requieren NavbarUsuario
  const rutasUsuario = [
    "/perfil",
    "/inicio",
    "/navbarusuario",
    "/estadisticas",
    "/pedidos",
    "/razaspequenas",
    "/razasmedianas",
    "/razasgrandes",
  ];
  const rutasSinNavbar = ["/", "/registrarse", "/login"];

  // Determina qué Navbar mostrar según la ruta actual
  const isUsuarioNavbar = rutasUsuario.includes(location.pathname);
  const isSinNavbar = rutasSinNavbar.includes(location.pathname);

  return (
    <AuthProvider>
      <div className="App">
        {/* Renderiza el Navbar adecuado */}
        {!isSinNavbar &&
          (isUsuarioNavbar ? (
            <NavbarUsuario />
          ) : (
            <Navbar
              drawerWidth={myWidth}
              content={
                <Routes>
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/ver" element={<Ver />} />
                  <Route path="/crear" element={<Crear />} />
                  <Route path="menu/editar/:id" element={<Editar />} />
                  <Route path="menu/borrar/:id" element={<Borrar />} />
                </Routes>
              }
            />
          ))}

        {/* Configuración de rutas */}
        <Routes>
          {/* Rutas sin Navbar */}
          <Route path="/" element={<Portada />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/login" element={<LoginForm />} />

          {/* Rutas con NavbarUsuario */}
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/razaspequenas" element={<RazasPequenas />} />
          <Route path="/razasmedianas" element={<RazasMedianas />} />
          <Route path="/razasgrandes" element={<RazasGrandes />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
