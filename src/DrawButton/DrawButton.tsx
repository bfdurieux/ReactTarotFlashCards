import React, { Component } from "react";

interface Props {
  drawCard: () => void;
}

class DrawButton extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.drawCard = this.drawCard.bind(this);
  }

  drawCard() {
    this.props.drawCard();
  }

  render() {
    return (
      <div className="buttonContainer">
        <button className="btn" onClick={this.drawCard}>
          Draw Card
        </button>
      </div>
    );
  }
}

export default DrawButton;
