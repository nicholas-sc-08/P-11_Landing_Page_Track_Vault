import React from 'react';
import './Area_cadastro.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Area_cadastro() {
  
  const lidar_com_envio = e => {

    e.preventDefault();

    set_email(``);

  };

  const [email, set_email] = useState(``);
  
    return (
    <div className='container_cadadstro'>

        <p>Cadastre seu endereço de e-mail para receber novidades e atualizações.</p>

        <form className='container_formulario' onSubmit={lidar_com_envio}>

            <input type="email" required placeholder='Endereço de Email' value={email} onChange={e => set_email(e.target.value)}/>
            <button type='submit'>Cadastre-se</button>

        </form>

        <span>Respeitamos sua privcidade.</span>

        <Link to='https://github.com/nicholas-sc-08'>Desenvolvido por Nicholas Serencovich Carvalho</Link>

    </div>
  )
}

export default Area_cadastro