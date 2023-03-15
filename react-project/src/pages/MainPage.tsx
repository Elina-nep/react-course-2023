import "./Main.css";
import React from "react";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";

export function MainPage() {
  return (
    <>
      <Header />
      <div>this is main page</div>
      <SearchBar />
    </>
  );
}
