import "./App.css";
import Container from "./components/container/container";

import Geral from "./components/geral/Geral";
import Header from "./components/header/header";
import Rest from "./components/rest/Rest";

function App() {
  return (
    <>
      <Header />
      <Container />
      <Geral />
      <Rest />
    </>
  );
}
export default App;
