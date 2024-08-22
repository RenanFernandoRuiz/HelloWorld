import styles from "./header.module.css";
import logo from "../../assets/logo.svg";
import brasil from "../../assets/brasil.svg";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.navtop}>
          <img src={logo} alt="Logo Hello World" />

          <a href="#">Hello World</a>
          <a href="#">Cursos</a>
          <a href="#">Sobre</a>
          <a href="#">Desenvolvimento</a>
          <a href="#">Contato</a>

          <div className={styles.idioma}>
            <a href="#">Idioma:</a>
            <img src={brasil} alt="Bandeira do Brasil" />
          </div>

          <div className={styles.login}>
            <button>
              <a href="#">Login</a>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
