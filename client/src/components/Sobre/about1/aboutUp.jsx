import "./aboutUp.css"
import {logo} from "../../../assets/logo.svg"

const aboutUp = () => {
    return (
        <div className="col-12 bg-info">
            <h2>Sobre o Jogo</h2>
            <div className="col-12">
            <div className="lefty col-6">
            <img src={logo} alt="Logo Hello World" />  
            <button>
                Acompanhe o jogo
            </button>
              </div> 
        <div className="rigthy col-6">
            <h2>
            Imagine um mundo onde aprender a programar é tão divertido quanto jogar seus games favoritos.  É exatamente isso que o nosso jogo propõe!
            Queremos transformar a programação em uma aventura épica. Nosso jogo te coloca no papel de um criador, capaz de dar vida a um mundo inteiro através do código. Você começa com um cenário básico e, à medida que avança nos níveis, desbloqueia ferramentas e conhecimentos para construir mundos cada vez mais complexos e personalizados.
            </h2>
        </div>
            </div>
        </div>
        
    );
    
}

export default  aboutUp