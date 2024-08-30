import "./rest.css";
import sim from "../../assets/sim.svg";

const Rest = () => {
  return (
    <div className="resto bg-info d-flex row ">
      <div className="restexto bg-warning col-5">
        <h2>Grátis e Divertido</h2>
        <h3>
          Aprenda de forma criativa ideias e dicas para programação de um jogo!
          Nada melhor do que entender como funciona o seu jogo!
        </h3>
      </div>
      <div className="sim bg-black m-0 col-7">
        <img src={sim} alt="" />
      </div>
    </div>
  );
};

export default Rest;
