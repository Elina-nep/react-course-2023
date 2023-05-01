import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../interfaces/store";
import { changeSearch } from "../store/sliceSearch";
import "./css/SearchBar.css";

export const SearchBar = () => {
  const search = useSelector((state: IRootState) => state.search.search);
  const [state, setState] = useState(search);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(changeSearch({ search: state }));
    }
  };

  return (
    <div className="search-bar-container">
      <p>search for Lord of the Rings characters</p>
      <input
        className="search-bar"
        type={"text"}
        onChange={handleChange}
        value={state}
        placeholder="Your search"
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
};
