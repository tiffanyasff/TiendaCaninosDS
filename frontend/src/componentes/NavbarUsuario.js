import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AxiosInstance from "./Axios";


const NavbarUsuario = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    console.log("token antes de cerrar sesion",localStorage.setItem("token", token));
    localStorage.removeItem("token"); // Elimina el token del localStorage
    console.log("token despues de cerrar sesion",localStorage.setItem("token", token));
    navigate("/login"); // Redirige al usuario a la página de inicio de sesión
    console.log("removee",localStorage.removeItem("token"));

  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#6a1b9a" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: "#ffffff",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={handleLogout} // Ahora el logo cierra sesión
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
