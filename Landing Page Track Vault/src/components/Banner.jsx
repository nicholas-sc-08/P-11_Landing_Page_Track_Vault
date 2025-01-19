import React, { useContext, useRef } from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

function Banner() {
  
  const {inicio_ref} = useContext(GlobalContext);

  return (
    <div className='banner_container' ref={inicio_ref}>
        
        <div className="banner_hyperlinks_container">

            <Link to=''>Início</Link>
            <Link to=''>Produtos</Link>
            <Link to=''>Próximos Eventos</Link>
            <Link to=''>Imprensa</Link>

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