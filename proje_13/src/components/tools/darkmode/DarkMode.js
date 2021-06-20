
import React, { useContext } from 'react';

import ThemeContext from "./../../../context/ThemeContext";

import './DarkMode.css';

const DarkMode = () => {

  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    switch (theme) {
      case 'dark':
        setTheme('light')
        break;
      case 'light':
        setTheme('dark')
        break;
    }
  }

  return (
    <div className="DarkMode" >
      <label className="switch" onChange={toggleTheme} >
        <input type="checkbox" defaultChecked={theme === 'dark' ? true : false} />
        <span className="slider round" ></span>
      </label>
    </div>
  );
}

export default DarkMode;