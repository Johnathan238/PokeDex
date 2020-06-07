import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class PokemonDetail extends Component {
  state = {
    pokeData: null
  }

  async componentDidMount() {
    
    const selectedPokemon = this.props.info.find(pokemon => (

      pokemon.name == this.props.match.params.name
    ))

    const response = await axios.get(selectedPokemon.url)

    this.setState({
      pokeData: response.data
    })
  }

  render() {
    console.log(this.props.match.params.name);
    let { pokeData } = this.state

    return (
      <div className="all-pokémon">
        {this.state.pokeData &&
          <div className="pokemon">
          <h1 className="pokémon-name">{pokeData.name}</h1>
          <img src={pokeData.sprites.front_default} />
          <img src={pokeData.sprites.back_default} />
          {pokeData.stats.map(stat => {
            return <div className="pokémon-stats">{stat.stat.name}{stat.base_stat}</div>
          })}
          <h2>Pokémon Ability</h2>
          {pokeData.abilities.map(ability => {
            return <div className="pokémon-abilities">{ability.ability.name}</div>
          })}
          <h3>Pokémon Moves</h3>
          {pokeData.moves.map(move => {
            return <div className="pokémon-moves">{move.move.name}</div>
          })}
           </div>
          
        }
      </div>

    )
  }
}

export default withRouter(PokemonDetail)



