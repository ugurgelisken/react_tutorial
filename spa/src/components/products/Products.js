import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './Products.css';

export default class Products extends Component {

    /* Varsayılan state'ler boş olarak tanımlanıyor. */
    constructor(props) {
        super(props);
        this.state = {
            searchTXT: "",
            productList: []
        }
    }

    /* Component render edilmeden önceki kontrol */
    /* Eğer gelen prop değerlerinde location.state varsa, yani sayfaya doğrudan değil de ana sayfada arama ile gelinmişse, eğer state içindeki değerden de farklı bir değrese state.searchTXT değerini güncelle. */
    static getDerivedStateFromProps(props, state) {
        if(props.location.state !== undefined){
            if (props.location.state.searchTXT !== state.searchTXT) {
                return {
                    searchTXT: props.location.state.searchTXT
                };
            }
        }
        return null;
    }

    /* Component render edildiğinde fetch api ile state.searchTXT değerini de birleştirip ürünleri çek. Gelen verilerden de data içeriğini state.productList Array'ine aktar. */
    componentDidMount() {
        fetch('https://gorest.co.in/public-api/products?name=' + this.state.searchTXT)
            .then(response => response.json())
            .then(data => this.setState({ productList: data.data }));
    }

    /* Eğer state.searchTXT değeri boşsa ana sayfaya <Redirect /> ile yönlendiriliyor. */
    /* Gelen verilere göre ürünler <Link /> içinde oluşturuluyor. Bağlantı olarak da /product/id şeklinde yönlendirme yapılıyor. */
    render() {

        return (
            
            <div>

                <p className="Title">Aranan içerik: <em>{this.state.searchTXT || " Hepsi"}</em></p>

                <div className="Products" >

                    { this.state.productList.map(product => {
                        return (
                            <div key={product.id} className="Product">
                                <Link to={ "/product/" + product.id }  >
                                    <img src={product.image} alt={product.description} ></img>
                                    <p>{product.name}</p>
                                    <p>{product.price}$</p>
                                    <span>{product.status ? "satışı var" : "satışı yok"}</span>
                                </Link>
                            </div>
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}