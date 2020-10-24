import React from "react";
import "./card.styles.css";

interface Monster {
  readonly id: number;
  readonly name: string;
  readonly email: string;
}

interface Props {
  readonly monster: Monster;
}

export const Card = ({ monster }: Props) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};
