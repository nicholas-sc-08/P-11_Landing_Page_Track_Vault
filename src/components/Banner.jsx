import React, { useContext, useRef } from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

function Banner() {
  
    const {inicio_ref} = useContext(GlobalContext);
    const {proximos_eventos_ref} = useContext(GlobalContext);
    const {produtos_ref} = useContext(GlobalContext);
    const {imprensa_ref} = useContext(GlobalContext);

    const ir_ate_inicio = ()=> {

     inicio_ref.current.scrollIntoView({ behavior: 'smooth'});
    };

    const ir_ate_eventos = ()=> {

        proximos_eventos_ref.current.scrollIntoView({ behavior: 'smooth'});
    };
    
    const ir_ate_produtos = ()=> {

        produtos_ref.current.scrollIntoView({ behavior: 'smooth'});
    };

    const ir_ate_imprensa = ()=> {

        imprensa_ref.current.scrollIntoView({ behavior: 'smooth'});
    };
  return (
    <div className='banner_container' ref={inicio_ref}>
        
        <div className="banner_hyperlinks_container">

            <Link to={`#`} onClick={ir_ate_inicio}>Início</Link>
            <Link to={`#`} onClick={ir_ate_produtos}>Produtos</Link>
            <Link to={`#`} onClick={ir_ate_eventos}>Próximos Eventos</Link>
            <Link to={`#`} onClick={ir_ate_imprensa}>Imprensa</Link>

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