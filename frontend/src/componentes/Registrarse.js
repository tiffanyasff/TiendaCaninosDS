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
import { useForm, Controller, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "./Axios";

const Registrarse = () => {
  const defaultValues = {
    nombre: "",
    correo: "",
    password: "",
    telefono: "",
    direccion: "",
  };

  const { handleSubmit, reset, control, watch } = useForm({
    defaultValues: defaultValues,
  });

  const navigate = useNavigate();

  const submission = async (data) => {
    try {
      const response = await AxiosInstance.post(
        "http://localhost:8000/api/crear-usuario/",
        data
      );
      console.log(response.data);
      alert("Usuario creado exitosamente");
      reset(); // Reiniciar el formulario después de enviar
    } catch (error) {
      console.error("Error al crear el usuario", error);
      alert("Error al crear el usuario");
    }
  };

  // Verificar si todos los campos están llenos
  const allFieldsFilled = Object.values(watch()).every((field) => field !== "");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Card sx={{ maxWidth: 500, width: "100%", boxShadow: 3 }}>
        <CardHeader
          title="Crear Usuario"
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            textAlign: "center",
          }}
        />
        <CardContent>
          <form onSubmit={handleSubmit(submission)}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
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

              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                onClick={() => navigate("/iniciousuario")}
                disabled={!allFieldsFilled}
              >
                Continuar
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Registrarse;
