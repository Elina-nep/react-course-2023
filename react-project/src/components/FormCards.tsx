import { ICardValues } from "../pages/Form";
import React, { useEffect, useState } from "react";
import "./CardComponent.css";
import { Card } from "./CardComponent";

export const FormCards = ({ props }: { props: ICardValues[] }) => {
  console.log(props);
  const [cards, setCards] = useState<ICardValues[]>(props);

  useEffect(() => {
    setCards(props);
  }, [props]);

  return (
    <div className="cards-container flex">
      {cards.map((card, index) => (
        <Card
          key={card.title! + index}
          CardTitle={String(card.title)}
          CardDescription={String(card.description)}
          CardBackgroundUrl={String(card.image)}
          CardDate={String(card.date)}
          CardAvailable={Boolean(card.availableY)}
          CardCountry={String(card.country)}
        ></Card>
      ))}
    </div>
  );
};
