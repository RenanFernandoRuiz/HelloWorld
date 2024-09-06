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

const Cursos = () => {
  return (
    <div className="every p-0 col-12">
      <div className=" principal d-flex">
        <div className="barralatera bg-black col-2 text-white d-flex">
          <div className="img1 d-flex">
            <img src={image1} alt="1" href="#" />
            <p>HTML:5</p>
          </div>
          <div className="img2 d-flex">
            <img src={image2} alt="1" href="#" />
            <p>C#</p>
          </div>

          <div className="img3 d-flex">
            <img src={image3} alt="1" href="#" />
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
                <h2>HTML</h2>
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
              <img></img>
              <div className="texxtinho">
                <h2>JavaScript</h2>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------------------ */}
          <div className="allt d-flex col-10">
            <div className="C4 bg-success col-4 text-white d-flex justify-content-center align-items-center">
              <img></img>
              <div className="texxtinho">
                <h2>React</h2>
              </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------ */}
            <div className="C5 bg-danger col-4 text-white d-flex justify-content-center align-items-center">
              <img></img>
              <div className="texxtinho">
                <h2>C#</h2>
              </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------ */}
            <div className="C6 bg-warning col-4 text-white d-flex justify-content-center align-items-center">
              <img></img>
              <div className="texxtinho">
                <h2>Java</h2>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------------------ */}
          <div className="allt d-flex col-10">
            <div className="C7 bg-success col-4 text-white d-flex justify-content-center align-items-center">
              <img></img>
              <div className="texxtinho">
                <h2>Python</h2>
              </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------ */}
            <div className="C8 bg-danger col-4 text-white d-flex justify-content-center align-items-center">
              <img></img>
              <div className="texxtinho">
                <h2>PHP</h2>
              </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------ */}
            <div className="C9 bg-warning col-4 text-white d-flex justify-content-center align-items-center">
              <img></img>
              <div className="texxtinho">
                <h2>C++</h2>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------------------------ */}
        </div>
      </div>
    </div>
  );
};

export default Cursos;
