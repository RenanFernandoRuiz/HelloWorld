import "./container.css";
import quadro from "../../assets/quadro.jpg";
import image1 from "../../assets/image1.svg";
import image2 from "../../assets/image2.svg";
import image3 from "../../assets/image3.svg";
import image4 from "../../assets/image4.svg";
import image5 from "../../assets/image5.svg";
import image6 from "../../assets/image6.svg";
import image7 from "../../assets/image7.svg";
import image8 from "../../assets/image8.svg";
import image9 from "../../assets/image9.svg";

const Container = () => {
  return (
    //   <div className="all mt-0">
    //     <img src={quadro} alt="tela" />
    //     <h2>O jeito grátis, divertido e eficaz de aprender programação!</h2>
    //   </div>

    <div className="divMaster">
      <div className="row m-0 p-0">
        <div className="col  justify-content-start">
          <div className="row">
            <div className="d-flex col-lg-1 col-md-12 col-sm-12 sidebar">
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
            <div className="col-12 col-md-6 bg-success quadro">
              <img src={quadro} alt="tela" />
            </div>
            <div className="col-12 col-md bg-info jeito">
              <h2>
                O jeito grátis, divertido e eficaz de aprender programação!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
