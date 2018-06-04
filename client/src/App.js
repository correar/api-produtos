
import React, { Component } from 'react';
import logo from './mmartan_com.png';
import './App.css';
import Produtos from './components/produtos/produtos';
import Buscas from './components/buscas/buscas';
import Paginacao from './components/paginacao/paginacao';
import FiltroPagina from './components/paginacao/filtropagina';

class App extends Component {
  constructor() {
    super();
    this.state = {
      produtos:[],
      tamanho:'5',
      pagina:'1',
      paginas: '1',
    };
  }
  updateSearch(event) {
    fetch('https://api-produtos-205723.appspot.com/api/kitcamas/'+event.target.value,{ method: 'get' })
    .then(res=>res.json(), ()=> console.log(res=>res.json()))
    .then(produtos => this.setState({produtos}, ()=> console.log('Produtos filtrados... ', produtos)));
  }

  componentDidMount(){
    fetch('https://api-produtos-205723.appspot.com/api/kitcamas',{ method: 'get'})
    .then(res=>res.json())
    .then(produtos => this.setState({produtos}, ()=> console.log('Produtos ini encontrados...', produtos)));
  }

  paginacaoSearch(event){
    fetch('https://api-produtos-205723.appspot.com/api/kitcamas',{ method: 'get' })
    .then(res=>res.json())
    .then(produtos => this.setState({produtos}, ()=> console.log('Produtos encontrados...', produtos)));     
    this.setState({tamanho: event.target.value});    
  }

  pagina(event){
    this.setState({pagina: event.target.value});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Buscas onChange={this.updateSearch.bind(this)}/>
        </header>
        <Produtos produtos={this.state.produtos} pagina={this.state.pagina} tamanho={this.state.tamanho} />
        <div className="filtropagina">
          <FiltroPagina onChange={this.paginacaoSearch.bind(this)} />
          <Paginacao onClick={this.pagina.bind(this)} produtos={this.state.produtos.length} tamanho={this.state.tamanho} pagina={this.state.pagina} />
        </div>
      </div>
    );
  }
}

export default App;
