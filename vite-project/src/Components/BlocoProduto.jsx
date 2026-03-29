import "./BlocoProduto.css";
import { useState } from "react";
import sinalMais from "../img/maiis.jpg";
import sinalMenos from "../img/menoos.jpg";
import lixeira from "../img/lixeira.png";


function Card() {

    const [contador, setContador] = useState(0);


    function aumentar() {
        setContador(contador + 1)
    };
    function diminuir() {
        if (contador > 0) {
            setContador(contador - 1)
        }
    };

    return (
        <>

            <div className="blocoProduto">
                <div className="image">

                </div>
                <div className="infoProduto">
                    <div className="nomeProduto">
                        <span className="spanNome">
                            Nome Produto
                        </span>
                        <span className="spanTamanho">
                            Tam: 42 • Cor
                        </span>
                    </div>
                </div>

            </div>

            <div className="botaoQtdeProduto">

                <button className="botaoDiminuirQtd" onClick={diminuir}>
                    <img src={sinalMenos}/>
                </button>
                <span className="qtdProdutos">{contador}

                </span>

                <button className="botaoAumentarQtd" onClick={aumentar}>
                    <img src={sinalMais}/>
                </button>
            </div>

            <div className="botaoLixeira">
               <button>
                    <img src={lixeira}/>
               </button>
            </div>

        </>
    )
}

export { Card };