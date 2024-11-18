import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavbarUsuario = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#6a1b9a" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, color: "#ffffff", textDecoration: "none" }}
            component={Link}
            to="/"
          >
            Venta Caninos
          </Typography>
          <Button
            component={Link}
            to="/inicio"
            sx={{ color: "#ffffff", textDecoration: "none" }}
          >
            Inicio
          </Button>
          <Button
            component={Link}
            to="/perfil"
            sx={{ color: "#ffffff", textDecoration: "none" }}
          >
            Perfil
          </Button>
          <Button
            component={Link}
            to="/pedidos"
            sx={{ color: "#ffffff", textDecoration: "none" }}
          >
            Pedidos
          </Button>
          <Button
            component={Link}
            to="/estadisticas"
            sx={{ color: "#ffffff", textDecoration: "none" }}
          >
            Estadísticas
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Bienvenido al panel de usuario
        </Typography>
        <Typography>
          Selecciona una opción del menú para navegar por las diferentes
          secciones.
        </Typography>
      </Box>
    </Box>
  );
};

export default NavbarUsuario;

// import React from "react";
// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const InicioUsuario = () => {
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography
//             variant="h6"
//             sx={{ flexGrow: 1, cursor: "pointer" }}
//             onClick={() => handleNavigation("/")}
//           >
//             Mi Aplicación
//           </Typography>

//           <Button color="inherit" onClick={() => handleNavigation("/")}>
//             Inicio
//           </Button>
//           <Button color="inherit" onClick={() => handleNavigation("/perfil")}>
//             Perfil
//           </Button>
//           <Button color="inherit" onClick={() => handleNavigation("/pedidos")}>
//             Pedidos
//           </Button>
//           <Button
//             color="inherit"
//             onClick={() => handleNavigation("/estadisticas")}
//           >
//             Estadísticas
//           </Button>
//         </Toolbar>
//       </AppBar>

//       {/* Contenido de la página */}
//       <Box sx={{ padding: 2 }}>
//         <Typography variant="h4" gutterBottom>
//           Bienvenido al panel de usuario
//         </Typography>
//         <Typography>
//           Selecciona una opción del menú para navegar por las diferentes
//           secciones.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default InicioUsuario;
