
import React, { useContext } from 'react';

import ThemeContext from "./../../../context/ThemeContext";

import './Header.css';

import DarkMode from "./../../tools/darkmode/DarkMode";

const Header = () => {
  
  const { theme } = useContext(ThemeContext);

  return (
    <div className={'Header-' + theme } >
      <h1 className={'title-' + theme } >Başlık</h1>
      <DarkMode />
    </div>
  );
}

export default Header;