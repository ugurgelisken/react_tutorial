import React, { Component } from 'react';

import './Header.sass';

import DateTime from './../date-time/DateTime';

import Logo from '../../images/react-logo.png';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            projeNo: "Proje 1"
        }
    }

    render() {
        return (
            <div className="header" >
                <img className="header-logo" src={Logo} />
                <p className="header-project-name" >{this.state.projeNo}</p>
                <DateTime />
            </div>
        )
    }
}

export default Header;