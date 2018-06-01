import React, { Component } from 'react';
import logo from './mmartan_com.png';
import './App.css';
import Produtos from './components/produtos/produtos';
import Buscas from './components/buscas/buscas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} class="App-logo" />
          <Buscas />
        </header>
        <Produtos />
      </div>
    );
  }
}

export default App;
