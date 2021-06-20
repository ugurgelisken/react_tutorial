import React, { Component } from 'react';

class DateTime extends Component {

    constructor() {
        super();
        this.state = {
            zaman: "",
            tarih: ""
        }
    }

    tickTock = setInterval(
        () => {
            this.setState({
                zaman: new Date().toLocaleTimeString(),
                tarih: new Date().toLocaleDateString()
            });
        },
        1000
    );

    render() {
        return (
            <div style={{ backgroundColor: "black", color: "white", padding: "4px", fontSize: "20px", textAlign: "center", margin: "0px -10px 0px -10px" }}>
               <p>{this.state.zaman} - {this.state.tarih}</p>
            </div>
        )
    }
}

export default DateTime;