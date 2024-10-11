import { Link } from "react-router-dom";
import "./geral.css";

const Geral = () => {
  return (
    <div className="tudo">
      <div className="sla flex-column flex-md-row mt-2 mt-md-1">
        <Link to="/login">
          <button>Já tenho uma conta</button>
        </Link>

        <div className="button">
          <Link to="/Cadastro">
            <button>COMECE AGORA!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Geral;
