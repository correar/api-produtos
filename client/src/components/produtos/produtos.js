import React, { Component } from 'react';
import './produtos.css';
import Produto from './produto';
import pt from 'react-intl/locale-data/pt';
import { IntlProvider, addLocaleData, FormattedPlural } from 'react-intl';
addLocaleData([...pt]);

class Produtos extends Component {
  constructor(){
    super();
    this.state = {
      produtos: []
    }
  }

  start(tamanho,pagina){
    let valor = tamanho*pagina;
    if(valor == tamanho){
      valor = 0;
    }else{
      valor = valor-tamanho;
    }
    return valor;
  }
  limit(tamanho,pagina){
    let valor = tamanho*pagina;
    return valor;
  }

  render() {
    return (
      <IntlProvider locale="pt-BR">
      <div>
        <div className="title">Kit Cama</div>
        <div className="subtitle"><span className="subtitle_text">
          {this.props.produtos.length > 0 ?
            <FormattedPlural value={this.props.produtos.length}
              one={this.props.produtos.length + ' PRODUTO ENCONTRADO'}
              other={this.props.produtos.length +' PRODUTOS ENCONTRADOS'}
            /> :
            'NENHUM PRODUTO ENCONTRADO'
          }
        </span></div>
        {this.props.produtos.length > 0 ?
          
          <div className="products" >
            {this.props.produtos.slice(this.start(this.props.tamanho,this.props.pagina),this.limit(this.props.tamanho,this.props.pagina)).map((produto) => {
              return <Produto key={produto._id} produto={produto} />
            }
            )}
          </div>
          :
          ''
        }
      </div></IntlProvider>
    );
  }
}

export default Produtos;
