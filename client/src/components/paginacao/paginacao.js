import React, { Component } from 'react';
import './paginacao.css';


class Paginacao extends Component {
  constructor(){
    super();
    this.state = {
      total: '',
    }
  }
  paginas(produtos,tamanho){
    let total = Math.ceil(produtos/tamanho);
    let paginas = [];
    for(let i=1;i<=total;i++){
      paginas.push(i);
    }
    return paginas;
  }
  anterior(pagina){
    let total = Number(pagina)-1;
    return total;
  }
  proximo(pagina){
    let total = Number(pagina)+1;
    return total;
  }
  ultimo(produtos,tamanho){
    let total = Math.ceil(produtos/tamanho);
    return total;
  }
  
  render(){
    return(
      <div className="paginacao">
          
          {this.props.pagina == 1 && this.props.pagina == this.ultimo(this.props.produtos,this.props.tamanho) ? 
            <ul>
              <li><button type="button" disabled onClick={this.props.onClick} value="1"> &#8739; &lt; </button></li>
              <li><button type="button" disabled onClick={this.props.onClick} value={this.anterior(this.props.pagina)}> &lt; </button></li> 
              {this.paginas(this.props.produtos,this.props.tamanho).map((pagina) => {
                  return <li><button type="button" value={pagina} onClick={this.props.onClick}> {pagina} </button></li>
                }
              )}
              <li><button type="button" disabled onClick={this.props.onClick} value={this.proximo(this.props.pagina)}> &gt; </button></li>
              <li><button type="button" disabled onClick={this.props.onClick} value={this.ultimo(this.props.produtos,this.props.tamanho)}> &gt; &#8739; </button></li>
            </ul>
          :

          this.props.pagina == 1 ?
            <ul>
              <li><button type="button" disabled onClick={this.props.onClick} value="1"> &#8739; &lt; </button></li>
              <li><button type="button" disabled onClick={this.props.onClick} value={this.anterior(this.props.pagina)}> &lt; </button></li> 
              {this.paginas(this.props.produtos,this.props.tamanho).map((pagina) => {
                  return <li><button type="button" value={pagina} onClick={this.props.onClick}> {pagina} </button></li>
                }
              )}
              <li><button type="button"  onClick={this.props.onClick} value={this.proximo(this.props.pagina)}> &gt; </button></li>
              <li><button type="button"  onClick={this.props.onClick} value={this.ultimo(this.props.produtos,this.props.tamanho)}> &gt; &#8739; </button></li>
            </ul>
          :
            
          this.props.pagina == this.ultimo(this.props.produtos,this.props.tamanho) ? 
            <ul>
              <li><button type="button" onClick={this.props.onClick} value="1"> &#8739; &lt; </button></li>
              <li><button type="button" onClick={this.props.onClick} value={this.anterior(this.props.pagina)}> &lt; </button></li> 
              {this.paginas(this.props.produtos,this.props.tamanho).map((pagina) => {
                  return <li><button value={pagina} onClick={this.props.onClick}> {pagina} </button></li>
                }
              )}
              <li><button type="button" disabled onClick={this.props.onClick} value={this.proximo(this.props.pagina)}> &gt; </button></li>
              <li><button type="button" disabled onClick={this.props.onClick} value={this.ultimo(this.props.produtos,this.props.tamanho)}> &gt; &#8739; </button></li>
            </ul>
          :
            <ul>
              <li><button type="button" onClick={this.props.onClick} value="1"> &#8739; &lt; </button></li>
              <li><button type="button" onClick={this.props.onClick} value={this.anterior(this.props.pagina)}> &lt; </button></li> 
              {this.paginas(this.props.produtos,this.props.tamanho).map((pagina) => {
                  return <li><button value={pagina} onClick={this.props.onClick}> {pagina} </button></li>
                }
              )}
              <li><button type="button"  onClick={this.props.onClick} value={this.proximo(this.props.pagina)}> &gt; </button></li>
              <li><button type="button"  onClick={this.props.onClick} value={this.ultimo(this.props.produtos,this.props.tamanho)}> &gt; &#8739; </button></li>
            </ul>
          
        }
      </div>
    );
  }
}

export default Paginacao;
