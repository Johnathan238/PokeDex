import React from 'react'
export default function Header(props) {
  return (
    <header className="bg-dark d-flex justify-content-between px-5">
      <nav className="navbar navbar-dark">
        <div className="nav">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span className="navbar-text text-white font-weight-bold">
              Pokédex
          </span>
            <input type="text" onChange={props.handleChange} />
            <button onClick={props.search}>Lets Find Your Pokémon!</button>
          </a>
        </div>
      </nav>
    </header>)
}