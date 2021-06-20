import React, { Component } from 'react';

import LoginForm from "./LoginForm";
import AdminPanel from "./AdminPanel";
import SuperAdminPanel from "./SuperAdminPanel";

export default class Render_6 extends Component {

    render() {
        
        let { loggedIn, userRole } = this.props;

        return (
            <div> 
                <p>Hoşgeldiniz...</p>
                {
                    loggedIn ? [
                        userRole ?
                            userRole === "super_admin" ? <SuperAdminPanel /> :<AdminPanel />
                        : null
                     ] : (
                        <LoginForm/>
                    )
                }
            </div>
        );
    }
}