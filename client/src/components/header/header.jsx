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
    { name: "Login", component: "/login" },
  ];
  return (
    <header className="header row fixed-top col-12 m-0 mb-0 ">
      <nav className="d-flex justify-content-between align-items-center ">
        <img src={logo} alt="Logo Hello World" />
        <div className="navtop col-md-6">
          {navigation.map((iten) => (
            <Link
              className="d-none d-lg-block"
              key={iten.name}
              to={iten.component}
            >
              {iten.name}
            </Link>
          ))}

          {/* <Link className="d-none d-lg-block" to={"/"}>
            Hello World
          </Link>
          <Link className="d-none d-lg-block" to={"/cursos"}>
            Cursos
          </Link>
          <Link className="d-none d-lg-block" to={"/sobre"}>
            Sobre
          </Link>
          <Link className="d-none d-lg-block" to={"/desenvolvimento"}>
            Desenvolvimento
          </Link>
          <Link className="d-none d-lg-block" to={"/contato"}>
            Contato
          </Link>{" "}
          */}
        </div>

        <div className="d-flex pe-5 gap-4">
          <div className="idioma">
            <a href="#">Idioma:</a>
            <img src={brasil} alt="Bandeira do Brasil" />
          </div>

          <div className="login d-flex align-items-center">
            <a className="btn" href="">
              Login
            </a>{" "}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
