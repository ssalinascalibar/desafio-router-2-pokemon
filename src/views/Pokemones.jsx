import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pokemones() {
  const [pokemones, setPokemones] = useState([]); //array de todos los pokemones
  const [selectedPoke, setSelectedPoke] = useState(""); // pokemon seleccionado en  <select>

  // variable que contiene el endPoint
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0';
  // const url = 'https://pokeapi.co/api/v2/pokemon/';
    
  const getPokemones = async() => {
    const response = await fetch(url);
    const data = await response.json();

    setPokemones(data.results); //data.results es el arreglo de datos de la api
    console.log(data.results);
  };

  //useEffect renderiza la api
  useEffect(() => {
      getPokemones();
  }, []);    


  

  const navigate = useNavigate();
  const irAPersonajes = () => {
    console.log(selectedPoke);
      navigate(`/pokemones/${selectedPoke}`);
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Selecciona un pokemon</h1>
        <select className="form-select" value={selectedPoke} onChange={(e) => setSelectedPoke(e.target.value)}>
          <option value="">Pokemones</option>
            {pokemones.map(({ name }, i) => (
              <option key={i} value={name}> {name} </option>
            ))}
        </select>
        
        {/* <input type="number"  value={id} onChange={({ target }) => setId(target.value)}/> */}
          <button type="button" className="btn btn-dark" onClick={irAPersonajes}>Ver Detalle</button>
      </div>
    </div>
  )
}
