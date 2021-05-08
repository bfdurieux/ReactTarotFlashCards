import React, { Component } from "react";
import Button from "@material-ui/core/Button";

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
        <Button variant="contained" onClick={this.drawCard}>
          Draw Card
        </Button>
      </div>
    );
  }
}

export default DrawButton;

//        <button className="btn" >
