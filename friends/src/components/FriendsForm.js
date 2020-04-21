import React from 'react';
// import moment from 'moment';
// import Loader from 'react-loader-spinner'
import {axiosWithAuth} from '../utils/axiosWithAuth';
import AddNewFriend from './AddNewFriend';


class FriendsForm extends React.Component{
    state = {
        friends: []
    };

    componentDidMount(){
        this.getData();
    }

    getData = () =>{
        axiosWithAuth().get('/api/friends')
        .then(res =>{
            console.log('this is the getData data',res.data)
            this.setState({
                friends: res.data
            })
        })
    }

    

    
    render(){
        return(
            <div>
                <h2>Who's Friends Are These!?</h2>
                {this.state.friends.map(item =>{
                    return(
                        <div>
                        <h3>{item.name}</h3>
                        <p>{item.age}</p>
                        <p>{item.email}</p>
                        </div>
                    )
                })}
                <AddNewFriend />
            </div>
        )
    }



}//closes componentFriendsForm

export default FriendsForm;