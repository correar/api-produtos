import React, { Component } from 'react';
import './buscas.css';

class Buscas extends Component {
  constructor(){
    super();
    this.state = {
      produto: []
    }
  }
  updateSearch(event){
    this.setState({produto: event.target.value.substr(0,5)});
    /*fetch('/api/kitcamas/')
    .then(res=>res.json())
    .then(produtos => this.setState({produto}, ()=> console.log('Produtos coletados...', produtos)));*/
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.produto} onChange={this.updateSearch.bind(this)}/>
      </div>
    );
  }
}

export default Buscas;
