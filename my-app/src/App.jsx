import React, { Component } from 'react';
import axios from "axios"
import './App.css';
import Header from "./Header"
import PokemonDetail from './PokemonDetail';
import { Route, Redirect, Link } from 'react-router-dom';

export default class App extends Component {
  state = {
    pokemon: [],
    searchText: '',
    pokemonDetail: {},
    detailView: false,
    bgColor: 'white'
  }


  async componentDidMount() {
    const pokemon = await axios("https://pokeapi.co/api/v2/pokemon/?limit=200")
    this.setState({
      pokemon: pokemon.data.results
    })
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

  darkMode = () => {
    if (this.state.bgColor == 'white') {
      this.setState({
        bgColor: 'black',
      })
    } else {
      this.setState({
        bgColor: 'white',
      })
    }
  }

  render() {
    let mainContent
    if (!this.state.detailView) {
      mainContent = <section
        id="results"
        className="d-flex justify-content-center flex-wrap col-10"
      >
        {this.state.pokemon.map(pokemon => <Link to={`/pokemon/${pokemon.name}`}><button>{pokemon.name}</button></Link>)}
        
      </section>
    }
    let reDirect = this.state.detailView && <Redirect to={`/pokemon/ditto`}/>
    return (
      <>
        <Header handleChange={this.handleChange} search={this.search} />
        <Route path="/" exact>
          <main className="d-flex justify-content-center align-items-center">
            {mainContent}
          </main>
        </Route>
        <Route path="/pokemon/:name">
          <PokemonDetail />
        </Route>
        {reDirect}
      </>
    );
  }


}
