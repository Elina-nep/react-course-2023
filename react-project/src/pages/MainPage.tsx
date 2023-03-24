import "./Main.css";
import React from "react";
import { SearchBar } from "../components/SearchBar";
import { Cards } from "../components/Cards";

export function MainPage() {
  return (
    <>
      <SearchBar />
      <Cards />
    </>
  );
}
