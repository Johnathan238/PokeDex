import  React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      searchText: ""
    }
  }
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  search = async () => {
    const pokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${this.state.searchText}`)
    this.setState({
      pokemonDetail: pokemon.data,
      detailView: true
    })
  }

  render() {
    return (
      <header className="head">
        <nav className="navbar">
          <div className="nav">
            <a className="Atag" href="#">
              <Link to="/">
                <span className="Span">
                  Pokédex
               </span>
              </Link>
              <input type="text" onChange={this.props.handleChange} />
              <Link to={`/pokemon/${this.state.searchText}`}>
                <button onClick={this.props.search}>Lets Find Your Pokémon!</button>
              </Link>
            </a>
          </div>
        </nav>
      </header>)
  }
}