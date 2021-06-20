

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LanguageChanger from '../../tools/language-changer/LanguageChanger'

import { withNamespaces } from 'react-i18next';

import './Main.css';

class Main extends Component {

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

        const t = this.props.t;

        return (
            <div className="Main" >
                <input type="text" name="searchTXT" value={this.state.searchTXT} onChange={this.inputChange} /><br />
                <Link to={{
                        pathname: "/products",
                        state: { ...this.state }
                    }}
                    >
                    <button>{t('btn_search')}</button>
                </Link>
                <LanguageChanger />
            </div>
        );
    }
}

export default withNamespaces()(Main);