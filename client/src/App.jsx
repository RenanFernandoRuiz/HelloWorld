import "./App.css";
import Container from "./components/container/container";
import { Footer } from "./components/footer/footer";
import Geral from "./components/geral/Geral";
import Header from "./components/header/header";
import Rest from "./components/rest/Rest";

function App() {
  return (
    <>
      <Header />
      <Container />
      <Geral/>
      <Rest/>
      <Footer />
    </>
  );
}
export default App;
