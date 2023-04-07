import React, { useState } from "react";
import "./SearchBar.css";

export const SearchBar = () => {
  const [state, setState] = useState(localStorage.getItem("input"));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("input", event.target.value);
    setState(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-bar"
        type={"text"}
        onChange={handleChange}
        value={state ? state : ""}
        placeholder="Your search"
      ></input>
    </div>
  );
};
