
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './Login.css';

/* Axios için varsayılan temel adres ve get, post, delete, put için application/json içerik türünü veriyoruz */
axios.defaults.baseURL = "https://reqres.in/api/";
axios.defaults.headers.get['Content-Type'] = "application/json";
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.put['Content-Type'] = "application/json";
axios.defaults.headers.delete['Content-Type'] = "application/json";
export default class Login extends Component {

    /* state'te kullanıcı email'i ve parolası tanımlı. Bu bilgilerle girilmesi gerekiyor. Eğer başka bilgilerle girilecekse sıfırlanmalı. Kolaylık olsun diye eklendi. */
    constructor(props) {
        super(props);
        this.state = {
            email: "eve.holt@reqres.in",
            password: "cityslicka",
            isLogin: false
        };
    }

    /* Veriler girildikçe state'te güncelleniyor */
    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    /* Giriş butonuna tıklanınca asenkron login fonksiyonu çağrılıyor. 
    post metodu ile /login adresine istek gönderiliyor. 
    Gelen sonuç res değişkenine aktarılıyor. 
    Eğer cevap, yani status kodu 200 ise giriş başarılı demektir. 
    res.data.token ile gelen değeri state.token'a aktarıyoruz. Bu değeri <Redirect /> Component'i state'inde /users sayfasına göndereceğiz.
    Aslında bu veriyi kullanmayacağız ama belki işe yarar diye gönderdik.*/
    
    login = async event => {
        try {
            event.preventDefault();
            const res = await axios.post(axios.defaults.baseURL + "login", {
                email: this.state.email,
                password: this.state.password
            });
            if(res.status === 200){
                axios.defaults.headers.common['Authorization'] = res.data.token;
                this.setState({
                    token: res.data.token,
                    isLogin: true
                });
            }
        } catch(error) {
            console.log("Hata: ", error)
        }
    }

    render() {

        let { email, password, isLogin } = this.state;
       
        /* Eğer giriş yapılmışsa, isLogin ile kontrol ediyoruz. Giriş yapılmışsa <Redirect /> render ediliyor ve sayfa yönlendiriliyor.
        Eğer henüz giriş yapılmamışsa form render ediliyor. */
       
        return (
            <div className="form">
                { isLogin === true && <Redirect
                    to={{
                    pathname: "/users",
                    state: { token: this.state.token }
                    }}
                /> }
                <label>Email</label><br />
                <input type="email" name="email" value={email} onChange={this.inputChange} /><br />
                <label >Parola</label><br />
                <input type="password" name="password" value={password} onChange={this.inputChange} /><br />
                <button onClick={this.login} >Giriş</button>
            </div>
        );
    }
}
