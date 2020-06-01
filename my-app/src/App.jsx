import React, { Component } from 'react';
import axios from "axios"
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import Header from "./Header"

export default class App extends Component {
  state = {
    pokemon: [],
    searchText: '',
    pokemonDetail: {},
    detailView: false,
    bgColor: 'white'
  }


  componentDidMount = () => {
    const pokemon = await axios("https://pokeapi.co/api/v2/pokemon/")
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
    if (this.state.detailView) {
      mainContent = <h1>{this.state.pokemonDetail.name}</h1>
    } else {
      mainContent = <section
        id="results"
        className="d-flex justify-content-center flex-wrap col-10"
      >
        {this.state.pokemon.map(pokemon => <button>{pokemon.name}</button>)}
      </section>
    }
    return (
      <>
        <Header handleChange={this.handleChange} search={this.search} />
        <main className="d-flex justify-content-center align-items-center">
          {mainContent}
        </main>
      </>
    );
  }


}
