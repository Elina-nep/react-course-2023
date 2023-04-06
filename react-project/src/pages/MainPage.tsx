import "./Main.css";
import React, { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Cards } from "../components/Cards";
import { Loader } from "../components/Loader";

export function MainPage() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <SearchBar setSearch={setSearch} setIsLoading={setIsLoading} />
      {isLoading && <Loader />}
      <Cards input={search} setIsLoading={setIsLoading} />
    </>
  );
}
