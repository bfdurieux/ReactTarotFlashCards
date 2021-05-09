import React, { Component } from "react";
import Button from "@material-ui/core/Button";

interface Props {
  drawCard: () => void;
}

var styles = {};

class DrawButton extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.drawCard = this.drawCard.bind(this);
    styles = {
      margin: 5,
    };
  }

  drawCard() {
    this.props.drawCard();
  }

  render() {
    return (
      <div className="buttonContainer">
        <Button variant="contained" onClick={this.drawCard} style={styles}>
          Draw Card
        </Button>
      </div>
    );
  }
}

export default DrawButton;

//        <button className="btn" >
