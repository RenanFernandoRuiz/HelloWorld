import React from "react";
import "./Cursos.css";
import image1 from "/img/image1.svg";
import image2 from "/img/image2.svg";
import image3 from "/img/image3.svg";
import image4 from "/img/image4.svg";
import image5 from "/img/image5.svg";
import image6 from "/img/image6.svg";
import image7 from "/img/image7.svg";
import image8 from "/img/image8.svg";
import image9 from "/img/image9.svg";
import html from "/img/html.svg";
import css from "/img/css.svg";
import javascript from "/img/javascript.svg";
import cmais1 from "/img/cmais1.svg";
import csharp1 from "/img/csharp1.svg";
import java1 from "/img/java1.svg";
import php1 from "/img/php1.svg";
import python2 from "/img/python2.svg";
import react1 from "/img/react1.svg";
import { Link } from "react-router-dom";

const Cursos = () => {
  return (
    <div className="every p-0 col-12">
      <div className=" principal d-flex">
        <div className="barralatera col-2 text-white d-flex">
          <div className="img1 d-flex">
            <img src={image1} alt="1" href="#" />
            <Link to="/Jogo1">
              <p>HTML:5</p>
            </Link>
          </div>
          <div className="img2 d-flex">
            <img src={image2} alt="2" href="#" />
            <p>C#</p>
          </div>

          <div className="img3 d-flex">
            <img src={image3} alt="3" href="#" />
            <p>JavaScript</p>
          </div>

          <div className="img4 d-flex">
            <img src={image4} alt="1" href="#" />
            <p>JSX</p>
          </div>

          <div className="img5 d-flex">
            <img src={image5} alt="1" href="#" />
            <p>Java</p>
          </div>

          <div className="img6 d-flex">
            <img src={image6} alt="1" href="#" />
            <p>Python</p>
          </div>

          <div className="img7 d-flex">
            <img src={image7} alt="1" href="#" />
            <p>CSS</p>
          </div>

          <div className="img8 d-flex">
            <img src={image8} alt="1" href="#" />
            <p>PHP</p>
          </div>

          <div className="img9 d-flex">
            <img src={image9} alt="1" href="#" />
            <p>C++</p>
          </div>
          <div className="Lingua">
            <p>Linguagens</p>
          </div>
        </div>
        <div className="col-10">
          <div className="allt d-flex col-10">
            <div className="C1 bg-success col-4 text-white d-flex justify-content-center align-items-center">
              <img src={html} />
              <div className="texxtinho">
                <Link to="/Jogo1">
                  <h2>HTML</h2>
                </Link>
                <h4> Linguagem de marcação para estruturação de páginas web</h4>
              </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------ */}
            <div className="C2 bg-danger col-4 text-white d-flex justify-content-center align-items-center">
              <img src={css} />
              <div className="texxtinho">
                <h2>CSS</h2>
                <h4>
                  {" "}
                  Folhas de estilo para design e apresentação visual de páginas
                  web
                </h4>
              </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------ */}
            <div className="C3 bg-warning col-4 text-white d-flex justify-content-center align-items-center">
              <img src={javascript} />
              <div className="texxtinho">
                <h2>JavaScript</h2>
              </div>
            </div>
          </div>
          <div className="g-0">
            {/* ------------------------------------------------------------------------------------------------------ */}
            <div className="am d-flex col-10">
              <img className="umm" src={csharp1} alt="" />
              {/* ------------------------------------------------------------------------------------------------------ */}
              <img src={react1} alt="" />
              {/* ------------------------------------------------------------------------------------------------------ */}
              <img src={java1} alt="" />
            </div>
            {/* ------------------------------------------------------------------------------------------------------ */}
            <div className="em d-flex col-10">
              <img className="doins" src={python2} alt="" />
              {/* ------------------------------------------------------------------------------------------------------ */}
              <img src={php1} alt="" />
              {/* ------------------------------------------------------------------------------------------------------ */}
              <img src={cmais1} alt="" />
            </div>
            {/* ------------------------------------------------------------------------------------------------------ */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
