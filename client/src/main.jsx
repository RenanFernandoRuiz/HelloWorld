import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home.jsx";
import Contato from "./pages/Contatos.jsx";
import Cursos from "./pages/Cursos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <PaginaErro/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contato", element: <Contato /> },
      { path: "/sobre", element: <Contato /> },
      { path: "/desenvolvimento", element: <Contato /> },
      { path: "/cursos", element: <Cursos /> },
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
