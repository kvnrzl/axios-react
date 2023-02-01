import React, { Component } from "react";
import API from "../modules/http/Axios";

export default class PersonList extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    API.get(`api/users?page=2`).then((res) => {
      //   console.log("this is res", res.data.data);
      this.setState({ persons: res.data.data });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li key={person.id}>
            {person.first_name} {person.last_name}
            {/* {person.name} */}
          </li>
        ))}
      </ul>
    );
  }
}
