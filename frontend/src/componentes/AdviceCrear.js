import React, { useState } from "react";
import { Box, Button, Typography, MenuItem, TextField } from "@mui/material";
import MyTextField from "./formularios/MyTextField";
import AxiosInstance from "./Axios";
import { useForm, Controller } from "react-hook-form";

const Crear = () => {
  const defaultValues = {
    imagen: null,
    nombre: "",
    precio: "",
    cantidad: 1,
    tamano: "",
  };

  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues: defaultValues,
  });

  const [previewImage, setPreviewImage] = useState(null); // Estado para la previsualización de la imagen

  const handleImageChange = (files, onChange) => {
    if (files && files[0]) {
      const file = files[0];
      setPreviewImage(URL.createObjectURL(file)); // Crear una URL para la imagen seleccionada
      onChange(files); // Pasar el archivo al control de react-hook-form
    }
  };

  const handleRemoveImage = (onChange) => {
    setPreviewImage(null); // Limpiar la previsualización
    onChange(null); 
    setValue("imagen", null); 
  };

  const submission = async (data) => {
    try {
      const formData = new FormData();
      formData.append("imagen", data.imagen?.[0] || null); // Subir la imagen
      formData.append("nombre", data.nombre);
      formData.append("precio", data.precio);
      formData.append("cantidad", data.cantidad);
      formData.append("tamano", data.tamano);

      const response = await AxiosInstance.post(
        "http://localhost:8000/api/crear-perro/",
        formData
      );
      console.log(response.data);
      alert("Perfil de perro creado exitosamente");
      reset();
      setPreviewImage(null); // Limpiar la previsualización
    } catch (error) {
      console.error("Error al crear el perfil del perro", error);
      alert("Error al crear el perfil del perro");
    }
  };

  return (
    <form onSubmit={handleSubmit(submission)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "15px auto",
          boxShadow: 3,
          padding: 4,
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
        }}
      >
        {/* Encabezado */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#00003f",
            marginBottom: "10px",
            padding: "10px 20px",
            borderRadius: "4px",
          }}
        >
          <Typography sx={{ color: "#fff" }}>Crear Perfil de Perro</Typography>
        </Box>

        {/* Campos del formulario */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Imagen */}
          <Controller
            name="imagen"
            control={control}
            rules={{ required: "La imagen es obligatoria" }}
            render={({ field, fieldState }) => (
              <Box>
                {!previewImage ? (
                  <Button
                    variant="contained"
                    component="label"
                    sx={{ width: "100%" }}
                  >
                    Subir Imagen
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={(e) => handleImageChange(e.target.files, field.onChange)}
                    />
                  </Button>
                ) : (
                  <Box>
                    <Box
                      component="img"
                      src={previewImage}
                      alt="Vista previa"
                      sx={{
                        marginTop: 2,
                        width: "100%",
                        maxHeight: "300px",
                        objectFit: "contain",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                      }}
                    />
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleRemoveImage(field.onChange)}
                      sx={{ marginTop: 1, width: "100%" }}
                    >
                      Eliminar Imagen
                    </Button>
                  </Box>
                )}
                {fieldState.error && (
                  <Typography color="error" variant="caption">
                    {fieldState.error.message}
                  </Typography>
                )}
              </Box>
            )}
          />

          {/* Nombre */}
          <MyTextField
            label="Nombre"
            name="nombre"
            control={control}
            placeholder="Ingrese el nombre"
            rules={{ required: "El nombre es obligatorio" }}
            width="100%"
          />

          {/* Precio */}
          <MyTextField
            label="Precio"
            name="precio"
            control={control}
            placeholder="Ingrese el precio"
            rules={{
              required: "El precio es obligatorio",
              pattern: {
                value: /^[0-9]+(\.[0-9]{1,2})?$/,
                message: "El precio debe ser un número válido",
              },
            }}
            width="100%"
          />

          {/* Cantidad */}
          <MyTextField
            label="Cantidad"
            name="cantidad"
            control={control}
            type="number"
            placeholder="Ingrese la cantidad"
            rules={{
              required: "La cantidad es obligatoria",
              min: { value: 1, message: "La cantidad debe ser al menos 1" },
            }}
            width="100%"
          />

          {/* Tamaño */}
          <Controller
            name="tamano"
            control={control}
            rules={{ required: "Debe seleccionar un tamaño" }}
            render={({ field, fieldState }) => (
              <TextField
                select
                label="Tamaño"
                {...field}
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              >
                <MenuItem value="pequeno">Pequeño</MenuItem>
                <MenuItem value="mediano">Mediano</MenuItem>
                <MenuItem value="grande">Grande</MenuItem>
              </TextField>
            )}
          />
        </Box>

        {/* Botón de Envío */}
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
          <Button variant="contained" type="submit" sx={{ width: "50%" }}>
            Crear
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Crear;
