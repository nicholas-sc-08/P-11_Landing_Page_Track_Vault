import React, { useContext } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';


function Footer() {

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
    <div className='container_footer'>

    <img src="Track_vault (1).svg" alt="" className='logo_footer'/>

    <div className="coluna_de_links_a">

        <h4>Links</h4>

        <Link to={`#`} onClick={ir_ate_inicio}>Início</Link>
        <Link to={`#`} onClick={ir_ate_produtos}>Produtos</Link>
        <Link to={`#`} onClick={ir_ate_eventos}>Próximos Eventos</Link>
        <Link to={`#`} onClick={ir_ate_imprensa}>Imprensa</Link>

    </div>

    <div className="coluna_de_links_b">

        <h4>Redes Sociais</h4>

        <div>

            <Link target='_blank' to='https://www.facebook.com/'><img src="facebook.png" alt="facebook" /></Link>
            <Link target='_blank' to='https://www.instagram.com/'><img src="instagram.png" alt="instagram" /></Link>
            <Link target='_blank' to='https://www.whatsapp.com/'><img src="whatsapp.png" alt="whstapp" /></Link>

        </div>

    </div>

    </div>
  )
}

export default Footer