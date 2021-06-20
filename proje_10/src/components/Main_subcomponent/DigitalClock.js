import React, { Component } from 'react';

export default class DigitalClock extends Component {
     constructor() {
        super();
        this.state = {
            clock: "",
            clockSettings: {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        };
    }

    // <DigitalClock /> Component'i render edildiğinde...
    /* state'te tutulan ayarlara göre sistem saati TR lokasyon ayarları ile state.clock'a aktarılıyor.
     1000 milisaniyede bir saat bilgisi güncellensin diye de bir fonksiyon ile işlem yürütülüyor. 
    Fonksiyonu da setInterval() ile çağırıyoruz. */
    componentDidMount(){
        console.log("<DigitalClock /> eklendi.");
        const setCurrentTime = () => {
            this.setState({
                clock: new Date().toLocaleTimeString("tr-TR", this.state.clockSettings) 
            });
        }
        setCurrentTime();
        this.clockInterval = setInterval( () => setCurrentTime(), 1000);
    }

    /* Eğer 2. butona tıklanırsa, bu Component kaldırılacak. 
    Bu nedenle de kaldırılmadan önce clearInterval() ile Interval nesnesini durduruyoruz. */
    componentWillUnmount(){
        console.log("<DigitalClock /> kaldırılacak.");
        clearInterval(this.clockInterval); 
    }

    render(){
        return <div>{this.state.clock}</div>
    }

}
