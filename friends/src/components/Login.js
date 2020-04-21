import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import Loader from "react-loader-spinner";

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
        }
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };


    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            //may need to add in dot notation credentials above
            .then(response => {
                // res.data.payload
                // redux - send the token to the redux store
                // browser storage - localStorage (this is probably the least secure choice)
                // cookies
                localStorage.setItem('token', JSON.stringify(response.data.payload));
                this.props.history.push('/protected');
            })
            .catch(err => console.log({ err }));
    };

    render() {
        return (
            <div>
                <form className='login' onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                        placeholder="Password"
                    />
                    <button>Submit</button>

                </form>
            </div>
        );
    }
}

export default Login;


{/* {props.isLoading && (
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={3000} //3 sec
                        />
                    )}; */}