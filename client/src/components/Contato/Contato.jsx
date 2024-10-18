import React, { useState, useEffect } from "react";
import "./contato.css";
import axios from "axios";
import logo from "/img/logo.svg";

const AppContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await axios.post(
        "https://www.apihelloworld.somee.com/api/Appcontacts",
        {
          name,
          email,
          mensagem,
        }
      );

      if (response.status === 201) {
        setSubmissionStatus("success");
        setName("");
        setEmail("");
        setMensagem("");
        onSubmit(); // Chama a função para atualizar a lista de contatos
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cont">
      <h2 className="contact1">Contato</h2>

      <div className="form-group col-10">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group col-10">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group2 col-8">
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
      {submissionStatus === "success" && (
        <p className="success-message">Mensagem enviada com sucesso!</p>
      )}
      {submissionStatus === "error" && (
        <p className="error-message">Ocorreu um erro ao enviar a mensagem.</p>
      )}
    </form>
  );
};

const Contato = () => {
  const [appcontact, setAppcontact] = useState([]);

  const fetchAppcontact = async () => {
    try {
      const response = await axios.get(
        "https://www.apihelloworld.somee.com/api/Appcontacts"
      );
      setAppcontact(response.data);
    } catch (error) {
      console.error("Erro ao buscar contato:", error);
    }
  };

  useEffect(() => {
    fetchAppcontact();
  }, []);

  return (
    <div>
      <div className="titulo col-12 m-0 mb-0">
        <p>CONTATO</p>
      </div>
      <div className="retas d-flex ">
        <div className="imagem col-6 m-0 ">
          <img src={logo} alt="Logo Hello World" />
          <h1>SIGA-NOS</h1>
          <div className="iconis d-flex">
            <a
              href="https://github.com/RenanFernandoRuiz/HelloWorld.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a
              href="https://github.com/RenanFernandoRuiz/HelloWorld.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a
              href="https://github.com/RenanFernandoRuiz/HelloWorld.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a
              href="https://github.com/RenanFernandoRuiz/HelloWorld.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>
        <div className="box col-6 ">
          <h1>FORMULÁRIO DE CONTATO</h1>
          <AppContactForm onSubmit={fetchAppcontact} />
        </div>
      </div>
    </div>
  );
};

export default Contato;
