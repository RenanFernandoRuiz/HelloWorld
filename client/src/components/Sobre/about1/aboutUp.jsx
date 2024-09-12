import "./aboutUp.css";
import logo from "../../../assets/logo.svg";
const AboutUp = () => {
  return (
    <div className="col-12 batata d-flex flex-column">
      <div className="title">
        <h1>SOBRE O JOGO</h1>
      </div>
      <div className="ft">
        <div className="ff">
          <div className="tuudo col">
            <div className="lefty col ">
              <img src={logo} alt="Logo Hello World" />
              <button>
                <h3>Acompanhe o jogo!</h3>
              </button>
            </div>
            <div className="textooo col">
              <h2>
                Imagine um mundo onde aprender a programar é tão divertido
                quanto jogar seus games favoritos. É exatamente isso que o nosso
                jogo propõe! Queremos transformar a programação em uma aventura
                épica. Nosso jogo te coloca no papel de um criador, capaz de dar
                vida a um mundo inteiro através do código. Você começa com um
                cenário básico e, à medida que avança nos níveis, desbloqueia
                ferramentas e conhecimentos para construir mundos cada vez mais
                complexos e personalizados.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUp;
