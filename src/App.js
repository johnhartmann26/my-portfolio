// base dependencies
import React from "react";
import "./App.css";
// components
import Header from "./components/Header";
import Splash from "./components/Splash";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <Header />
      <Splash />
      <Projects />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
