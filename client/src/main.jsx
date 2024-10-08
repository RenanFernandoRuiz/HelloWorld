import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Contatos from "./pages/Contatos.jsx";
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Desenvolv from "./pages/Desenvolv.jsx";
import Curso from "./pages/Curso.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./components/Cadastro/cadastro.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <PaginaErro/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contato", element: <Contatos /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/desenvolvimento", element: <Desenvolv /> },
      { path: "/cursos", element: <Curso /> },
      { path: "/login", element: <Login /> },
      { path: "/Cadastro", element: <Cadastro /> },
      // { path: "contact", element: <Contact /> },
      // { path: "contact/:id", element: <ContactDetails /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
