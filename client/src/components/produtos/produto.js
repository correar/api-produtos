import React, { Component } from 'react';
import { FormattedNumber } from 'react-intl';

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
            <label className="product-last-price"><FormattedNumber value={this.props.produto.preco_anterior} style="currency" currency="BRL" /> por </label>
          ):""}
          <label className="product-current-price"><FormattedNumber value={this.props.produto.preco_atual} style="currency" currency="BRL" /></label>
        </div>
      </div>
    );
  }
}

export default Produto;
