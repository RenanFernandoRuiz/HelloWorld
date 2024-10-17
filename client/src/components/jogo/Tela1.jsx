import React, { useState } from "react";
import image1 from "/img/image1.svg";
import image2 from "/img/image2.svg";
import image3 from "/img/image3.svg";
import image4 from "/img/image4.svg";
import image5 from "/img/image5.svg";
import image6 from "/img/image6.svg";
import image7 from "/img/image7.svg";
import image8 from "/img/image8.svg";
import image9 from "/img/image9.svg";
import telahtml from "../../assets/telahtml.svg";
import polvo from "../../assets/polvo.svg";
import barrahtml5 from "../../assets/barrahtml5.svg";
import fundohtml from "../../assets/fundohtml.svg";
import { Link, Navigate, replace, useNavigate } from "react-router-dom";
import "./Tela1.css";

const Tela1 = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [acerto, setAcerto] = useState(0);
  const navigate = useNavigate();
  const [isDisabled1, setIsDisabled1] = useState(false);
  const [isDisabled2, setIsDisabled2] = useState(false);

  const handleInputChange = (event) => {
    const valor = event.target.value;
    setInputValue(valor);
    if (valor === "function") {
      setAcerto(acerto + 1);
      setIsDisabled1(true);
    }
  };

  const handleInputChange2 = (event) => {
    const valor = event.target.value;
    setInputValue2(valor);
    if (valor === "button") {
      setAcerto(acerto + 1);
      setIsDisabled2(true);
    }
  };

  const handleGame = () => {
    const userData = {
      userId: null,
      nickName: "Usuário",
      level: 1,
      acerto: acerto,
    };

    acerto > 0 && navigate("/Jogo2", { state: userData });
    // acerto > 0 && navigate("/Jogo2", replace("/"));
  };

  return (
    <div className="qeu  row-cols-12 d-flex">
      <div className="barralatera col-2 text-white d-flex">
        <div className="img1 d-flex">
          <img src={image1} alt="1" href="#" />
          <Link to="/Jogo1">
            <p>HTML:5</p>
          </Link>
        </div>
        <div className="img2 d-flex">
          <img src={image2} alt="2" href="#" />
          <p>C#</p>
        </div>

        <div className="img3 d-flex">
          <img src={image3} alt="3" href="#" />
          <p>JavaScript</p>
        </div>

        <div className="img4 d-flex">
          <img src={image4} alt="1" href="#" />
          <p>JSX</p>
        </div>

        <div className="img5 d-flex">
          <img src={image5} alt="1" href="#" />
          <p>Java</p>
        </div>

        <div className="img6 d-flex">
          <img src={image6} alt="1" href="#" />
          <p>Python</p>
        </div>

        <div className="img7 d-flex">
          <img src={image7} alt="1" href="#" />
          <p>CSS</p>
        </div>

        <div className="img8 d-flex">
          <img src={image8} alt="1" href="#" />
          <p>PHP</p>
        </div>

        <div className="img9 d-flex">
          <img src={image9} alt="1" href="#" />
          <p>C++</p>
        </div>
        <div className="Lingua">
          <p>Linguagens</p>
        </div>
      </div>
      <div className="bababoe col-10">
        <div className="level col-10 d-flex flex-column">
          <h2>NÍVEL:VARIÁVEL</h2>
          <div className="levelbar col">
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar">0%</div>
            </div>
          </div>
        </div>
        <div className="geralhtml d-flex">
          <img className="imguno" src={polvo} alt="" />
          <div className="questoeshtml">
            <div className="imgduno">
              <img src={barrahtml5} alt="" />
            </div>
            <div className="imgtres">
              function WellDone() {"{"} return &lt;button&gt;Muito
              bem!&lt;/button&gt; {"}"}
            </div>
          </div>
        </div>
        <div className="resro col-6">
          <h2>
            Essa função , cria um botão , dizendo “Muito bem!” Vamos tentar
            replicar? Escreva no prompt abaixo as partes faltando:
          </h2>
        </div>
        <div className="geralhtml2 d-flex">
          <img className="imguno2" src={polvo} alt="" />
          <div className="questoeshtml2">
            <div className="imgduno2">
              <img src={barrahtml5} alt="" />
            </div>
            <div className="imgtres2">
              <input
                type="text"
                disabled={isDisabled1}
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Digite uma palavra"
              />
              <h2>WellDone() {"{"} return</h2>
              <input
                type="text"
                disabled={isDisabled2}
                value={inputValue2}
                onChange={handleInputChange2}
                placeholder="Digite uma palavra"
              />
              <h2>&lt;button&gt;Muito bem!&lt;/button&gt; {"}"}</h2>
            </div>

            <button className="butao" onClick={handleGame}>
              {" "}
              MUITO BEM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tela1;
