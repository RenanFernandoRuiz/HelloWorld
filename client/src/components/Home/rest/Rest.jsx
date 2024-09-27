import "./rest.css";
import sim from "../../../assets/sim.svg";
import leptop from "../../../assets/leptop.svg";
import celular from "../../../assets/celular.svg";
import h2 from "../../../assets/h2.svg";


const Rest = () => {
  return (
    <div className="resto row flex-column">
      <div className="uno col-12 row ">
        <div className="yes  m-0 col-12 col-md-6">
          <img src={sim} alt="" />
        </div>
        <div className="restexto col-12 col-md-5">
          <h2>Grátis e Divertido</h2>
          <h3>
            Aprenda de forma criativa ideias e dicas para programação de um
            jogo! Nada melhor do que entender como funciona o seu jogo!
          </h3>
        </div>
      </div>

      <div className="duno col-12 row mt-5">
        <div className="no m-0 col-12 col-md-6 ">
          <img src={leptop} alt="" />
        </div>
        <div className="restexto col-12 col-md-5 ">
          <h3>Baseado e inspirado em jogos de todo o mundo!</h3>
        </div>




        <div id="desenvolvimento" className="Header col-12 justify-content-center align-items-center d-lg-none   ">
          <h1>ULTIMA NOTÍCIA:</h1>
        </div>

        <div className="fundo d-lg-none  ">
          <div className="cordefundo col-12 d-flex d-lg-none">
            <div className="containers col-10 d-lg-none">
            <img src={h2}></img>
            <div className="alinhar col d-lg-none ">
             
              <h2 >
                Os avatares peronalizados foram criados ,assim cada usuário
                poderá ter sua própria experiencia.(04/02/2026)
              </h2>
            </div>

            
         
            </div>


          </div>

          <div className="noticias">

            <h2>PARA MAIS NOTÍCIAS , ACESSE EM UM DISPOSITIVO MAIOR.</h2>
          </div>

        </div>
         
           
        
      


      </div>
      <div id="instalar" className="tre col-12 row ">
        <div className="simimg col-12 col-md-6">
          <img src={celular} alt="" />
        </div>
        <div className="restexto col-12 col-md-5">
          <h2>Aprenda de todos os lugares!</h2>
          <h3>
            Temos aplicativo disponivel para dispositivos moveis! Permitindo que
            vc realize as atividades e quizes de qualquer lugar que você
            estiver!
          </h3>
        </div>
        <button className="col-1">Instale nosso aplicativo!</button>
      </div>
    </div>
  );
};

export default Rest;
