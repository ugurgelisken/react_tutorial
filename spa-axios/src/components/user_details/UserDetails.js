
import React, { Component } from 'react';
import axios from 'axios';

import './UserDetails.css';

export default class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            avatar: ""
        };
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    userId = this.props.match.params.id;

    getUsersDetails = async () => {
        const res = await axios.get("users/" + this.userId);
        if (res.status === 200) {
            this.setState({ 
                first_name: res.data.data.first_name,
                last_name: res.data.data.last_name,
                avatar: res.data.data.avatar
            });
        }
    }

    saveUser = async () => {
        const res = await axios.put("users/" + this.userId, {
            "first_name": this.state.first_name,
            "last_name": this.state.last_name
        });
        if (res.status === 200) {
            this.props.history.push("/users/");
        }
    }

    deleteUSer = async () => {
        const res = await axios.delete("users/" + this.userId);
        if (res.status === 204) {
            this.props.history.push("/users/");
        }
    }

    componentDidMount() {
        if (axios.defaults.headers.common['Authorization']) {
            this.getUsersDetails();
        } else {
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <div className="UserDetails">
                <img src={this.state.avatar} />
                <p>İsim</p>
                <input type="text" name="first_name" value={this.state.first_name} onChange={this.inputChange} /><br />
                <p>Soyisim</p>
                <input type="text" name="last_name" value={this.state.last_name} onChange={this.inputChange} /><br />
                <div className="buttons">
                    <button onClick={this.saveUser} >Kaydet</button>
                    <button onClick={this.deleteUSer} >Sil</button>
                </div>
            </div>
        );
    }
}