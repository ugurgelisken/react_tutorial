import React from 'react';
import './MenuButton.css';

const MenuButton = props => {

  return (
    <div className="MenuButton">
      <p onClick={ () => props.onClick(props.buttonData.path)} >{props.buttonData.buttonName}</p>
    </div>
  );

}

export default MenuButton;