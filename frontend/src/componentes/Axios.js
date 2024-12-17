import axios from "axios";

// Obtener la URL base desde el entorno o usar localhost por defecto
const baseUrl = process.env.REACT_APP_BASE_URL || "http://127.0.0.1:8000";

console.log("BASE URL:", baseUrl);

// Crear la instancia de Axios
const AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Configurar el header Authorization si hay un token guardado en localStorage
const token = localStorage.getItem("token");
if (token) {
  AxiosInstance.defaults.headers["Authorization"] = `Bearer ${token}`;
  console.log("Token configurado en Axios:", token);
} else {
  console.log("No hay token en localStorage");
}

// Exportar la instancia de Axios
export default AxiosInstance;
