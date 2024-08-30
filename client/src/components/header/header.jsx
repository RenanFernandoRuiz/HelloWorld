import "./header.css";
import logo from "../../assets/logo.svg";
import brasil from "../../assets/brasil.svg";

function Header() {
  return (
    <header className="header row fixed-top">
      <nav className="d-flex justify-content-between">
        <div className="navtop">
          <img src={logo} alt="Logo Hello World" />

          <a href="#">Hello World</a>
          <a href="#">Cursos</a>
          <a href="#">Sobre</a>
          <a href="#">Desenvolvimento</a>
          <a href="#">Contato</a>
        </div>

        <div className="d-flex pe-5 gap-4">
          <div className="idioma">
            <a href="#">Idioma:</a>
            <img src={brasil} alt="Bandeira do Brasil" />
          </div>

          <div className="login d-flex align-items-center">
            <a className="btn" href="#">
              Login
            </a>{" "}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
