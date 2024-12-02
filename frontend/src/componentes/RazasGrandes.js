import React, { useState, useEffect } from "react";
// import axios from "axios"; // Descomenta esto cuando configures la conexión con el backend :P

const RazasGrandes = () => {
  // Estado para almacenar los datos de los perros
  const [razas, setRazas] = useState([]);

  // Hook useEffect para traer los datos desde el backend
  useEffect(() => {
    //
    /*
    const fetchRazas = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/razas/");
        setRazas(response.data);
      } catch (error) {
        console.error("Error al traer los datos:", error);
      }
    };
    fetchRazas();
    */

    // Datos temporales mientras no hay conexión con el backend
    const datosPrueba = [
      {
        id: 1,
        nombre: "Maltés",
        imagen: "https://via.placeholder.com/200", // Cambia por la URL de la imagen
        precios: { macho: 1800000, hembra: 2500000 },
      },
      {
        id: 2,
        nombre: "Maltipoo",
        imagen: "https://via.placeholder.com/200", // Cambia por la URL de la imagen
        precios: { macho: 1400000, hembra: 1400000 },
      },
      {
        id: 3,
        nombre: "Pinscher",
        imagen: "https://via.placeholder.com/200", // Cambia por la URL de la imagen
        precios: { macho: 1000000, hembra: 1200000 },
      },
    ];
    setRazas(datosPrueba);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "#d58e29" }}>Razas Grandes</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {razas.map((raza) => (
          <div
            key={raza.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              maxWidth: "300px",
              textAlign: "center",
            }}
          >
            <img
              src={raza.imagen}
              alt={raza.nombre}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h2 style={{ color: "#a36daf" }}>{raza.nombre}</h2>
            <p>Macho: Desde ${raza.precios.macho.toLocaleString()}</p>
            <p>Hembra: Desde ${raza.precios.hembra.toLocaleString()}</p>
            <p style={{ fontSize: "12px", color: "#888" }}>
              *Los precios están sujetos a posibles modificaciones*
            </p>
            <button
              style={{
                backgroundColor: "#fcbf49",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                margin: "5px",
                cursor: "pointer",
                border: "none",
              }}
            >
              ¡Ver más!
            </button>
            <button
              style={{
                backgroundColor: "#6c757d",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                margin: "5px",
                cursor: "pointer",
                border: "none",
              }}
            >
              ¡Quiero Asesoría!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RazasGrandes;
