import React, { useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({
  setSearch,
  setIsLoading,
}: {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [state, setState] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("input", event.target.value);
    setState(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearch(state);
      setIsLoading(true);
    }
  };

  return (
    <div className="search-bar-container">
      <p>search for Lord of the Rings characters</p>
      <input
        className="search-bar"
        type={"text"}
        onChange={handleChange}
        value={state ? state : ""}
        placeholder="Your search"
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
};
