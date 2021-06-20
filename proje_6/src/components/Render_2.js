import React, { Component } from 'react';

export default class Render_2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: Math.round((Math.random() - 0.5) * 2)
        }
    }

    element = (number) => {
        
        if(number == 1){
            return ( <p>Üretilen sayı 0'dan büyük</p> )
        } else if(number == -1){
            return ( <p>Üretilen sayı 0'dan küçük</p> )
        }

        return (<p>Üretilen sayı 0'a eşit</p>);
    }

    render() {
     
        return (
            <div>
                { this.element(this.state.number) }
            </div>
        );
    }
}