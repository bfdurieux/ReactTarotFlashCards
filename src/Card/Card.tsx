import React, { Component, useContext } from "react";
import { ITarotCard } from "../Interfaces/ICard";
import { viewportContext } from "../Context/ViewportContext";
import "./TarotCard.css";

class Card extends Component<ITarotCard, {}> {
  constructor(props: ITarotCard) {
    super(props);
  }

  useViewportContext() {
    var vp = () => {
      alert(useContext(viewportContext).height);
    };
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
