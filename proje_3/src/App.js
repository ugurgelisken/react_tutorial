import React from 'react';
import './App.css';

import Menu from "./components/menu/Menu";
import Main from "./components/main/Main";

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch('./assets/menu.json'
    ).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Menü verileri yüklenemedi.')
      }
    })
      .then(data => {
        this.setState({
          menuData: data
        })
      } 
    );
  }


  render() {
    return (
      <div className="App">
        { this.state.menuData && <Menu menuData={this.state.menuData} /> }
        <Main text="Merhaba React!" title="Ana Sayfa" />
      </div>
    );
  }

}
