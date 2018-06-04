import React from 'react';
import './buscas.css';
import Search from '../../public/icon/search.png';

const Buscas = ({ onChange }) => (
      <div className="box">
        <img src={Search} className="search" alt="busca"/>
        <input type="text" 
          onChange={onChange}
          placeholder="Kit cama... "
        />
      </div>
      
    );

export default Buscas;
