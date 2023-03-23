import { ICardValues } from "../pages/Form";
import React from "react";
import "./CardComponent.css";
import { Card } from "./CardComponent";

export class FormCards extends React.Component<
  { props: ICardValues[] },
  { allCards: ICardValues[] }
> {
  constructor(props: { props: ICardValues[] }) {
    super(props);
    this.state = { allCards: this.props.props };
    console.log(this.state);
  }
  render() {
    return (
      <div className="cards-container flex">
        {this.state.allCards.map((card, index) => (
          <Card
            key={card.title! + index}
            CardTitle={String(card.title)}
            CardDescription={String(card.description)}
            CardBackgroundUrl={"./src/assets/img.png"}
            CardDate={String(card.date)}
            CardAvailable={Boolean(card.availableY)}
            CardCountry={String(card.country)}
          ></Card>
        ))}
      </div>
    );
  }
}
