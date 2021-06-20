import React from 'react';

const Footer = () => {

    const footerStyle = {
        color: "black",
        backgroundColor: "#00d8ff",
        textAlign: "center",
        padding: "10px",
        fontFamily: "system-ui",
        position: "absolute",
        bottom: "0px",
        left: "10px",
        right: "10px",
        bottom: "-6px"
      };

      
    return(
        <p style={footerStyle} >© Copyright 2020 by Uğur GELİŞKEN</p>    
    );
    
};

export default Footer;
