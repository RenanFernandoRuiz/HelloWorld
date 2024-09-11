import "./toplog.css"
import {logo} from "../../assets/logo.svg"

const Toplog = () => {
    return (
        <div className="headerlog col-12 bg-info">
            <div className="imagin col-12">
<img src={logo} alt="logolá"></img>
            </div>
<div className="texto col-12">
    <h1>Hello World</h1>
    <h2>Vamos começar! Faça seu cadastro para iniciarmos:</h2>
</div>
<div className="boxlog col-6 ">
  <h1>FORMULÁRIO DE CONTATO</h1>
  <div className="log">
  <textarea className="T1L"/>
  <textarea className="T2L"/>
  <textarea className="T3L"/>
  <textarea className="T4L"/>
  </div>
  <button>
    cadastrar
  </button>
  </div>
        </div>
        
    );
    
}

export default  Toplog