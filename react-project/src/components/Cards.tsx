import React, { useEffect, useState } from "react";
import "./Cards.css";
import { fetchData } from "../utils/fetchData";
import { IApiCard } from "../interfaces/apiCardInterface";
import { ApiCard } from "./ApiCard";

export const Cards = ({
  input,
  setIsLoading,
}: {
  input: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [persons, setPersons] = useState<IApiCard[]>([
    {
      _id: "",
      height: "",
      race: "",
      gender: "",
      birth: "",
      spouse: "",
      death: "",
      realm: "",
      hair: "",
      name: "",
      wikiUrl: "",
    },
  ]);

  useEffect(() => {
    fetchData(input)
      .then((res) => {
        setPersons([...res.docs]);
        setIsLoading(false);
      })
      .catch(() => {});
  }, [input, setIsLoading]);

  return (
    <div className="cards-container flex">
      {persons.map((card) => (
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
