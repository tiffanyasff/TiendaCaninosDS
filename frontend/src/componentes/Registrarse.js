import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material"; // Icono de flecha hacia atrás
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "./Axios";

const Registrarse = () => {
  const defaultValues = {
    username: "",
    nombre: "",
    correo: "",
    password: "",
    telefono: "",
    direccion: "",
  };

  const { handleSubmit, reset, control } = useForm({
    defaultValues: defaultValues,
  });

  const navigate = useNavigate();

  const submission = async (data) => {
    try {
      const response = await AxiosInstance.post(
        "https://tiendacaninosds.onrender.com/api/crear-usuario/",
        data,
        {
          headers: {
            'Content-Type': 'application/json', // Asegura que el tipo de contenido sea JSON
          },
        }
      );
      console.log(response.data);
      alert("Usuario creado exitosamente");
      reset(); // Reiniciar el formulario después de enviar
      navigate("/login"); // Redirigir automáticamente
    } catch (error) {
      console.error("Error al crear el usuario", error);
      alert("Error al crear el usuario");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 3,
      }}
    >
      <Card sx={{ maxWidth: 500, width: "100%", boxShadow: 3 }}>
        <CardHeader
          title={ 
            <>
              <Button //Back
                startIcon={<ArrowBack />}
                onClick={() => navigate("/")} // Redirige a la página raíz "/"
                sx={{
                  position: "absolute",
                  top: "18px",
                  left: "12px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
              </Button>
              <Typography variant="h6" component="span">
                Crear Usuario
              </Typography>
            </>
          }
          sx={{
            position: "relative",
            backgroundColor: "#1976d2",
            color: "white",
            textAlign: "center",
            padding: "16px",
          }}
        />
        <CardContent>
          <form onSubmit={handleSubmit(submission)}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Username de usuario"
                    variant="outlined"
                    fullWidth
                    placeholder="Ingresa tu username de usuario"
                  />
                )}
              />

              <Controller
                name="nombre"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Nombre de usuario"
                    variant="outlined"
                    fullWidth
                    placeholder="Ingresa tu nombre de usuario"
                  />
                )}
              />

              <Controller
                name="correo"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Correo electrónico"
                    variant="outlined"
                    fullWidth
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Contraseña"
                    variant="outlined"
                    fullWidth
                    type="password"
                    placeholder="Ingresa tu contraseña"
                  />
                )}
              />

              <Controller
                name="telefono"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Teléfono"
                    variant="outlined"
                    fullWidth
                    type="tel"
                    placeholder="Ingresa tu teléfono"
                  />
                )}
              />

              <Controller
                name="direccion"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Dirección"
                    variant="outlined"
                    fullWidth
                    placeholder="Ingresa tu dirección"
                    multiline
                    rows={2}
                  />
                )}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Registrar
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Registrarse;
