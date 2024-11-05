import React from "react";
import { Box, Button, Typography } from "@mui/material";
import MyTextField from "./formularios/MyTextField";
import MyPasswordField from "./formularios/MyPasswordField";
import AxiosInstance from "./Axios";
import { useForm } from "react-hook-form";

const Crear = () => {
  const defaultValues = {
    nombre: "",
    correo: "",
    password: "",
    telefono: "",
    direccion: "",
  };

  const { handleSubmit, reset, setValue, control } = useForm({
    defaultValues: defaultValues,
  });
  const submission = (data) =>
    console.log(data); /*PONER LA URL QUE ESTE EN DJANGO */

  return (
    <form onSubmit={handleSubmit(submission)}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "#00003f",
          marginBottom: "10px",
        }}
      >
        <Typography sx={{ marginLeft: "20px", color: "#fff" }}>
          Crear Usuario
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          boxShadow: 3,
          padding: 4,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "40px",
            alignItems: "center",
          }}
        >
          <MyTextField
            label="Nombre"
            name={"nombre"}
            control={control}
            placeholder="Ingrese su nombre"
            width={"30%"}
          />

          <MyTextField
            label="Correo"
            name={"correo"}
            control={control}
            placeholder="Ingrese su Correo"
            width={"30%"}
          />

          <MyPasswordField
            label="Contraseña"
            name={"password"}
            control={control}
            placeholder="Ingrese su contraseña"
            width={"30%"}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <MyTextField
            label="Telefono"
            name={"telefono"}
            control={control}
            placeholder="Ingrese su telefono"
            width={"30%"}
          />

          <MyTextField
            label="Direccion"
            name={"direccion"}
            control={control}
            placeholder="Ingrese su direccion"
            width={"30%"}
          />
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "start", marginTop: "40px" }}
        >
          <Button variant="contained" type="submit" sx={{ width: "100%" }}>
            Crear
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Crear;
