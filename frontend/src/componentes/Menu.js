import { React, useEffect, useMemo, useState } from "react";
import AxiosInstance from "./Axios";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Menu = () => {
  const [myData, setMydata] = useState();
  const [loading, setLoading] = useState(true);

  const GetData = () => {
    AxiosInstance.post(`http://localhost:8000/api/users/list/`).then(
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

  const columns = useMemo(
    () => [
      {
        accessorKey: "first_name", //access nested data with dot notation
        header: "Nombre",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Correo",
        size: 150,
      },
      {
        accessorKey: "cellphone", //normal accessorKey
        header: "Telefono",
        size: 200,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Direccion",
        size: 200,
      },
    ],
    []
  );

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <MaterialReactTable
          columns={columns}
          data={myData}
          enableRowActions
          renderRowActions={({ row }) => (
            <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
              <IconButton
                color="secondary"
                component={Link}
                to={`editar/${row.original.guidbackend}`}
              >
                <EditIcon />
              </IconButton>

              <IconButton
                color="error"
                component={Link}
                to={`borrar/${row.original.guidbackend}`}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
        />
      )}
    </div>
  );
};

export default Menu;
