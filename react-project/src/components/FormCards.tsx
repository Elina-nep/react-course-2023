import { ICardValues } from "../interfaces/formInterfaces";
import React, { useEffect, useState } from "react";
import { Card } from "./CardComponent";
import "./css/CardComponent.css";

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
          CardTitle={card.title}
          CardDescription={card.description}
          CardBackgroundUrl={card.image}
          CardDate={card.date}
          CardAvailable={card.available}
          CardCountry={card.country}
        ></Card>
      ))}
    </div>
  );
};
