import React, { useState } from "react";
import axios from "axios";
import "./cadastro.css"; // Certifique-se de que o caminho do CSS está correto
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // Hook para redirecionar

  const handleCreateAccount = async (e) => {
    e.preventDefault(); // Prevenir comportamento padrão do submit

    try {
      const response = await axios.post(
        "https://www.apihelloworld.somee.com/user/register",  // Rota da API
        {
          email,
          password
        }
      );

      if (response.status === 201) {
        // Se a criação da conta foi bem-sucedida
        setSuccessMessage("Conta criada com sucesso!");
        setErrorMessage("");
        setEmail("");
        setPassword("");

        navigate("/login"); // Redirecionar para a página de login
      }
    } catch (error) {
      console.error("Erro ao criar conta:", error);
      setErrorMessage(
        "Ocorreu um erro. Verifique suas credenciais e tente novamente."
      );
    }
  };

  return (
    <div className="Criar row">
      <div className="Títulos col-12">
        <h1>Hello World!</h1>
        <h3>Vamos começar! Faça seu cadastro para iniciarmos:</h3>
      </div>
      <div className="boxing col-6">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleCreateAccount}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            id="senha"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Cadastro</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
