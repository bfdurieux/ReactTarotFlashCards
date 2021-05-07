import React, { Component } from "react";
import "./App.css";
import Card from "./Card/Card";
import DrawButton from "./DrawButton/DrawButton";
import { ITarotCard } from "./Interfaces/ICard";
import data from "./Data/tarot-cards.json";

interface Props {
  updateCard?: () => void;
}

class App extends Component<
  Props,
  { cards: ITarotCard[]; currentCard: ITarotCard }
> {
  constructor(props: Props) {
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [{ imageaddress: "" }],
      currentCard: { imageaddress: "" },
    };
  }

  componentWillMount() {
    //gets called immediately after the constructor, before render()
    const currentCards: ITarotCard[] = data.cards;

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

  render() {
    return (
      <div className="App">
        <div className="cardRow">
          <Card {...this.state.currentCard} />
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard} />
        </div>
      </div>
    );
  }
}
export default App;
