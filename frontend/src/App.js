import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Crear from "./componentes/Crear";
import Ver from "./componentes/Ver";
import Navbar from "./componentes/Navbar";

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
          </Routes>
        }
      />
    </div>
  );
}

export default App;
