import "./assets/style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom"

//importando componente Navbar
import NavBar from "./components/NavBar"; //está exportado por default


//importando vistas
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Pokemon from "./views/Pokemon";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<Pokemon />} /> {/*pokemon recibe el parámetro :name*/}
          <Route path="*" element={<NotFound />} />
          
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
