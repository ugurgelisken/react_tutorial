import React from 'react';

import "./ListWorkers.css";

export default class ListWorkers extends React.Component {

    render() {

        const workersData = [
            {
                name: "Uğur",
                surname: "GELİŞKEN",
                age: 35,
                avatar: "./images/avatar.jpg"
            },
            {
                name: "Erkin",
                surname: "KA..",
                age: 40,
                avatar: "./images/avatar.jpg"
            },
            {
                name: "Ahmet",
                surname: "ÜS..",
                age: 43,
                avatar: "./images/avatar.jpg"
            },
            {
                name: "Mehmet",
                surname: "ÇE..",
                age: 42,
                avatar: "./images/avatar.jpg"
            }
        ];

        const element_worker = workers => {

            return (
                <ul>
                    {
                        workers.filter(worker => worker.age <= 40).map(worker => {
                            return (
                                <li className="worker-box">
                                    <img className="worker-avatar" src={worker.avatar} alt={worker.name} />
                                    <div className="worker-text">
                                        <p>Ad Soyad: {worker.name} {worker.surname}</p>
                                        <p>Yaş: {worker.age}</p>
                                    </div>
                                </li>
                            );
                        })
                    }
                 
                </ul>
            );
        }


        return (
            <div>
                <p>Çalışanlar</p>
                {
                    element_worker(workersData)
                }
            </div>
        );

    }
}
