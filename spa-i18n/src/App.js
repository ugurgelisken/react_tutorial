

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Analytics from 'react-router-ga';

import './i18n';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from "./components/not_found/NotFound";
import Main from "./components/main/Main";
import Products from "./components/products/Products";
import ProductDetails from "./components/product_details/ProductDetails";

import './App.css';

export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <BrowserRouter>
          <Analytics id="UA-2843161-1" debug >
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/products" component={Products} />
              <Route path="/product/:id" component={ProductDetails} />
              <Route component={NotFound} />
            </Switch>
          </Analytics>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    );
  }
}