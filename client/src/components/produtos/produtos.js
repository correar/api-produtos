import React, { Component } from 'react';
import './produtos.css';
import Produto from './produto';


class Produtos extends Component {
  constructor(){
    super();
    this.state = {
      produtos: []
    }
  }
  /*componentDidMount(){
    fetch('/api/kitcamas/'+this.props.produtos)
    .then(res=>res.json())
    .then(produtos => this.setState({produtos}, ()=> console.log('Produtos coletados...', produtos)));
  
  }
*/
  

  

  render() {
    return (
      <div>
        <div className="title">Kit Cama </div>
        <div className="products">
          {this.props.produtos.map((produto) => {
            return <Produto key={produto._id} produto={produto} />
          }
          )}
        </div>
      </div>
    );
  }
}

export default Produtos;
