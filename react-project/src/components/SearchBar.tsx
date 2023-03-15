import React from "react";

export class SearchBar extends React.Component {
  state = { input: localStorage.getItem("input") };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("input", event.target.value);
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type={"text"}
          onChange={this.handleChange}
          value={this.state.input ? this.state.input : ""}
        ></input>
      </div>
    );
  }
}
