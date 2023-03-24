import React from "react";
import "./CardComponent.css";

interface ICardProps {
  CardTitle: string;
  CardDescription: string;
  CardBackgroundUrl: string;
  CardDate: string;
  CardAvailable: boolean;
  CardCountry: string;
}

export class Card extends React.Component<ICardProps> {
  constructor(props: ICardProps) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div
          className="card-img"
          style={{
            backgroundImage: `url(${this.props.CardBackgroundUrl})`,
          }}
        />
        <h3>{this.props.CardTitle}</h3>

        <p>{this.props.CardDescription}</p>
        <div className="card-additional-info">
          <p className="card-date">{this.props.CardDate}</p>
          <p className="card-available">
            {this.props.CardAvailable ? "Available" : "Out"}
          </p>
          <p className="country">{this.props.CardCountry}</p>
        </div>
      </div>
    );
  }
}
