import styles from "./header.module.css";
import logo from "../../assets/logo.svg";

function Header(){
    return(
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
           <a href="#">Idioma</a>
           </div>
            </div>

            
        </nav>
        </header>
    )
}

export default Header;