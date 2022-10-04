import { NavLink } from "react-router-dom";
import logo from "../assets/img/pokemon-icon.png";

export default function NavBar() {
    //se asigna la clase active a la variable setActiveClass
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <nav className="navbar">
      <div className="container">   
        <div className="navbar-brand" href="#home">
          <img src={logo} alt="pokemon"/>
        </div>
        <div className="links">
          {/* la propiedad end permite que la clase active no se que marcando siempre a home*/}
          <NavLink end className={ setActiveClass } to="/"> Home </NavLink>
          
          <NavLink className={ setActiveClass } to="/pokemones"> Pokemones </NavLink>
        </div>
      </div>      
    </nav>
  )
}
