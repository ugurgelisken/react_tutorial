import React, { Component } from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default class Form_2 extends Component {

    /* Form başlatıldığında ve sıfırlandığında temiz hali ile kullanabilmek için state verilerini bir Object'e aktardık. Bunu da state'e parçalayarak aktaracağız. */
    /* Form elemanlarını doldurmak için inputData içindeki veriler form elemanlarına aktarılacak. */
    initialState = {
        email: "",
            password: "",
            confirmPassword: "",
            graduation: "",
            gender: "",
            languages: [],
            inputData: {
                graduations: ["Ön Lisans", "Lisans", "Yüksek Lisans"],
                genders: ["Erkek", "Kadın"],
                languages: ["Türkçe", "İngilizce", "Almanca", "Japonca"],
            },
            formSending: false,
            isLogin: false
    }

    constructor(props) {
        super(props);
        /* Yukarıda tanımladığımız initialState'i parçalayarak state'e aktarıyoruz. */
        this.state = {
            ...this.initialState
        };
    }

    /* Form girişlerinde checkbox seçimleri çoklu olacağı için fonksiyonda biraz değişiklik yapıyoruz. 
    Eğer e.target.type, yani tetikleyen elemanın türü checkboxe ise,
    ilk olarak seçim durumunu e.target.check ile true|false olarak kontrol ediyoruz.
    Eğer true ise seçilmiş, böylece concat metodu ile ekleme yapıyoruz.
    Eğer false ise seçim iptal edilmiş, filter döngüsü ile değer bulunup kaldırılıyor. */
    inputChange = (e) => {
        if(e.target.type === "checkbox"){
            if (e.target.checked){
                this.setState({
                    [e.target.name]: this.state[e.target.name].concat([e.target.value])
                });
              } else {
                this.setState({
                    [e.target.name]: this.state[e.target.name].filter(val => val !== e.target.value)
                });
             }
        /* Türü checkbox olmayanlar tekil veri olduğu için doğrudan state güncellemesi yapılıyor. */
        }else{
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.setState({
            formSending: true
        });
        setTimeout(() => {
            this.setState({
                formSending: false,
                isLogin: true
            });
        }, 1000);
    }

    /* Temizle butonuna tıklandığında state ilk tanımladığımız initialState ile yeniden temiz hale getiriliyor. 
    Ancak state temizlense bile ön yüzde bulunan radio ve checkbox'lar temizlenmez. 
    Bu sorunu da çözmek için this.userCreateForm ile formumuzu referans alıyoruz. <form> etiketini inceleyin. 
    Ve reset() metodu ile form resetleniyor. Bu metot, yerleşik bir metottur, yani React ile ilgisi yok. */
    clearForm = () => {
        this.setState({
            ...this.initialState
        });
        this.userCreateForm.reset();
    }

    render() {
        let { isLogin, formSending } = this.state;
        return (
            isLogin ?
                <div>Hoş geldiniz</div>
                : formSending ?
                    <div>Giriş yapılıyor...</div>
                    :
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col>
                                <Form ref={(el) => this.userCreateForm = el} >

                                    <Form.Group>
                                        <Form.Label>Eposta Adresi</Form.Label>
                                        <Form.Control type="email" name="email" value={this.state.email} onChange={this.inputChange} placeholder="E-posta giriniz..." required />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Parola</Form.Label>
                                        <Form.Control type="password" name="password" value={this.state.password} onChange={this.inputChange}  placeholder="8-16 karakter parola giriniz..." required />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Parola Tekrar</Form.Label>
                                        <Form.Control type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.inputChange} placeholder="Parolayı parola giriniz..." required />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Mezuniyet</Form.Label>
                                        <Form.Control as="select" defaultValue="DEFAULT" onChange={this.inputChange} >
                                            <option disabled value="DEFAULT" >Seçim yapınız...</option>
                                            {this.state.inputData.graduations.map((graduation) => (
                                                <option 
                                                    key={graduation} 
                                                    name="graduation"
                                                    value={graduation} 
                                                >{graduation}</option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Cinsiyet</Form.Label>
                                        {this.state.inputData.genders.map((gender) => (
                                            <Form.Check key={gender}
                                                type="radio"
                                                label={gender}
                                                value={gender} 
                                                name="gender"
                                                onChange={this.inputChange}
                                            />
                                        ))}
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Dil</Form.Label>
                                        {this.state.inputData.languages.map((language) => (
                                            <Form.Check key={language}
                                                type="checkbox"
                                                label={language}
                                                value={language} 
                                                name="languages"
                                                onChange={this.inputChange}
                                            />
                                        ))}
                                    </Form.Group>
                                    
                                    <Button variant="secondary" className="mr-2" onClick={this.clearForm} >Temizle</Button>
                                    <Button variant="primary" type="submit" >Kayıt Ol</Button>

                                </Form>
                            </Col>
                            <Col></Col>
                        </Row>

                    </Container>

        );
    }

}
