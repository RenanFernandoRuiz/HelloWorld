import "./header.css";
import logo from "../../assets/logo.svg";
import brasil from "../../assets/brasil.svg";
import { Link } from "react-router-dom";

function Header() {
  const navigation = [
    { name: "Hello World", component: "/" },
    { name: "Cursos", component: "/cursos" },
    { name: "Contato", component: "/contato" },
    { name: "Desenvolvimento", component: "/desenvolvimento" },
    { name: "Sobre", component: "/sobre" },
  ];

  const navigationPhone = [
    { name: "Hello World", component: "/" },
    { name: "Cursos", component: "#curso" },
    { name: "Contato", component: "#contato" },
    { name: "Desenvolvimento", component: "#desenvolvimento" },
    { name: "Instalar", component: "#instalar" },
  ];
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid p-0">
        <a className="navbar-brand" href="#">
          <img className="imgLogo" src={logo} alt="Logo Hello World" />
        </a>
        <button
          className="navbar-toggler fontLink"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div
          className="collapse navbar-collapse corFundo"
          id="navbarSupportedContent"
        >
          {/* smartphone */}
          <ul className="d-flex d-md-none navbar-nav me-auto mb-2 mb-lg-0 align-items-center gap-3">
            {navigationPhone.map((iten) => (
              <li className="nav-item">
                <a
                  href={iten.component}
                  className="nav-link fontLink"
                  key={iten.name}
                >
                  {iten.name}
                </a>
              </li>
            ))}
            <div className="idioma">
              <a className="fontLink" href="#">
                Idioma:
              </a>
              <img src={brasil} alt="Bandeira do Brasil" />
            </div>
          </ul>

          {/* Desktop */}
          <ul className="d-none d-md-flex navbar-nav me-auto mb-2 mb-lg-0 align-items-center gap-3">
            {navigation.map((iten) => (
              <li className="nav-item">
                <Link
                  className="nav-link fontLink"
                  key={iten.name}
                  to={iten.component}
                >
                  {iten.name}
                </Link>
              </li>
            ))}
            <div className="idioma">
              <a className="fontLink" href="#">
                Idioma:
              </a>
              <img src={brasil} alt="Bandeira do Brasil" />
            </div>
          </ul>
        </div>
        <div className="login d-flex align-items-center">
          <a className="btn" href="/login">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
