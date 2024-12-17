import axios from "axios";

// Obtener la URL base desde el entorno o usar localhost por defecto
const baseUrl = process.env.REACT_APP_BASE_URL || "http://127.0.0.1:8000";

console.log("BASE URL:", baseUrl);

// Crear la instancia de Axios
const AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Exportar la instancia de Axios
export default AxiosInstance;
