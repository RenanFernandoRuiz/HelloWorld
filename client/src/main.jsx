import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contatos from "./pages/Contatos.jsx";
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Desenvolv from "./pages/Desenvolv.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <PaginaErro/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contato", element: <Contatos/> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/desenvolvimento", element: <Desenvolv /> },
      { path: "/cursos", element: <Contatos /> },
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
