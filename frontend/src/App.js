import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import NavbarAdvice from "./componentes/NavbarAdvice";
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
import AdviceInicio from "./componentes/AdviceInicio"; 
import AdviceCrear from "./componentes/AdviceCrear";
import AdviceEstadisticas from "./componentes/AdviceEstadisticas";
import { AuthProvider } from "./AuthContext";
import { useState } from "react";

function App() {
  const myWidth = 180;
  const location = useLocation();
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  // Define las rutas para NavbarUsuario, sin Navbar y NavbarAdvice
  const rutasUsuario = [
    "/perfil",
    "/inicio",
    "/header",
    "/productlist",
    "/navbarusuario",
    "/estadisticas",
    "/pedidos",
  ];
  const rutasSinNavbar = ["/", "/registrarse", "/login"];
  const rutasAdvice = ["/advice", "/advice/crear", "/advice/estadisticas"];

  // Determina qué Navbar mostrar según la ruta actual
  const isUsuarioNavbar = rutasUsuario.includes(location.pathname);
  const isSinNavbar = rutasSinNavbar.includes(location.pathname);
  const isAdviceNavbar = rutasAdvice.some((ruta) =>
    location.pathname.startsWith(ruta)
  );

  return (
    <AuthProvider>
      <div className="App">
        {/* Renderiza el Navbar adecuado */}
        {!isSinNavbar &&
          (isAdviceNavbar ? (
            <NavbarAdvice />
          ) : isUsuarioNavbar ? (
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
          <Route path="/estadisticas" element={<Estadisticas />} />
          <Route path="/pedidos" element={<Pedidos />} />

          <Route
            path="/inicio"
            element={
              <Inicio
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
              />
            }
          />

          {/* Rutas con NavbarAdvice */}
          <Route path="/advice" element={<AdviceInicio />} />
          <Route path="/advice/crear" element={<AdviceCrear />} />
          <Route path="/advice/estadisticas" element={<AdviceEstadisticas />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
