import "./App.css";
import Container from "./components/container/container";
import { Footer } from "./components/footer/footer";
import Geral from "./components/geral/Geral";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <Container />
      <Geral/>
      <Footer />
    </>
  );
}
export default App;
