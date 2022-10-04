import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pokemones from "./Pokemones";

export default function Pokemon() {

    const [pokemon, setPokemon] = useState({}); //guarda solo un pokemon

    // variable que contiene el endPoint
    const url = 'https://pokeapi.co/api/v2/pokemon';
    
    // useParams trae el parametro name, recibe el dato ${selectedPoke} desde Pokemones.jsx
    const { name } = useParams();

    // recibe el argumento name que trajo useParams desde Pokemones.js (selectedPoke)
    const getPokemon = async(name) => {
        const response = await fetch(`${url}/${name}`); // fetch muestra la url de la api + name que es el nombre del pokemon seleccionado, pasado por parametro
        const data = await response.json();

        const src = data.sprites.other.dream_world.front_default;
        const stats = data.stats.map((e) => ({ hp: e.base_stat, name: e.stat.name }));
        const types = data.types.map((e) =>  e.type.name );
        console.log(stats)

        // console.log(data);
        setPokemon( {src, stats, types} );
        // console.log( {src, hp} );
    };

    useEffect(() => {
        getPokemon(name)
    }, [name])    



  return (
    <div className="container">
      <div className="content">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-7">
              <div className="img-poke">
                <img src={pokemon.src} />
              </div>
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h2>{name}</h2>
                <div className="list">
                  {pokemon.stats?.map((stat, i) => (
                        <li key={i}>
                          {stat.name} : {stat.hp} 
                        </li>
                  ))}
                  <p className="type-p">{pokemon.types}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


