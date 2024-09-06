import React from "react";
import "./contato.css"
import logo from "../assets/logo.svg";

const Contato = () => {
  return <div>
    <div className="titulo col-12 col-12 m-0 mb-0">
    <p>
      CONTATO
    </p>
    </div>
    <div className="retas d-flex ">
    <div className="imagem col-6 m-0 ">
    <img src={logo} alt="Logo Hello World" />
    <h1>SIGA-NOS</h1>
    <div className="iconis d-flex">

    <a href="https://github.com/RenanFernandoRuiz/HelloWorld.git"
          target="_blank"
          rel="noopener noreferrer">
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a>

        <a href="https://github.com/RenanFernandoRuiz/HelloWorld.git"
          target="_blank"
          rel="noopener noreferrer">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>

        <a href="https://github.com/RenanFernandoRuiz/HelloWorld.git"
          target="_blank"
          rel="noopener noreferrer">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>

        <a href="https://github.com/RenanFernandoRuiz/HelloWorld.git"
          target="_blank"
          rel="noopener noreferrer">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
    </div>
    </div>
<div className="box col-6 ">
  <h1>FORMULÁRIO DE CONTATO</h1>
  <div className="cont ">
  <textarea className="T1"/>
  <textarea className="T2"/>
  <textarea className="T3"/>
  </div>
  <button>
    Enviar
  </button>
</div>
    </div>
  </div>;
  
};

export default Contato;
