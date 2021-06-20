

import React, { Component } from 'react';
import './ProductDetails.css';

export default class ProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        fetch('https://gorest.co.in/public-api/products?id=' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => this.setState({ product: data.data[0] }));
    }

    render() {

        const product = this.state.product;

        return (
            <React.Fragment>
                { product ? (<div className="ProductDetails">
                    <div className="leftSide">
                        <img className="image" src={product.image} alt={product.name} />
                    </div>
                    <div className="rightSide">
                        <div className="name" >{product.name}</div>
                        <div className="description" >{product.description}</div>
                        <div className="price" >Satış Fiyatı:<span>{product.price}$</span></div>
                        <div className="discount_amount" >İndirimli Fiyatı:<span>{product.discount_amount}$</span></div>
                        <div className="status" >{ product.status ? "Satışı var" : "Tükendi" }</div>
                        <div className="categories" >
                            {product.categories.map(category => {
                                return (
                                    <div key={category.id} >{category.name}</div>
                                )}
                            )}
                        </div>
                    </div>
                </div>) : "Yükleniyor..."}
            </React.Fragment>
        );
    }
}