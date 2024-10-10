import React from "react";
import "./cadastro.css";

const Cadastro = () => {
  return (
    <div className="Criar row">
      <div className="Títulos col-12">
        <h1>Hello World!</h1>
        <h3>Vamos começar! Faça seu cadastro para iniciarmos:</h3>
      </div>
      <div className="boxing col-6">
        <input type="text" id="nome" />
        <input type="text" id="email" />
        <input type="text" id="número" />
        <input type="text" id="senha" />

        <button type="submit">Cadastro</button>
      </div>
    </div>
  );
};

export default Cadastro;
