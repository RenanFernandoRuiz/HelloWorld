import "./dev.css";
import h2 from "../../assets/h2.svg";
import dev1 from "../../assets/dev1.svg";
import dev2 from "../../assets/dev2.svg";

const Dev = () => {
  return (
    <div className="gera col-12 ">
      <div className="Headev col-12 justify-content-center align-items-center">
        <ion-icon name="arrow-back-outline"></ion-icon>
        <h1>Desenvolvimento</h1>
      </div>
      <div className="fundingera">
        <div className="fundin col-12 d-flex">
          <div className="container col-10">
            <img src={h2}></img>
            <div className="direito col">
              <h1>DESENVOLVIDO PERSONALIZAÇÃO DE AVATAR:</h1>
              <h2>
                Os avatares peronalizados foram criados ,assim cada usuário
                poderá ter sua própria experiencia.(04/02/2026)
              </h2>
              <button>SAIBA MAIS</button>
            </div>
          </div>
        </div>
        <div className="fundin2 col-12">
          <div className="container col-10">
            <img src={dev1}></img>
            <div className="direito col">
              <h1>DESENVOLVIDO PERSONALIZAÇÃO DE AVATAR:</h1>
              <h2>
                Os avatares peronalizados foram criados ,assim cada usuário
                poderá ter sua própria experiencia.(04/02/2026)
              </h2>
              <button>SAIBA MAIS</button>
            </div>
          </div>
        </div>
        <div className="fundin3 col-12">
          <div className="container col-10">
            <img src={dev2}></img>
            <div className="direito col">
              <h1>DESENVOLVIDO PERSONALIZAÇÃO DE AVATAR:</h1>
              <h2>
                Os avatares peronalizados foram criados ,assim cada usuário
                poderá ter sua própria experiencia.(04/02/2026)
              </h2>
              <button>SAIBA MAIS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dev;
