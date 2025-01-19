import React from 'react';
import './Produtos.css';

function Produtos() {
  return (
    <div className='container_produtos'>
        
        <div>
            <h2>Produtos</h2>
        </div>

        <div className="alinhamento_container_imagens">

            <div className="container_imagens_produtos">

                <div className="container_imagens_a">

                    <img src="poster-3.jpg" alt="poster" />
                    <img src="record.jpg" alt="poster&disco" className='imagem_do_disco'/>

                </div>

                <div className="container_imagens_b">

                    <img src="camiseta.jpg" alt="camiseta" />

                </div>
            
            </div>

        </div>
    </div>
  )
}

export default Produtos