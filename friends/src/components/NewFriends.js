import React from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";



class NewFriend extends React.Component {
    constructor(props) {
        super();
        this.state = {
            newFriends: {
                id: '',
                name: '',
                age: '',
                email: '',

            }
        }
    }

    handleChanges = e => {
        this.setState({
            newFriends: {
                ...this.state.newFriends, [e.target.name]: e.target.value
            }
        })
    }


    addFriend = e => {
        e.preventDefault();
        axiosWithAuth().post('/api/friends', this.state.newFriends)
            .then(response => {
                // console.log("this is addFriend data", response)
                this.props.updateData(response);
            }).catch(err => { console.log("error from adding new friends", err) })

    }

    render() {
        return (
            <form onSubmit={this.addFriend}>
                <h2>Add a friend!</h2>
                <input
                    type="text"
                    name="age"
                    placeholder="New Friend"
                    value={this.state.newFriends.name}
                    onChange={this.handleChanges}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={this.state.newFriends.age}
                    onChange={this.handleChanges}
                />

                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.newFriends.email}
                    onChange={this.handleChanges}
                />
                <button>Add a new friend</button>

            </form>
        )
    }
}
export default NewFriend;
