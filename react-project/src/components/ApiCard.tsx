import React, { useState } from "react";
import "./CardComponent.css";
import { Modal } from "./Modal";

interface IApiCardProps {
  name: string;
  spouse: string;
  race: string;
  gender: string;
  wikiUrl: string;
  birth: string;
}

export const ApiCard = (props: IApiCardProps) => {
  const [ifModal, setIfModal] = useState(false);
  return (
    <>
      {ifModal && (
        <Modal title={props.name} onClose={() => setIfModal(false)}>
          <div className="card card-modal">
            <div
              className="card-img"
              style={{
                backgroundImage: `url("./src/assets/lor.jpg")`,
              }}
            />
            <p>{props.race}</p>
            <div className="card-additional-info">
              <p className="card-date">Gender: {props.gender}</p>
              <p className="card-available">Spouse: {props.spouse}</p>
              <p className="country">Birth: {props.birth}</p>
            </div>
          </div>
        </Modal>
      )}
      <div className="card" onClick={() => setIfModal(true)}>
        <div
          className="card-img"
          style={{
            backgroundImage: `url("./src/assets/lor.jpg")`,
          }}
        />
        <h3>{props.name}</h3>

        <p>{props.race}</p>
      </div>
    </>
  );
};
