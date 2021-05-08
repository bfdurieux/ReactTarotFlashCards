import React, { Component, createContext } from "react";
import "./App.css";
import Card from "./Card/Card";
import DrawButton from "./DrawButton/DrawButton";
import { ITarotCard } from "./Interfaces/ICard";
import data from "./Data/tarot-cards.json";
import { IViewportSize } from "./Interfaces/IViewportSize";

interface Props {
  updateCard?: () => void;
}

var viewport: IViewportSize;

class App extends Component<
  Props,
  { cards: ITarotCard[]; currentCard: ITarotCard; viewport: IViewportSize }
> {
  constructor(props: Props) {
    super(props);
    this.updateViewportSize = this.updateViewportSize.bind(this);
    this.updateCard = this.updateCard.bind(this);

    viewport = { height: 300, width: 200 };

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
      <div className="App">
        <div className="cardRow">
          <Card {...{ card: this.state.currentCard, viewportSize: viewport }} />
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard} />
        </div>
      </div>
    );
  }
}
export default App;
