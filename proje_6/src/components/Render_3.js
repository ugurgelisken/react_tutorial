import React, { Component } from 'react';

import LoginForm from "./LoginForm";
import AdminPanel from "./AdminPanel";

export default class Render_3 extends Component {

    render() {

        const navigateToPage = () => {
            switch (this.props.loggedIn) {
                case true:
                    return (<AdminPanel />);
                    break;
                case false:
                    return (<LoginForm />);
                    break;
                default:
                    return null;
            }
        }

        return (
            <div> { navigateToPage()} </div>
        );
    }
}