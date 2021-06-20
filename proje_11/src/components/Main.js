import React, { Component } from 'react';

import $ from "jquery";
// import { findDOMNode } from "react-dom";

import { ToggleArea } from "./ToggleArea";
import './Main.css';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.searchText = React.createRef();
        this.toogleArea = React.createRef();
    }

    componentDidMount() {
        this.searchText.current.focus();
    }

    /*
    handleToggle = () => {
        let el = findDOMNode(this.refs.toggleArea);
        $(el).slideToggle();
    };
    */

    handleToggle = () => {
        $(this.toogleArea.current).slideToggle();
    };


    render() {
        return (
            <div className="Main">
                <input type="seach" ref={this.searchText} placeholder="Ara..." />
                <ToggleArea ref={this.toogleArea} text="Aradığınız her şeyi bulabilirsiniz." />
                <div className="toggle-button" onClick={this.handleToggle} onLoad={ () => this.handleToggle() } >
                    <p>&#x21C5;</p>
                </div>
            </div>
        );
    }
}