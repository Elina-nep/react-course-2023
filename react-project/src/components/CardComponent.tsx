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

export const Card = (props: ICardProps) => {
  return (
    <div className="card">
      <div
        className="card-img"
        style={{
          backgroundImage: `url(${props.CardBackgroundUrl})`,
        }}
      />
      <h3>{props.CardTitle}</h3>

      <p>{props.CardDescription}</p>
      <div className="card-additional-info">
        <p className="card-date">{props.CardDate}</p>
        <p className="card-available">
          {props.CardAvailable ? "Available" : "Out"}
        </p>
        <p className="country">{props.CardCountry}</p>
      </div>
    </div>
  );
};
