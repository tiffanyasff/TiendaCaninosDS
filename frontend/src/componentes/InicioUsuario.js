import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const InicioUsuario = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => handleNavigation("/")}
          >
            Mi Aplicación
          </Typography>

          <Button color="inherit" onClick={() => handleNavigation("/")}>
            Inicio
          </Button>
          <Button color="inherit" onClick={() => handleNavigation("/perfil")}>
            Perfil
          </Button>
          <Button color="inherit" onClick={() => handleNavigation("/pedidos")}>
            Pedidos
          </Button>
          <Button
            color="inherit"
            onClick={() => handleNavigation("/estadisticas")}
          >
            Estadísticas
          </Button>
        </Toolbar>
      </AppBar>

      {/* Contenido de la página */}
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

export default InicioUsuario;
