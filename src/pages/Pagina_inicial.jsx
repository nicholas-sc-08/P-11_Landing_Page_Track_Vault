import React, { useCallback, useContext } from 'react';
import Banner from '../components/Banner';
import CTA_album from '../components/CTA_album';
import './Pagina_inicial.css';
import Eventos from '../components/Eventos';
import Produtos from '../components/Produtos';
import Imprensa from '../components/Imprensa';
import Area_cadastro from '../components/Area_cadastro';
import Footer from '../components/Footer';
import { GlobalContext } from '../context/GlobalContext';

function Pagina_inicial() {
  
  return (
    <div>
        
        <Banner/>
        <CTA_album/>
        <Eventos/>
        <Produtos/>
        <Imprensa/>
        <Area_cadastro/>
        <Footer/>

    </div>
  )
}

export default Pagina_inicial