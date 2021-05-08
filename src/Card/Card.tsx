import React, { Component, useContext } from "react";
import { ITarotCard } from "../Interfaces/ICard";
import { IViewportSize } from "../Interfaces/IViewportSize";
import "./TarotCard.css";

interface Props {
  card: ITarotCard;
  viewportSize: IViewportSize;
}

class Card extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="card-container">
        <div className="card">
          <div className="front">
            <div className="eng">
              <img
                src={this.props.card.imageaddress}
                alt="img link is broken"
              />
            </div>
          </div>
          <div className="back">
            <div className="han">{this.props.card.name}</div>
            <div className="pin">{this.props.card.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
