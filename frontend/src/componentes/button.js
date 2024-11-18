import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { LoadingButton } from "@mui/lab";

const DarkButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: theme.palette.firstColor.main,
  "&:hover": {
    backgroundColor: theme.palette.firstColor.dark,
  },
}));

const LightButton = styled(Button)(({ theme }) => ({
  color: "black",
  backgroundColor: theme.palette.secondColor.main,
  "&:hover": {
    backgroundColor: theme.palette.secondColor.dark,
  },
}));

const LoadingDarkButton = styled(LoadingButton)(({ theme }) => ({
  color: "black",
  backgroundColor: theme.palette.firstColor.main,
  "&:hover": {
    backgroundColor: theme.palette.firstColor.dark,
  },
  "&:disabled": {
    backgroundColor: theme.palette.secondColor.dark,
    cursor: "not-allowed",
  },
}));

const LoadingLightButton = styled(LoadingButton)(({ theme }) => ({
  color: "black",
  backgroundColor: theme.palette.secondColor.main,
  "&:hover": {
    backgroundColor: theme.palette.secondColor.dark,
  },
  "&:disabled": {
    backgroundColor: theme.palette.secondColor.dark,
    cursor: "not-allowed",
  },
}));

export { DarkButton, LightButton, LoadingDarkButton, LoadingLightButton };
