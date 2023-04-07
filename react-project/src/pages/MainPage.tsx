import "./Main.css";
import React, { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Cards } from "../components/Cards";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";

export function MainPage() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      <SearchBar setSearch={setSearch} setIsLoading={setIsLoading} />
      {isLoading && <Loader />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <Cards
        input={search}
        setIsLoading={setIsLoading}
        setErrorMessage={setErrorMessage}
      />
    </>
  );
}
