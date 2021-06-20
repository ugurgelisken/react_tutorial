import React, { Component } from 'react';

export default class Render_1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zeroOrOne: Math.round(Math.random())
        }
    }

    element = (number) => {
        
        if(number > 0){
            return ( <p>Sayı 0'dan büyük</p> )
        }

        return null;
    }

    render() {
     
        return (
            <div>
                { this.element(this.state.zeroOrOne) }
            </div>
        );
    }
}