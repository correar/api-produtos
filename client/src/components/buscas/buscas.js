import React from 'react';
import './buscas.css';

const Buscas = ({ onChange }) => (
      <div>
        <input type="text" 
          onChange={onChange}
        />
      </div>
      
    );

export default Buscas;
