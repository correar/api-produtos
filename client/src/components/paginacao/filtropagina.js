import React from 'react';
import './paginacao.css';

const FiltroPagina = ({ onChange }) => (
      
        <select 
          onChange={onChange}
          name="limit"
          className="limit"
        >
        <option value="5">5 produtos por página</option>
        <option value="10">10 produtos por página</option>
        </select>
      
      
    );

export default FiltroPagina;
