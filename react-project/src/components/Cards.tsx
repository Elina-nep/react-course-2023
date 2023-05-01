import React from "react";
import { useSelector } from "react-redux";
import { ApiCard } from "./ApiCard";
import { IRootState } from "../interfaces/store";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";
import { useGetCharactersQuery } from "../utils/fetchData";
import "./css/Cards.css";

export const Cards = () => {
  const search = useSelector((state: IRootState) => state.search.search) || "";

  const {
    data = {
      docs: [],
    },
    isFetching,
    error,
  } = useGetCharactersQuery(search);

  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);
      return <ErrorMessage message={errMsg + data.docs + "_check"} />;
    } else {
      return <ErrorMessage message={error.message!} />;
    }
  }

  if (isFetching) return <Loader />;

  return (
    <div className="cards-container flex">
      {data.docs.map((card) => (
        <ApiCard
          name={card.name}
          spouse={card.spouse}
          race={card.race}
          gender={card.gender}
          wikiUrl={card.wikiUrl}
          birth={card.birth}
          key={card.name}
        ></ApiCard>
      ))}
    </div>
  );
};
