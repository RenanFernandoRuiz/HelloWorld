import "./container.css";
import quadro from "/img/quadro.jpg";
import image1 from "/img/image1.svg";
import image2 from "/img/image2.svg";
import image3 from "/img/image3.svg";
import image4 from "/img/image4.svg";
import image5 from "/img/image5.svg";
import image6 from "/img/image6.svg";
import image7 from "/img/image7.svg";
import image8 from "/img/image8.svg";
import image9 from "/img/image9.svg";
import Geral from "../geral/Geral";

const Container = () => {
  return (
    //   <div className="all mt-0">
    //     <img src={quadro} alt="tela" />
    //     <h2>O jeito grátis, divertido e eficaz de aprender programação!</h2>
    //   </div>

    <div className="divMaster row m-0 p-0">
      <div className="row flex-md-row flex-column-reverse">
        <div className="d-flex flex-row flex-md-column col-lg-1 sidebar overflow-x-scroll">
          <img src={image1} alt="1" href="#" />
          <img src={image2} alt="2" href="#" />
          <img src={image3} alt="3" href="#" />
          <img src={image4} alt="4" href="#" />
          <img src={image5} alt="5" href="#" />
          <img src={image6} alt="6" href="#" />
          <img src={image7} alt="7" href="#" />
          <img src={image8} alt="8" href="#" />
          <img src={image9} alt="9" href="#" />
        </div>
        <div className="col-12 col-md-11 row m-0 p-0 pt-5 pt-md-0 justify-content-center align-items-center">
          <div className="col-12 col-md-6 quadro">
            <img src={quadro} alt="tela" />
          </div>
          <div className="col-12 col-md-5  jeito">
            <h2>O jeito grátis, divertido e eficaz de aprender programação!</h2>
          </div>
          <div className="col-12 pb-4 pb-md-0">
            <Geral />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
