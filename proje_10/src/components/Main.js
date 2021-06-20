import React, { Component } from 'react';

import DigitalClock from "./Main_subcomponent/DigitalClock";
import DateTime from "./Main_subcomponent/DateTime";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /* <Main /> Component'i güncellenmeden önce gerçekten güncelleme yapmalı mı diye kontrol ediyor. Kontrol ederken prevProps ile güncellenme yapılmadan önceki prop'larına, prevState ile de güncellenmeden önceki state'ine bakabiliyor.
    Eğer bir önceki prop.type değeri, şu anki yani yeni gelen prop.type değerinden farklı ise setState() ile yeni prop.type değerini alıp state'e aktarıyoruz.
    Böylece state güncellendiği için tekrar render oluyor. */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("<Main /> nextProps, nextState: ", prevProps, prevState);
        if (prevProps.type !== this.props.type) {
            this.setState({ type: this.props.type });
        }
        // Mutlak return null ile sonlanmalı.
        return null;
    }

    // <Main /> Component'i güncellendiğinde...
    // Ayrıca getSnapshotBeforeUpdate() metodu için boş olsa da kullanılması zorunlu.
    // snapshot parametresi getSnapshotBeforeUpdate() metodu için gereklidir.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps, prevState, snapshot)
    }

    /* state.type değeri clock veya date ise ona göre alt Component'ler render ediliyor. */
    render() {
        return (
            <div>
                { this.state.type === "clock" && <DigitalClock />}
                { this.state.type === "date" && <DateTime />}
            </div>
        )
    }

}

export default Main;