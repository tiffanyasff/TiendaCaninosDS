import { React, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import AxiosInstance from "./Axios";
import { useNavigate, useParams } from "react-router-dom";

const Borrar = () => {
  const MyParam = useParams();
  const MyId = MyParam.id;

  const [myData, setMydata] = useState();
  const [loading, setLoading] = useState(true);

  const GetData = () => {
    AxiosInstance.get(`http://localhost:8000/api/borrar-usuario/${MyId}/`).then(
      (res) => {
        setMydata(res.data);
        console.log(res.data);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    GetData();
  }, []);

  const navigate = useNavigate();

  const submission = (data) => {
    console.log("chaooooo");
    AxiosInstance.delete(
      `http://localhost:8000/api/borrar-usuario/${MyId}/`
    ).then((res) => {
      navigate(`/`);
    });
  };

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
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
              Borrar Usuario: {myData.nombre}
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
              ¿Estas seguro de borrar a {myData.nombre}?
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                marginTop: "40px",
              }}
            >
              <Button
                variant="contained"
                onClick={submission}
                sx={{ width: "100%" }}
              >
                Borrar
              </Button>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-around" }}></Box>
          </Box>
        </div>
      )}
    </div>
  );
};

export default Borrar;
