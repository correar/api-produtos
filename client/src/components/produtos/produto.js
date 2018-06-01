import React, { Component } from 'react';
import './produtos.css';

class Produto extends Component {
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
        <div class="title">Kit Cama</div>
        <div class="products">
          {this.state.produtos.map(produto => 
            <div class="product" key={produto.id}>
              <div class="product-picture" >{produto.fotos}</div>
              <div class="product-title">{produto.nome}
                <div class="product-subtitle">{produto.linha} - {produto.tamanho} - {produto.cores}</div>
              </div>
              <div class="product-prices">
                {produto.preco_anterior ? (
                  <label class="product-last-price">R$ {produto.preco_anterior} por </label>
                ):""}
                <label class="product-current-price">R$ {produto.preco_atual}</label>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Produto;
