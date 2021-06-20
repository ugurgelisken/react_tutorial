

import React, { Component } from 'react';
import { Link} from 'react-router-dom';


import './Main.css';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { searchTXT: "" };
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="Main" >
                <input type="text" name="searchTXT" value={this.state.searchTXT} onChange={this.inputChange} /><br />
                <Link to={{
                        pathname: "/products",
                        state: { ...this.state }
                    }}
                    >
                    <button>Ara</button>
                </Link>
                
            </div>
        );
    }
}

