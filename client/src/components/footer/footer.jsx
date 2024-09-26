import "./footer.css";

const Footer = () => {
  return (
    <footer className="">
      <div className="col-12 w-100 pez d-flex justify-content-center align-items-center">
        <div className="ttest d-flex flex-column flex-md-row col-6 col-md-4 align-content-center">
          <h3 className="escrita  m-3">Problemas? Contate-nos:</h3>
          <div className="m-lg-3">
            <h3 className="escrita1 ">helloworld@gmail.com</h3>
            <h3 className="escrita2 ">(14) 4002-8922 </h3>
          </div>
        </div>
        <div className="logo col-6 m-0 col-md-4 m-lg-3 d-flex ">
          <a
            href="https://github.com/RenanFernandoRuiz/HelloWorld.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
        </div>

        <h3 className=" hashtag d-none d-lg-block m-lg-3 ">#helloworld</h3>
      </div>
    </footer>
  );
};
export default Footer;
