import { Outlet } from "react-router-dom";
import "./App.css";
import Container from "./components/Home/container/container";
import Footer from "./components/footer/footer";
import Geral from "./components/Home/geral/Geral";
import Header from "./components/header/header";
import Rest from "./components/Home/rest/Rest";

function App() {
  return (
    <div className="appsuper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
