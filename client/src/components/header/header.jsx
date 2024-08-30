import "./header.css";
import logo from "../../assets/logo.svg";
import brasil from "../../assets/brasil.svg";

function Header() {
  return (
    <header className="header row fixed-top col-12 m-0 mb-0 ">
      <nav className="d-flex justify-content-between align-items-center">
        <img src={logo} alt="Logo Hello World" />
        <div className="navtop col-md-6">
          <a className="d-none d-lg-block" href="#">
            Hello World
          </a>
          <a className="" href="#">
            Cursos
          </a>
          <a className="d-none d-lg-block" href="#">
            Sobre
          </a>
          <a className="" href="#">
            Desenvolvimento
          </a>
          <a className="d-none d-lg-block" href="#">
            Contato
          </a>
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
