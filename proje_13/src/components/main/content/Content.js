import './Content.css';

import React, { useContext } from 'react';
import ThemeContext from "./../../../context/ThemeContext";

const Content = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={'Content-' + theme } >
      <img className="background" src={ window.location.origin + (theme === 'light' ? '/assets/morning.jpg' : '/assets/night.jpg') } />
    </div>
  );
}

export default Content;