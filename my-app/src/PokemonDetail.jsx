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
    console.log(selectedPokemon);

    const response = await axios.get(selectedPokemon.url)

    this.setState({
      pokeData: response.data
    })
  }




  render() {
    console.log(this.props.match.params.name);


    return (
      <>
        {this.state.pokeData && 
          <div>{this.props.match.params.name}</div> 
      }
      </>
        
    )
  }
}

export default withRouter(PokemonDetail)



