import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Crear from "./componentes/Crear";
import Ver from "./componentes/Ver";
import Navbar from "./componentes/Navbar";
import Editar from "./componentes/Editar";
import Borrar from "./componentes/Borrar";

function App() {
  const myWidth = 220;
  return (
    <div className="App">
      <Navbar
        drawerWidth={myWidth}
        content={
          <Routes>
            <Route path="" element={<Menu />} />
            <Route path="/ver" element={<Ver />} />
            <Route path="/crear" element={<Crear />} />
            <Route path="/editar/:id" element={<Editar />} />
            <Route path="/borrar/:id" element={<Borrar />} />
          </Routes>
        }
      />
    </div>
  );
}

export default App;
