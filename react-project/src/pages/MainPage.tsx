import React from "react";
import "./css/Main.css";
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
