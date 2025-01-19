import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  
    return (
    <div className='container_footer'>

    <img src="Track_vault (1).svg" alt="" className='logo_footer'/>

    <div className="coluna_de_links_a">

        <h4>Links</h4>

        <Link>Início</Link>
        <Link>Produtos</Link>
        <Link>Próximos Eventos</Link>
        <Link>Imprensa</Link>

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