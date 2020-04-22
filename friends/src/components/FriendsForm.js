import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import NewFriend from "./NewFriends";
// import Loader from "react-loader-spinner";
class FriendsForm extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    //request data with the token
    // set the data to state

    axiosWithAuth()
      .get("/api/friends")
      .then(response => {
        console.log("this is get data", response.data);
        //set the data to state
        this.setState({
          friends: response.data
        });
      });
  };

  updateData = response => {
    this.setState({
      friends: response.data
    })
  }

  render() {
    return (
      <div>
        <h2>These are the Chaps! </h2>
        {this.state.friends.map(item => {
          return (
            <div>
              <p>Name: {item.name}</p>
              <p>Age: {item.age}</p>
              <p>Email: {item.email}</p>
            </div>
          );
        })}
        <NewFriend state={this.state} updateData={this.updateData} />
      </div>
    );
  }
}

export default FriendsForm;
