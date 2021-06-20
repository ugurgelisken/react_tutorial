import React, { Component } from 'react';

class Smiley extends Component {

    constructor(props) {
        super(props);
        this.state = {
            smileyIndex : 0,
            smileyPrefix: "&#12851", 
            smiley: "" 
        };
    }

    componentWillMount() {
        console.log("<Smiley /> render edilecek.")
    }

    componentDidMount() {
        console.log("<Smiley /> render edildi.")
    }

    static getDerivedStateFromProps(props, state) {
        
        console.log("props: ", props);
        console.log("props: ", state);

        if(props.smileyIndex !== state.smileyIndex){
            return {
                ...state,
                smiley: state.smileyPrefix + props.random,
                smileyIndex: props.random
            }
        }

    }

    render() {

        console.log("<Smiley /> render ediliyor.")

        let smileyHTML = `<h1>${this.state.smiley}</h1>`;

        return (
      
            <div>
                <div dangerouslySetInnerHTML={{__html: smileyHTML}} />
            </div>
        );
    }
}

export default Smiley;