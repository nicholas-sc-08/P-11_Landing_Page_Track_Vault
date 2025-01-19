import React from 'react'
import Banner from '../components/Banner'
import CTA_album from '../components/CTA_album'
import './Pagina_inicial.css'
import Eventos from '../components/Eventos'

function Pagina_inicial() {
  return (
    <div>
        
        <Banner/>
        <CTA_album/>
        <Eventos/>

    </div>
  )
}

export default Pagina_inicial