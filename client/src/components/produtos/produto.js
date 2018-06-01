import React, { Component } from 'react';

class Produto extends Component {
  
  render() {
    return (
      <div key={this.props.produto._id} className="product" >
        <div className="product-picture" >{this.props.produto.fotos}</div>
        <div className="product-title">{this.props.produto.nome}
          <div className="product-subtitle">{this.props.produto.linha} - {this.props.produto.tamanho} - {this.props.produto.cores}</div>
        </div>
        <div className="product-prices">
          {this.props.produto.preco_anterior ? (
            <label className="product-last-price">R$ {this.props.produto.preco_anterior} por </label>
          ):""}
          <label className="product-current-price">R$ {this.props.produto.preco_atual}</label>
        </div>
      </div>
    );
  }
}

export default Produto;
