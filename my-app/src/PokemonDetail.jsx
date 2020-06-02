import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

 class PokemonDetail extends Component {
  render() {
    console.log(this.props.match.params.name);
    
    return (
      <>
      {/* if (this.state.detailView) {
      mainContent = <h1>{this.state.pokemonDetail.name}</h1>
    } */}
      </>
    )
  }
 }

 export default withRouter (PokemonDetail)



