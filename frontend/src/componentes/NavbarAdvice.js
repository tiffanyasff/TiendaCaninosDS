import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const NavbarUsuario = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token del localStorage
    navigate("/login"); // Redirige al usuario a la página de inicio de sesión
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#cc6533" }}>
        <Toolbar>
          {/* Logo que ejecuta la función de cerrar sesión */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: "#ffffff",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={handleLogout} // Función de cerrar sesión al hacer clic
          >
            Venta Caninos
          </Typography>

          <Button
            component={Link}
            to="/advice"
            sx={{ color: "#ffffff", textDecoration: "none" }}
          >
            Inicio
          </Button>
          {/* Botón de Crear */}
          <Button
            component={Link}
            to="/advice/crear"
            sx={{ color: "#ffffff", textDecoration: "none" }}
          >
            Crear
          </Button>
          {/* Botón de Estadísticas */}
          <Button
            component={Link}
            to="/advice/estadisticas"
            sx={{ color: "#ffffff", textDecoration: "none" }}
          >
            Estadísticas
          </Button>

          {/* Botón de Cerrar Sesión */}
          <Button
            onClick={handleLogout}
            sx={{ color: "#ffffff", textDecoration: "none" }}
          >
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarUsuario;
