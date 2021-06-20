import React, { Component } from 'react';

export default class Render_5 extends Component {
    render() {
        
        let currentDate = new Date();
        let currentHour = currentDate.getHours();
        
        return (
            <div>
                <p>Saat şu an { currentDate ? currentDate.toLocaleString() : " bilinmiyor."} </p>
                <p>Kontrol edilen saat {currentHour}/24</p>
                <p> 
                    {
                        currentHour < 6 
                        ? "İyi geceler" 
                        : currentHour < 12 
                        ? "Günaydın"
                        : currentHour < 18
                        ? "İyi günler"
                        : currentHour < 24
                        ? "İyi akşamlar"
                        : "null"
                    }
                </p>
            </div>
        );
    }
}