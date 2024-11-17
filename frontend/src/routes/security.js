import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "./publicRoutes";

export default function SecurityRoute() {
  /*aqui necesitan poner alguna manera de verificar la condicion de si ya se ha logueado o no*/
  const isLogged = false;

  if (isLogged === null) {
    return (
      <>
        <p>loading</p>
      </>
    ); // Muestra un spinner de carga o algún otro indicador
  }

  return isLogged ? <Outlet /> : <Navigate replace to={PublicRoutes.registrarse} />;
}
