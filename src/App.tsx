import React, { Component } from "react";
// import "./App.css";
import Card from "./Card/Card";
import DrawButton from "./DrawButton/DrawButton";
import { ITarotCard } from "./Interfaces/ICard";
import data from "./Data/tarot-cards.json";
import { IViewportSize } from "./Interfaces/IViewportSize";
import { Container } from "@material-ui/core";

interface Props {
  updateCard?: () => void;
}

var viewport: IViewportSize;
var styles = {};

class App extends Component<
  Props,
  { cards: ITarotCard[]; currentCard: ITarotCard; viewport: IViewportSize }
> {
  constructor(props: Props) {
    super(props);
    this.updateViewportSize = this.updateViewportSize.bind(this);
    this.updateCard = this.updateCard.bind(this);

    viewport = { width: window.innerWidth, height: window.innerHeight };
    styles = { width: window.innerWidth - 50, height: window.innerHeight - 30 };

    this.state = {
      cards: [{ imageaddress: "" }],
      currentCard: { imageaddress: "" },
      viewport: viewport,
    };
  }

  componentWillMount() {
    //gets called immediately after the constructor, before render()
    const currentCards: ITarotCard[] = data.cards;
    this.updateViewportSize();
    window.addEventListener("resize", this.updateViewportSize);
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards),
    });
  }

  getRandomCard(currentCards: ITarotCard[]) {
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  }

  updateCard() {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards),
    });
  }

  updateViewportSize() {
    const viewportSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.setState({
      viewport: viewportSize,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateViewportSize);
  }

  render() {
    return (
      // <div className="App" style={styles}>
      <div className="App">
        {/* <div className="cardRow"> */}
        <Container maxWidth="sm">
          <Card {...{ card: this.state.currentCard, viewportSize: viewport }} />
        </Container>
        {/* </div> */}
      </div>
    );
  }
}
export default App;
