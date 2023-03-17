import React from "react";
import { CARDS } from "../assets/mockCards";
import { Card } from "./CardComponent";
import "./Cards.css";

export class Cards extends React.Component {
  render() {
    return (
      <div className="cards-container flex">
        {CARDS.map((card) => (
          <Card
            key={card.CardTitle}
            CardTitle={card.CardTitle}
            CardDescription={card.CardDescription}
            CardBackgroundUrl={card.CardBackgroundUrl}
          ></Card>
        ))}
      </div>
    );
  }
}
