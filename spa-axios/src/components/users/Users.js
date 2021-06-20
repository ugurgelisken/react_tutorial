import React, { Component } from 'react';
import axios from 'axios';

import './Users.css';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false }
  }

  getUsers = async () => {
    const res = await axios.get("users");
    if (res.status === 200) {
      this.setState({ usersData: res.data, isLoaded: true });
    }
  }

  editUser = id => {
    this.props.history.push("/user/" + id);
  }

  componentDidMount() {
    if (axios.defaults.headers.common['Authorization']) {
      this.getUsers();
    } else {
      this.props.history.push("/");
    }
  }

  render() {

    {
      if (this.state.isLoaded === false) return null;
    }

    let { ad, data } = this.state.usersData;

    return (
      <div className="Users">
        <h3>{ad.company}</h3>
        <p>{ad.text}</p>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>İsim</th>
              <th>Soyisim</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) =>
              <tr key={user.id}>
                <td className="avatar" ><img src={user.avatar} alt={user.first_name + user.last_name} /></td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td className="edit" ><button onClick={ () => this.editUser(user.id) }>Düzenle</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}