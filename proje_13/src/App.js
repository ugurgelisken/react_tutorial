import React, { useState } from "react";

import './App.css';

import Header from "./components/main/header/Header";
import Content from "./components/main/content/Content";
import Footer from "./components/main/footer/Footer";

import ThemeContext from "./context/ThemeContext";

function App() {

  const [ theme, setTheme ] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }} >
      <div className="App" >
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
