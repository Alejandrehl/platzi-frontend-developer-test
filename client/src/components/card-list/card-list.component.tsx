import React from "react";
import { Card } from "../card/card.component";

import "./card-list.styles.css";

interface Monster {
  readonly id: number;
  readonly name: string;
  readonly email: string;
}

interface Props {
  readonly monsters: Monster[];
}

const CardList = ({ monsters }: Props) => (
  <div className="card-list">
    {monsters.map((monster: Monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

export default CardList;
