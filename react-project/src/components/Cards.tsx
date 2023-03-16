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

// {CARDS.map(({ CardTitle, CardDescription, CardBackgroundUrl }, index) => (
//     <Card key={CardTitle}  CardTitle={CARDS[index].CardTitle} CardDescription={CARDS[index].CardDescription}
//     CardBackgroundUrl={CARDS[index].CardBackgroundUrl}></Card>
//   ))}

//   <Card
//     CardTitle={CARDS[0].CardTitle}
//     CardDescription={CARDS[0].CardDescription}
//     CardBackgroundUrl={CARDS[0].CardBackgroundUrl}
//   ></Card>
