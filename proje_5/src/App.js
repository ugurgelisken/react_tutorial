import React from 'react';

import { uuid } from "./utils/utils";

import List from "./list/List";

import ListWorkers from "./list/ListWorkers";

export default class App extends React.Component {

  fruits = ["Elma", "Armut", "Portakal"];
    
  render() {
  
    return (
      <div>
        <p>Meyveler</p>
        <ul>
          {  
            this.fruits.filter(name => name.includes('a')).map( fruit => {
              return( <li key={uuid()}>{fruit}</li> );
            })
          }
        </ul>
        <List />
        <ListWorkers />
      </div>
    );
    
  }
}
