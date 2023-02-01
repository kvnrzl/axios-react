import React, { Component } from "react";
import API from "../modules/http/Axios";

export default class PersonAdd extends Component {
  state = {
    name: "",
    job: "",
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeJob = (event) => {
    this.setState({ job: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      job: this.state.job,
    };
    console.log("name:", user.name);
    console.log("job:", user.job);

    API.post(`api/users`, { user }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChangeName} />
            <input type="text" name="job" onChange={this.handleChangeJob} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
