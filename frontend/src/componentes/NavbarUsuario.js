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
    </Box>
  );
};

export default NavbarUsuario;
