import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    firstColor: {
      main: "#fff",
      dark: "#EFD2FD",
    },
    secondColor: {
      main: "#f2f2f2",
      dark: "#e6e6e6",
    },
  },
  shape: {
    borderRadius: 25,
  },
  typography: {
    fontFamily: "sans-serif",
  },
});

export { theme };
