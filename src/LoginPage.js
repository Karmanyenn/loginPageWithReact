import React, { Component } from 'react'
import './Assets/Styles/LoginPage.css'
import alertify from 'alertifyjs';

export default class LoginPage extends Component {
    

    onSubmitHandle = (event) => {
        event.preventDefault();
        this.props.variables.forEach(function (variable) {
            var valueUser = event.target.elements.userName.value;
            var valueMail = event.target.elements.email.value;
            var valuePassword = event.target.elements.password.value;

            var itemUser = event.target.elements.userName;
            var itemMail = event.target.elements.email;
            var itemPassword = event.target.elements.password;

            if (valueUser === '') {
                document.getElementById('emptyUsername').style.display = 'flex';
                itemUser.style.border = '3px solid red';
                itemUser.focus();
            }else if (valueMail === '') {
                document.getElementById('emptyMail').style.display = 'flex';
                itemMail.focus();
                itemMail.style.border = '3px solid red';
                
            } else if ((valueUser === variable.username) && (valueMail === variable.email) && (valuePassword === variable.password)) {
                itemUser.style.border = '3px solid green';
                itemMail.style.border = '3px solid green';
                itemPassword.style.border = '3px solid green';
                alertify.set('notifier', 'position', 'top-center');
                alertify.success('Merhaba ' + variable.username, 3);
            } else if ((valueUser !== variable.username) && (valueMail === variable.email) && (valuePassword === variable.password)) {
                itemUser.style.border = '3px solid red';
                itemMail.style.border = '3px solid green';
                itemPassword.style.border = '3px solid green';
            } else if ((valueUser === variable.username) && (valueMail !== variable.email) && (valuePassword === variable.password)) {
                itemUser.style.border = '3px solid green';
                itemMail.style.border = '3px solid red';
                itemPassword.style.border = '3px solid green';
            } else if ((valueUser === variable.username) && (valueMail === variable.email) && (valuePassword !== variable.password)) {
                itemUser.style.border = '3px solid green';
                itemMail.style.border = '3px solid green';
                itemPassword.style.border = '3px solid red';
            }else if (valuePassword.length < 8) {
                document.getElementById('pswText').style.display = 'flex';
                itemPassword.focus();
                itemPassword.style.border = '3px solid red';
            }else{
                itemUser.style.border = '3px solid red';
                itemMail.style.border = '3px solid red';
                itemPassword.style.border = '3px solid red';
            }
        });

    }

    onClikHandle = (event) => {
        alertify.set('notifier', 'position', 'top-center');
        alertify.error(':)', 3);
    }


    render() {
        return (
            <div className='main'>
                <form onSubmit={this.onSubmitHandle} className='formContainer' name='form1'>

                    <div className='image'>
                        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_1pxqjqps.json" background="transparent" speed="1" loop autoplay></lottie-player>
                    </div>
                    <div className='container'>
                        <div className='loginText'>
                            <h3>{this.props.loginTitles.loginTitle}</h3>
                        </div>
                        <label>{this.props.loginTitles.usernameTitle}</label>
                        <input type="text" id="userName" name="userName" placeholder="Kullanıcı Adı.."></input>
                        <h6 id='emptyUsername'>{this.props.loginTitles.usernameLetter}</h6>


                        <label >{this.props.loginTitles.mailTitle}</label>
                        <input type="email" id="email" name="email" placeholder="E-posta..."></input>
                        <h6 id='emptyMail'>{this.props.loginTitles.mailLetter}</h6>



                        <label >{this.props.loginTitles.passwordTitle}</label>
                        <input type="password" id="password" name="password" placeholder="Parola.."></input>
                        <h6 id='pswText'>{this.props.loginTitles.pswLetter}</h6>


                        <input onClick={this.onClikHandle} className='submit' type="submit" value="Giriş Yap"></input>
                        <div className='loginText2'>
                            <h3>Hesabın Yok mu?</h3>
                            <a href='/'> Kayıt Ol </a>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}
