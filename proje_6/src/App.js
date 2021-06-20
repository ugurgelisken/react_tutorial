import React, { Component } from 'react';

import Render_1 from "./components/Render_1";
import Render_2 from "./components/Render_2";
import Render_3 from "./components/Render_3";
import Render_4 from "./components/Render_4";
import Render_5 from "./components/Render_5";
import Render_6 from "./components/Render_6";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      userRole: "super_admin"
    }
  }

  render() {
    return (
      <div>
        <Render_1 />
        <Render_2 />
        <Render_3 loggedIn={false} />
        <Render_4 loggedIn={true} />
        <Render_5 />
        <Render_6 {...this.state} />
      </div>
    );
  }
}

export default App;