import React, { Component } from 'react';
import './buscas.css';

class Buscas extends Component {
  constructor(){
    super();
    this.state = {
      produtos: []
    }
  }
  componentDidMount(){
    fetch('/api/kitcamas')
    .then(res=>res.json())
    .then(produtos => this.setState({produtos}, ()=> console.log('Produtos coletados...', produtos)));
  }

  render() {
    return (
      <div>
       
      </div>
    );
  }
}

export default Buscas;
