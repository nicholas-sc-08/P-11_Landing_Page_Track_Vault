import React, { useContext } from 'react';
import './Eventos.css';
import { GlobalContext } from '../context/GlobalContext';
function Eventos() {
  
  const {proximos_eventos_ref} = useContext(GlobalContext);
  
    return (
    <div className='container_eventos' ref={proximos_eventos_ref}>

        <h2>Próximos Eventos</h2>

        <div className="container_eventos_cards">

            <div className="container_evento_a">

                <p>Quinta-feira, 15 de maio</p>
                <h3>Seasons Theatre</h3>
                <p className='container_evento_hora_a'>Houston, TX 20h</p>

            </div>

            <div className="container_evento_b">

                <p>Quinta-feira, 16 de maio</p>
                <h3>Hangout Theatre</h3>
                <p className='container_evento_hora_b'>Birmingham, AL 22h</p>

            </div>

            <div className="container_evento_c">

                <p>Domingo, 19 de maio</p>
                <h3>Industry Theatre</h3>
                <p className='container_evento_hora_c'>Brooklyn, NY 21h</p>

            </div>

            <div className="container_evento_d">

                <p>Domingo, 2 de junho</p>
                <h3>Neptune Theatre</h3>
                <p className='container_evento_hora_d'>Filadélfia, PA 20h</p>

            </div>

        </div>

    </div>
  )
}

export default Eventos