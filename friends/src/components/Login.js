//a simple login form 
//need: user name password input,
//needs: submit button

//The login function should save the returned token to localStorage. You can setup `isLoading` state in your Login component, and show a spinner on your form or in your button while the login request is happening.
//* When the request returns, save the token to `localStorage`, then use the history object in your Login component to navigate your user to your FriendsList route


import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    }
handleChange = e =>{
    this.setState({
        credentials:{
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    })
}//closes handleChange

login = e => {
    e.preventDefault();
    axiosWithAuth().post('/api/login', this.state.credentials)
    .then(res =>{
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        this.props.history.push('/protected');
    }).catch(err =>{console.log({err})})
}

    render(){
        return(
        <div>
        <form className="formLogin" onSubmit={this.login}>
            <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            />
            <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            />
            <button>Login you stupid nerd.</button>
        </form>
        </div>
    )}

}//closes Login Class

export default Login;
