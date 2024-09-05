import "./rest.css";
import sim from "../../assets/sim.svg";
import leptop from "../../assets/leptop.svg";
import celular from "../../assets/celular.svg";

const Rest = () => {
  return (
    <div className="resto d-flex row ">
      <div className="restexto  col-5">
        <h2>Grátis e Divertido</h2>
        <h3>
          Aprenda de forma criativa ideias e dicas para programação de um jogo!
          Nada melhor do que entender como funciona o seu jogo!
        </h3>
      </div>
      <div className="sim  m-0 col-7">
        <img src={sim} alt="" />
      </div>

      <div className="sim m-0 col-7">
        <img src={leptop} alt="" />
      </div>
      <div className="restexto col-5">
        <h3>Baseado e inspirado em jogos de todo o mundo!</h3>
      </div>

      <div className="restexto col-5">
        <h2>Aprenda de todos os lugares!</h2>
        <h3>
          Temos aplicativo disponivel para dispositivos moveis! Permitindo que
          vc realize as atividades e quizes de qualquer lugar que vocÊ eestiver!
        </h3>
      </div>
      <div className="sim m-0 col-7">
        <img src={celular} alt="" />
        <button>Instale nosso aplicativo!</button>
      </div>
    </div>
  );
};

export default Rest;
