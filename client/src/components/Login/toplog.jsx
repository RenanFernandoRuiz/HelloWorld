import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./toplog.css";
import logo from "/img/logo.svg";

const Toplog = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://www.apihelloworld.somee.com/user/login?useCookies=false&useSessionCookies=false",
        { email, password }
      );

      if (response.status !== 200) {
        throw new Error(`Login failed with status ${response.status}`);
      }

      const data = response.data; // Ajustado para o Axios

      if (data.token) {
        setMessage("Login successful!");
        setIsLoggedIn(true);
        // Você pode armazenar o token em localStorage ou context
        navigate("/dashboard"); // Redirecionar após login bem-sucedido
      } 
      else {
        setMessage(data.error || "Login failed!");
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="headerlog col-12 col-sm-12">
      <div className="imagin col-12 col-sm-12">
        <img src={logo} alt="logolá" className="col-3 col-sm-3" />
      </div>
      <div className="guto col-12 col-sm-12">
        <div className="texto col-12 col-sm-12">
          <h1>Hello World</h1>
          <h2>Vamos começar! Faça seu cadastro para iniciarmos:</h2>
        </div>
        <div className="boxlog col-6 col-sm-6">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          {message && <p className="message">{message}</p>}
          {!isLoggedIn && <Link className="cadastro1" to="/Cadastro">Cadastro</Link>}
        </div>
      </div>
    </div>
  );
};

export default Toplog;
