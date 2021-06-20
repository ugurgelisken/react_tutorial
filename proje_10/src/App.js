import React, { Component } from 'react';
import './App.css';

import Main from "./components/Main";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // Butonlara tıklanınca parametre değerini state'e aktaracak.
  switchComponent = type => {
    this.setState({ type });
  }

  /* Eğer yeni state değerindeki type ile var olan state'teki type değeri farklı ise true sonucunu verecek ve <App /> Component'i tekrar güncellenebilecek. */
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    return this.state.type !== nextState.type;
  }

  // <App /> Component'i güncellendiğinde...
  componentDidUpdate(prevProps, prevState) {
    console.log("<App/> güncellendi: ", prevProps, prevState)
  }

  /* Butonlara tıklandığında state.type'a aktarılan clock|date değerleri <Main /> Component'ine type prop'u ile aktarılıyor. */
  render() {
    return (
      <div className="App" >
        <button onClick={ () => this.switchComponent('clock') } >Saat</button>
        <button onClick={ () => this.switchComponent('date') } >Takvim</button>
        <Main type={this.state.type} />
      </div>
    )
  }
}