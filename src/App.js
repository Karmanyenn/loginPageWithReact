import React, { Component } from 'react'
import LoginPage from "./LoginPage";
import './Assets/Styles/App.css';



export default class App extends Component {
  state = { variables: [] }

    componentDidMount() {
        this.getUsers();
    }
    getUsers = (variable) => {
        fetch('http://localhost:3000/variables')
            .then(response => response.json())
            .then(data => this.setState({ variables: data }));
    }
  
  render() {
    let titles={
      loginTitle:'Giriş Yap', 
      usernameTitle:'Kullanıcı Adı: ',
      mailTitle:'E-posta: ',
      passwordTitle:'Parola: ',
      usernameLetter:'Kullanıcı adı boş bırakılamaz.',
      mailLetter:'E-posta alanı boş bırakılamaz.',
      pswLetter:'Parola en az 8 karakterden oluşmalıdır.'
  
    }
    return (
      <div className='app'>
        <LoginPage 
        variables={this.state.variables}
        loginTitles={titles} />
      </div>
    )
  }
}


