import React, { Component } from "react";
import { ITarotCard } from "../Interfaces/ICard";
import "./TarotCard.css";

class Card extends Component<ITarotCard, {}> {
  constructor(props: ITarotCard) {
    super(props);
  }

  render() {
    return (
      <div className="card-container">
        <div className="card">
          <div className="front">
            <div className="eng">
              <img src={this.props.imageaddress} alt="img link is broken" />
            </div>
          </div>
          <div className="back">
            <div className="han">{this.props.name}</div>
            <div className="pin">{this.props.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
