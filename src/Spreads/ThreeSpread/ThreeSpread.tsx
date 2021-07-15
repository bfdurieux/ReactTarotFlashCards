import React, { Component } from "react";
import TarotCard from "../../Card/Card";
import { ITarotCard } from "../../Interfaces/ICard";
import data from "../../Data/tarot-cards.json";
import DrawButton from "../../DrawButton/DrawButton";

interface Props {
    updateCard?: () => void;
}

var isEmpty1: boolean;
var isEmpty2: boolean;
var isEmpty3: boolean;

class ThreeSpread extends Component<
    Props,
    { cards: ITarotCard[]; currentCard1: ITarotCard; currentCard2: ITarotCard; currentCard3: ITarotCard; }
> {
    constructor(props: Props) {
        super(props);

        this.updateCard1 = this.updateCard1.bind(this);
        this.updateCard2 = this.updateCard2.bind(this);
        this.updateCard3 = this.updateCard2.bind(this);
        isEmpty1 = true;
        isEmpty2 = true;
        isEmpty3 = true;

        this.state = {
            cards: [{ imageaddress: "" }],
            currentCard1: { imageaddress: "" },
            currentCard2: { imageaddress: "" },
            currentCard3: { imageaddress: "" }
        };
    }

    componentWillMount() {
        //gets called immediately after the constructor, before render()
        const currentCards: ITarotCard[] = data.cards;

        this.setState({
            cards: currentCards,
            currentCard1: this.getRandomCard(currentCards),
            currentCard2: this.getRandomCard(currentCards),
            currentCard3: this.getRandomCard(currentCards),
        });
    }


    getRandomCard(currentCards: ITarotCard[]) {
        var card = currentCards[Math.floor(Math.random() * currentCards.length)];
        return card;
    }

    updateCard1() {
        const currentCards = this.state.cards;
        isEmpty1 = false;
        this.setState({
            currentCard1: this.getRandomCard(currentCards),
        });
    }
    updateCard2() {
        const currentCards = this.state.cards;

        isEmpty2 = false;
        this.setState({
            currentCard2: this.getRandomCard(currentCards),
        });
    }
    updateCard3() {
        const currentCards = this.state.cards;
        isEmpty3 = false;
        this.setState({

            currentCard3: this.getRandomCard(currentCards),
        });
    }

    render() {
        return (
            <>
                <div className="card1">
                    <TarotCard {...{ card: this.state.currentCard1, isEmpty: isEmpty1 }}></TarotCard>
                    <DrawButton drawCard={this.updateCard1} />
                </div>
                <div className="card2">
                    <TarotCard {...{ card: this.state.currentCard2, isEmpty: isEmpty2 }}></TarotCard>
                    <DrawButton drawCard={this.updateCard2} />
                </div>
                <div className="card3">
                    <TarotCard {...{ card: this.state.currentCard3, isEmpty: isEmpty3 }}></TarotCard>
                    <DrawButton drawCard={this.updateCard3} />
                </div>
            </>
        );
    }
}

export default ThreeSpread;