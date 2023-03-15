import React from "react";

interface ICardProps {
  CardTitle: string;
  CardDescription: string;
}

export class Card extends React.Component<ICardProps> {
  constructor(props: ICardProps) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className="card-img"> </div>
        <h3>{this.props.CardTitle}</h3>
        <p>{this.props.CardDescription}</p>
      </div>
    );
  }
}
