import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";

// TextField con borde y label blanco
const WhiteBorderTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff", // Borde blanco
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#fff", // Color blanco para el label
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#fff", // Color blanco cuando el label está enfocado
  },
}));

// TextField con borde y label negro
const BlackBorderTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#000", // Borde negro
    },
    "&:hover fieldset": {
      borderColor: "#000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#000", // Color negro para el label
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#000", // Color negro cuando el label está enfocado
  },
}));

export { BlackBorderTextField, WhiteBorderTextField };
