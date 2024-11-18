// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./componentes/Navbar";
// import Portada from "./componentes/Portada";
// import Menu from "./componentes/Menu";
// import Crear from "./componentes/Crear";
// import Ver from "./componentes/Ver";
// import Editar from "./componentes/Editar";
// import Borrar from "./componentes/Borrar";
// import Registrarse from "./componentes/Registrarse";
// import NavbarUsuario from "./componentes/NavbarUsuario";
// import Perfil from "./componentes/Perfil";
// import Inicio from "./componentes/Inicio";
// import LoginForm from "./componentes/LoginForm";
// import { AuthProvider } from "./AuthContext";

// function App() {
//   const myWidth = 180;
//   const location = useLocation();

//   // Define las rutas que requieren NavbarUsuario
//   const rutasUsuario = ["/perfil", "/inicio", "/navbarusuario"];
//   const rutasSinNavbar = ["/", "/registrarse", "/login"];

//   // Determina qué Navbar mostrar según la ruta actual
//   const isUsuarioNavbar = rutasUsuario.includes(location.pathname);
//   const isSinNavbar = rutasSinNavbar.includes(location.pathname);

//   return (
//     <AuthProvider>
//       <div className="App">
//         {/* Renderiza el Navbar adecuado */}
//         {!isSinNavbar &&
//           (isUsuarioNavbar ? (
//             <NavbarUsuario />
//           ) : (
//             <Navbar drawerWidth={myWidth} />
//           ))}

//         {/* Configuración de rutas */}
//         <Routes>
//           {/* Rutas sin Navbar */}
//           <Route path="/" element={<Portada />} />
//           <Route path="/registrarse" element={<Registrarse />} />
//           <Route path="/login" element={<LoginForm />} />

//           {/* Rutas con NavbarUsuario */}
//           <Route path="/perfil" element={<Perfil />} />
//           <Route path="/inicio" element={<Inicio />} />

//           {/* Rutas con Navbar */}
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/ver" element={<Ver />} />
//           <Route path="/crear" element={<Crear />} />
//           <Route path="/menu/editar/:id" element={<Editar />} />
//           <Route path="/menu/borrar/:id" element={<Borrar />} />
//         </Routes>
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;

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
import NavbarUsuario from "./componentes/NavbarUsuario";
import Perfil from "./componentes/Perfil";
import Inicio from "./componentes/Inicio";
import LoginForm from "./componentes/LoginForm";
import { AuthProvider } from "./AuthContext";


function App() {
  const myWidth = 220;
  const location = useLocation();

  return (

    <AuthProvider>
      <div className="App">
        {/* Condicional para mostrar o no el Navbar */}
        {location.pathname !== "/" &&
          location.pathname !== "/registrarse" &&

          location.pathname !== "/navbarusuario" &&
          location.pathname !== "/perfil" &&
          location.pathname !== "/inicio" &&
          location.pathname !== "/login" && (

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
          )}

        {/* Condicional para mostrar o no el Navbar */}
        {location.pathname !== "/menu" &&
          location.pathname !== "/ver" &&
          location.pathname !== "/crear" &&
          location.pathname !== "menu/editar/:id" &&
          location.pathname !== "menu/borrar/:id" && (
            <NavbarUsuario
              drawerWidth={myWidth}
              content={
                <Routes>
                  <Route path="/" element={<Portada />} />
                  <Route path="/registrarse" element={<Registrarse />} />
                  <Route path="/navbarusuario" element={<NavbarUsuario />} />
                  <Route path="/perfil" element={<Perfil />} />
                  <Route path="/inicio" element={<Inicio />} />
                  <Route path="/login" element={<LoginForm />} />

                </Routes>
              }
            />
          )}

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/navbarusuario" element={<NavbarUsuario />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/login" element={<LoginForm />} />

          {/* El resto de las rutas se gestionan dentro del Navbar */}
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
