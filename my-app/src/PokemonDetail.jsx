import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class PokemonDetail extends Component {
  state = {
    pokeData: null
  }

  async componentDidMount() {
    console.log("CDM");
    
    const selectedPokemon = this.props.info.find(pokemon => (

      pokemon.name == this.props.match.params.name
    ))
    // console.log(selectedPokemon);

    const response = await axios.get(selectedPokemon.url)

    this.setState({
      pokeData: response.data
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log(prevProps, prevState);
    
  //   // if (prevState.pokeData !== this.state.pokeData) {
  //   //   this.componentDidMount()
  //   // }

  // }




  render() {
    console.log(this.props.match.params.name);
    let { pokeData } = this.state

    return (
      <>
        
        {this.state.pokeData &&
          <div className="pokemon">
          <div>{pokeData.name}</div>
          <img src={pokeData.sprites.front_default} />
          <img src={pokeData.sprites.back_default} />
          {pokeData.stats.map(stat => {
            return <div>{stat.stat.name}{stat.base_stat}</div>
          })}
          {pokeData.abilities.map(ability => {
            return <div>{ability.ability.name}</div>
          })}
          {pokeData.moves.map(move => {
            return <div>{move.move.name}</div>
          })}
           </div>
          
        }
      </>

    )
  }
}

export default withRouter(PokemonDetail)



