import React from 'react';
import './Main.css';

const Main = props => {

  document.title = props.title;

  return (
    <div className="Main">
      <p>{props.text}</p>
    </div>
  );

}

export default Main;