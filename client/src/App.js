import React, { Component } from 'react';
import logo from './mmartan_com.png';
import './App.css';
import Produtos from './components/produtos/produtos';
import Buscas from './components/buscas/buscas';
import FiltraProdutos from './components/buscas/filtraProdutos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      produtos:[]
      //filtraProdutos: ''
    };
  }
  updateSearch(event) {
    this.setState({search:event.target.value});
    fetch('/api/kitcamas/'+this.state.search)
    .then(res=>res.json())
    .then(produtos => this.setState({produtos}, ()=> console.log('Produtos filtrados...', produtos)));
  }

  componentDidMount(){
    fetch('/api/kitcamas/'+this.state.search)
    .then(res=>res.json())
    .then(produtos => this.setState({produtos}, ()=> console.log('Produtos filtrados...', produtos)));
  }

  //this.setState({filtraProdutos:FiltraProdutos(this.state.search)});

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Buscas onChange={this.updateSearch.bind(this)}/>
        </header>
        <Produtos produtos={this.state.produtos}/>

      </div>
    );
  }
}

export default App;
