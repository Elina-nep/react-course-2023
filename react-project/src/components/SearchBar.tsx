import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
  state = { input: localStorage.getItem("input") };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("input", event.target.value);
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div className="search-bar-container">
        <input
          className="search-bar"
          type={"text"}
          onChange={this.handleChange}
          value={this.state.input ? this.state.input : ""}
          placeholder="Your search"
        ></input>
      </div>
    );
  }
}
