import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super()
    this.state = {
      rocks: ['Realgar', 'Tanzinite', 'Granite', 'Basalt', 'Dolemite', 'Obsidian']
    }

  }
render() {
  let coolRocks = this.state.rocks.map((element, index) => {
    
      return <h2 key={index}>{element}</h2>;
    })

    return <div className="App">{coolRocks}</div>


}
}

export default App;
