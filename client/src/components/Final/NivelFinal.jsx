
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NivelFinal.css";

const NivelFinal = () => {
  return (
    <div className="alldnv col-12">
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
      <section className="level-info  col-8">
        <h1>NÍVEL: COMPLETO!</h1>
        <div className="levelbar col">
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar">100%</div>
            </div>
          </div>
        <div className="level-status">
          <div className="octopus-icon">
            <p>HTML5.html</p>
            <p>Muito bem! Veremos como foi!</p>
          </div>
        </div>
        <div className="level-details">
          <p>TÍTULO:</p>
          <p>PONTOS:</p>
          <p>CURSO:</p>
        </div>
        <div className="actions">
          <button className="start-btn">INÍCIO</button>
          <button className="next-btn">PRÓXIMO DESAFIO</button>
        </div>
      </section>
    </div>
  );
};

export default NivelFinal;
