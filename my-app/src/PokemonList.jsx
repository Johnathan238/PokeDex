import React from 'react';
import { Link } from 'react-router-dom'

export default function componentName(props) {
  return (
    <>
      <section
        id="results"
        className="mainContent"
      >
        {props.allPokemons.map(pokemon => <Link to={`/pokemon/${pokemon.name}`}><button>{pokemon.name}</button></Link>)}
      </section>
    
    </>
  );
}


