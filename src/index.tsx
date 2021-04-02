import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import About from "./categories/about/About";
import Contact from "./categories/contact/Contact";
import Galleries from "./categories/galleries/Galleries";
import Skills from "./categories/skills/Skills";

ReactDOM.render(
  <React.StrictMode>
    <About />
    <Skills />
    <Galleries />
    <Contact />
  </React.StrictMode>,
  document.getElementById("root")
);
