import "./footer.css";

const Footer = () => {
  return (
    <div className="pe col-12 d-flex justify-content-center">
      <h3>Problemas? Contate-nos:</h3>
      <div>
        <h3>helloworld@gmail.com</h3>
        <h3>(14) 4002-8922 </h3>
      </div>
      <div className="logo">
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

     

      <h3>#helloworld</h3>
    </div>
  );
};
export default Footer;
