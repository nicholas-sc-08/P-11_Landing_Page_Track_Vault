import React from 'react';
import './Imprensa.css';
import { Link } from 'react-router-dom';
function Imprensa() {
  return (
    <div className='container_imprensa'>

        <h2>Imprensa</h2>

        <div className="container_row_a_imprensa">

            <div className="container_noticia_a_row_a">

                <span>11 de jul. de 2019</span>
                <h3>Novas datas do turnê</h3>
                <p>O verão está apenas começando, mas o Vandam, essa lenda do rock, já está fazendo todo mundo esperar o outono.</p>

                <Link>Saiba mais →</Link>
            </div>

            <div className="container_noticia_b_row_a">

                <span>21 de jun. de 2019</span>
                <h3>A banda que foi dos bares aos estádios</h3>
                <p>O Vandam começou como uma piada, mas, com o lançamento do último single, as coisas ficaram sérias.</p>

                <Link>Saiba mais →</Link>
            </div>

            <div className="container_noticia_c_row_a">

                <span>2 de mai. de 2019</span>
                <h3>Vandam fará show beneficente</h3>
                <p>“Temos a responsabilidade de sair da marginalidade e fazer alguma coisa”, conta Viv.</p>

                <Link>Saiba mais →</Link>
            </div>

        </div>

        <div className="container_row_b_imprensa">

            <div className="container_noticia_a_row_b">

                <span>11 de mar. de 2019</span>
                <h3>Vencendo na vida e na música</h3>
                <p>Vince e Viv, do Vandam, são mais que colegas de banda: são irmãos gêmeos. Conversamos com eles sobre como é trabalhar em família.</p>

                <Link>Saiba mais →</Link>
            </div>

            <div className="container_noticia_b_row_b">

                <span>11 de mar. de 2019</span>
                <h3>"Jail Time" foi usada em um filme indie</h3>
                <p>Além dos interesses musicais, o Vandam não esconde a paixão pelo cinema. Então, não é surpresa que uma das músicas deles faça parte da trilha sonora de uma das estreias mais esperadas do ano.</p>

                <Link>Saiba mais →</Link>
            </div>

            <div className="container_noticia_c_row_b">

                <span>11 de mar. de 2019</span>
                <h3>Vandam pelo mundo</h3>
                <p>Com uma nova gravadora e uma turnê internacional com 16 datas, a banda local preferida da região vai estourar no mundo todo.</p>

                <Link>Saiba mais →</Link>
            </div>

        </div>

    </div>
  )
}

export default Imprensa