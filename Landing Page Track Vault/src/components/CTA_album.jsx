import React from 'react'
import './CTA_album.css'
function CTA_album() {
  return (
    <div className='container_cta_album'>

        <div className="container_texto_album">

            <h1>Novo álbum disponível em vinil a partir de 15 de junho.</h1>
            <p>Inclui “Dummy,” e as faixas “Jail Time” e “Mexican Vacation”, que não estavam no álbum. Tiragem limitada de 500 exemplares em vinil de 180 gramas. Compre o seu antes que acabe!</p>

            <button>Ouça Agora</button>

        </div>

        <div className="container_imagem_algum">

            <img src="record.jpg" alt="Album" />

        </div>

    </div>
  )
}

export default CTA_album