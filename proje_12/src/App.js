
import React, {Component} from "react";
import './App.css';

import Gallery from  "./components/gallery/Gallery";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gallery />
      </div>
    );
  }
}

export default App;