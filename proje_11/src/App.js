import React, { Component } from 'react';
import Main from "./components/Main";
import BackgroundVideo from "./components/BackgroundVideo";

import './App.css';

export default class App extends Component {
  
    render() {
        return (
            <div className="App">
                <Main />
                <BackgroundVideo />
            </div>
        );
    }
}