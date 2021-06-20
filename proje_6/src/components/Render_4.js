import React, { Component } from 'react';

import LoginForm from "./LoginForm";
import AdminPanel from "./AdminPanel";

export default class Render_4 extends Component {

    render(loggedIn) {
        return (
            <div> 
                { loggedIn && <AdminPanel /> }
                { !loggedIn && <LoginForm /> }
            </div>
        );
    }
}