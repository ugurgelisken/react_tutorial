import React, { Component } from 'react';

export default class DateTime extends Component {
     constructor() {
        super();
        this.state = {
            date: "",
            dateSettings: {
                year: "numeric",
                month: "long",
                day: "2-digit"
            }
        };
    }

    // <DateTime /> Component'i render edildiğinde...
    /* state'te tutulan ayarlara göre sistem saati TR lokasyon ayarları ile state.date'e aktarılıyor. */
    componentDidMount(){
        console.log("<DateTime /> eklendi.");
        this.setState({
            date: new Date().toLocaleDateString("tr-TR", this.state.dateSettings) 
        });
    }

    render(){
        return <div>{this.state.date}</div>
    }

}
