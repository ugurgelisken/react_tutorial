import React from 'react';

import { uuid } from "./../utils/utils";

import ListItem from "./ListItem";

export default class List extends React.Component {
    
  render() {
  
    const cars = ["BMW", "Ford", "Mercedes"];

    return (
      <div>
        <p>Arabalar (List Component)</p>
        <ul>
          {  
            cars.map( car => {
              return( <ListItem key={uuid()} car={car} /> );
            })
          }
        </ul>
      </div>
    );
    
  }
}
