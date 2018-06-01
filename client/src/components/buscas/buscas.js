import React from 'react';
import './buscas.css';
//import Produtos from '../produtos/produtos';


/*class Buscas extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(event) {
    this.setState({search:event.target.value})
  }

  render() {
    /*let produtosFiltrados = Produtos.props.produtos.filter(
      (produto) => {
        return produto.nome.indexOf(this.state.search) !== -1;
      }
    );*/
const Buscas = ({ onChange }) => (
    //return (
      <div>
        <input type="text" 
          onChange={onChange}
        />
      </div>
      
    );
//  }
//}

export default Buscas;
