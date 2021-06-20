

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';

export default class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
          <h1>404</h1>
          <h3>Sayfa bulunamadı</h3>
          <p>Ana sayfaya gitmek için <Link to="/" >tıklayın.</Link></p>
      </div>
    );
  }
}