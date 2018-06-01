import React, { Component } from 'react';
import './produtos.css';

class Produtos extends Component {
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
        <div className="title">Kit Cama</div>
        <div className="products">
          {this.state.produtos.map(produto => 
            <div key={produto._id} className="product" >
              <div className="product-picture" >{produto.fotos}</div>
              <div className="product-title">{produto.nome}
                <div className="product-subtitle">{produto.linha} - {produto.tamanho} - {produto.cores}</div>
              </div>
              <div className="product-prices">
                {produto.preco_anterior ? (
                  <label className="product-last-price">R$ {produto.preco_anterior} por </label>
                ):""}
                <label className="product-current-price">R$ {produto.preco_atual}</label>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Produtos;
