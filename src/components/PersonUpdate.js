import React, { Component } from "react";
import API from "../modules/http/Axios";

export default class PersonUpdate extends Component {
  state = {
    id: "",
    name: "",
    job: "",
  };

  handleChangeID = (event) => {
    this.setState({ id: event.target.value });
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

    API.patch(`api/users/${this.state.id}`, { user }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChangeID} />
            Person Name:
            <input type="text" name="name" onChange={this.handleChangeName} />
            <input type="text" name="job" onChange={this.handleChangeJob} />
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}
