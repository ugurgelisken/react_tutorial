import './Footer.css';

import React, { useContext } from 'react';

import ThemeContext from "./../../../context/ThemeContext";

const Footer = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={'Footer-' + theme }>
      react | ugurgelisken.com
    </div>
  );
}

export default Footer;