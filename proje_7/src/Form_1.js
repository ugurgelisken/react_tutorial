import React, { Component } from 'react';

import "./Form_1.css";

export default class Form_1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            formSending: false,
            isLogin: false,
            errors: {
                username: "",
                password: "",
                formError: ""
            }
        };
    }

    // Parametre olarak verilen email'i kontrol eder, true|false döndürür.
    isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);

    inputChange = (e) => {

        // Güncelle
        this.setState({
            [e.target.name]: e.target.value
        });

        // Kontrol değerleri
        let max  = Number(e.target.max);
        let required  = e.target.required;

        // Her defasında girilen e parametresine göre state'i sıfırlanıyor.
        this.setState({
            errors: {
                ...this.state.errors,
                [e.target.name]: ""
            }
        });

        // Eğer username input'u ise ve girilen email hatalı ise...
        if(e.target.name === "username" && this.isEmailValid(this.state.username) === false){
            this.setState({
                errors: {
                    ...this.state.errors,
                    username: "Email hatalı, kontrol edin."
                }
            });
        }
       
        // Eğer required ile zorunlu alan varsa ve içeriği boşsa...
        if(required && e.target.value === "" ){
            this.setState({
                errors: {
                    ...this.state.errors,
                    [e.target.name]: ""
                }
            });
        }

        // Eğer girilen input verisi uzunluğu, max attribute değerini aşmışsa...
        if(e.target.value.length > max){
            this.setState({
                errors: {
                    ...this.state.errors,
                    [e.target.name]: "Giriş hatalı. " + e.target.max + " sınırı aşıldı."
                }
            });
        }
        
        
    }

    formSubmit = () => {
        this.setState({
            formSending: true
        });
        setTimeout( () => {
            this.setState({
                formSending: false,
                isLogin: true
            });
        }, 1000);
    }

    render() {

        let { username, password, isLogin, formSending } = this.state;
        
        return (
            isLogin ?
                <div>Hoş geldiniz</div>
            : formSending ? 
                <div>Giriş yapılıyor...</div>
            :
            <div>
                <h5>Form 1</h5>
                <form onSubmit={this.formSubmit}>
                    <label>Kullanıcı adı</label><br />
                    <input type="email" name="username" value={username} onChange={this.inputChange} max="32" required /><br />
                    <small>{this.state.errors.username}</small>
                    <label >Parola</label><br />
                    <input type="password" name="password" value={password} onChange={this.inputChange} max="16" required /><br />
                    <small>{this.state.errors.password}</small>
                    <input type="submit" value="Giriş" />
                </form>
            </div> 
           
           
        );
    }

}