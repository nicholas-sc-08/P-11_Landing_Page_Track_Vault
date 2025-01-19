import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className='banner_container'>
        
        <div className="banner_hyperlinks_container">

            <Link to=''>Turnê</Link>
            <Link to=''>Imprensa</Link>
            <Link to=''>Data dos Eventos</Link>
            <Link to=''>Produtos</Link>

        </div>

        <div className="banner_logo_container">

            <img src="Track_vault.svg" alt="Fundo" />
        
        </div>

        <div className="banner_botao_container">

            <button>Entre em Contato</button>

        </div>
        
    </div>
  )
}

export default Banner