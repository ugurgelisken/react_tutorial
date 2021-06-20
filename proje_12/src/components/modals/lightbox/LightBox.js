
import React, { Component } from "react";
import { createPortal } from 'react-dom';

import './LightBox.css';

const portal_modal = document.getElementById('modal-lightbox');

export default class LightBox extends Component {
    constructor(props) {
        super(props);
        this.element = document.createElement('div');
    }

    componentDidMount() {
        portal_modal.appendChild(this.element);
        console.log(this.props)
    }

    componentWillUnmount() {
        portal_modal.removeChild(this.element);
    }

    render() {
        return createPortal(this.props.children, this.element);
    }

}