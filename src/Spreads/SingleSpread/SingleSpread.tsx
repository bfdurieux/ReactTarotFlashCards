import React, { Component } from "react";
import { Container } from "@material-ui/core";
import TarotCard from "../../Card/Card";
import DrawButton from "../../DrawButton/DrawButton";
import { ITarotCard } from "../../Interfaces/ICard";
import data from "../../Data/tarot-cards.json";


interface Props {
  updateCard?: () => void;
}

var styles = {};
var isEmpty: boolean;

class SingleSpread extends Component<
  Props,
  { cards: ITarotCard[]; currentCard: ITarotCard; }
> {
  constructor(props: Props) {
    super(props);

    this.updateCard = this.updateCard.bind(this);
    isEmpty = true;

    styles = { width: window.innerWidth - 50, height: window.innerHeight - 30 };

    this.state = {
      cards: [{ imageaddress: "" }],
      currentCard: { imageaddress: "" }
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
    isEmpty = false;
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards),
    });
  }

  render() {
    return (
      // <div className="App" style={styles}>
      <div className="Single">
        {/* <div className="cardRow"> */}
        <Container maxWidth="sm">
          <TarotCard {...{ card: this.state.currentCard, isEmpty }} />
          <DrawButton drawCard={this.updateCard} />
        </Container>
        {/* </div> */}
      </div>
    );
  }
}
export default SingleSpread;
