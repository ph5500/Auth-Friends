import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
      </div>
    );
  }
}

export default FriendsForm;
