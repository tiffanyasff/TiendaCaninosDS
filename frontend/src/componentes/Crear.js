import React from "react";
import { Box, Button, Typography } from "@mui/material";
import MyTextField from "./formularios/MyTextField";
import MyPasswordField from "./formularios/MyPasswordField";
import MyListItemField from "./formularios/MyListItemField";
import AxiosInstance from "./Axios";
import { useForm } from "react-hook-form";

const Crear = () => {
  const defaultValues = {
    username: "",
    first_name: "",
    email: "",
    password: "",
    cellphone: "",
    address: "",
    permission_type: 3
  };

  const { handleSubmit, reset, setValue, control } = useForm({
    defaultValues: defaultValues,
  });

  const submission = async (data) => {
    try {
      const response = await AxiosInstance.post(
        "http://localhost:8000/api/users/create/",
        data
      );
      if(response.status === 200){
        console.log(response.data);
        alert("Usuario creado exitosamente");
        reset(); // Reiniciar el formulario después de enviar
      }
      else{
        console.error("Error al crear el usuario", response.data);
        alert("Error al crear el usuario");
      }
    } catch (error) {
      console.error("Error al crear el usuario", error);
      alert("Error al crear el usuario");
    }
  };

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
            name={"first_name"}
            control={control}
            placeholder="Ingrese su nombre"
            width={"30%"}
          />

          <MyTextField
            label="Correo"
            name={"email"}
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
            name={"cellphone"}
            control={control}
            placeholder="Ingrese su telefono"
            width={"30%"}
          />

          <MyTextField
            label="Usename"
            name={"username"}
            control={control}
            placeholder="Ingrese su username"
            width={"30%"}
          />

          <MyTextField
            label="Direccion"
            name={"address"}
            control={control}
            placeholder="Ingrese su direccion"
            width={"30%"}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <MyListItemField
            label="Tipo de Administración"
            name={"permission_type"}
            control={control}
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
