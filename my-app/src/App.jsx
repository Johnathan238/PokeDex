import React, { Component } from 'react';
import axios from "axios"
import './App.css';
import Header from "./Header"
import PokemonDetail from './PokemonDetail';
import { Route, Redirect, Link, withRouter } from 'react-router-dom';
import Footer from "./Footer"


 class App extends Component {
  state = {
    allPokemons: [],
    searchText: '',
    pokemonDetail: {},
    detailView: false
  }


  async componentDidMount() {
    const pokemons = await axios("https://pokeapi.co/api/v2/pokemon/?limit=600")
    this.setState({
      allPokemons: pokemons.data.results
    })
  }
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  search = async () => {
    const pokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${this.state.searchText}`)
    this.setState(prevState => ({
      allPokemons: [...prevState.allPokemons,pokemon.data]
    }))
    this.props.history.push(`/pokemon/${pokemon.data.name}`)
  }

  


  render() {
    let mainContent
    
      mainContent = <section
        id="results"
        className="mainContent"
      >
        {this.state.allPokemons.map(pokemon => <Link to={`/pokemon/${pokemon.name}`}><button>{pokemon.name}</button></Link>)}
      </section>
    
    
    return (
      <>
        <Header handleChange={this.handleChange} search={this.search} />
        <Route path="/" exact>
          <main className="main">
            {mainContent}  
          </main>
        </Route>
        <Route path="/pokemon/:name">
          <PokemonDetail info = {this.state.allPokemons}/>
        </Route>
        <Footer />
      </>
    );
  }
 }

 export default withRouter(App)
