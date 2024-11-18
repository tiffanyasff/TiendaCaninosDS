import { React, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import MyTextField from "./formularios/MyTextField";
import MyPasswordField from "./formularios/MyPasswordField";
import AxiosInstance from "./Axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const Editar = () => {
  const MyParam = useParams();
  const MyId = MyParam.id;

  const [loading, setLoading] = useState(true);

  const GetData = () => {
    AxiosInstance.get(`http://localhost:8000/api/editar-usuario/${MyId}`).then(
      (res) => {
        console.log("holaaaa");
        console.log(res.data);
        setValue("nombre", res.data.nombre);
        setValue("correo", res.data.correo);
        setValue("password", res.data.password);
        setValue("telefono", res.data.telefono);
        setValue("direccion", res.data.direccion);
        setValue("username", res.data.username);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    GetData();
  }, []);

  const navigate = useNavigate();
  const defaultValues = {
    name: "",
    comments: "",
    status: "",
  };

  const { handleSubmit, setValue, control } = useForm({
    defaultValues: defaultValues,
  });
  const submission = (data) => {
    console.log("chaooooo");
    AxiosInstance.put(`http://localhost:8000/api/editar-usuario/${MyId}/`, {
      nombre: data.nombre,
      correo: data.correo,
      password: data.password,
      telefono: data.telefono,
      direccion: data.direccion,
      username: data.username,
    }).then((res) => {
      navigate(`/menu`);
    });
  };

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
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
              Editar Usuario
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
                label="Username"
                name={"username"}
                control={control}
                placeholder="username"
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
              sx={{
                display: "flex",
                justifyContent: "start",
                marginTop: "40px",
              }}
            >
              <Button variant="contained" type="submit" sx={{ width: "100%" }}>
                Editar
              </Button>
            </Box>
          </Box>
        </form>
      )}
    </div>
  );
};

export default Editar;
