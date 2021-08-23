import { render } from "@testing-library/react";
import React, { Component, useContext } from "react";
import './FlippingCard.css';
import { Backdrop, Box, Container, createStyles, Fade, FormControl, FormControlLabel, FormGroup, makeStyles, Modal, Switch, Theme } from "@material-ui/core";
import { ITarotCard } from "../Interfaces/ICard";
import majorArcana from "../Data/tarot-cards.json";
import minorArcana from "../Data/minor-arcana.json";
import Button from '@material-ui/core/Button';
import Global from "../Global/Global";

interface Props {
  card?: ITarotCard;
}

class FlippingCard extends Component<Props, { showComponent: boolean; cards: ITarotCard[]; currentCard: ITarotCard; isClicked: boolean, useMinorArcana: boolean }> {
 
 

 
  constructor(props: Props) {
    super(props);

    this.state = {
      showComponent: false,
      cards: [{ imageaddress: "" }],
      currentCard: { imageaddress: "" },
      isClicked: false,
      useMinorArcana: false,
    };
    this.showDescription = this.showDescription.bind(this);
  }

  componentWillMount() {
    //gets called immediately after the constructor, before render()

    const majorArcanaCards: ITarotCard[] = majorArcana.cards;
    const minorArcanaCards: ITarotCard[] = minorArcana.cards;
    let currentCards = majorArcanaCards;

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
    //this.props.isEmpty = false;
    debugger;
    const majorArcanaCards: ITarotCard[] = majorArcana.cards;
    const minorArcanaCards: ITarotCard[] = minorArcana.cards;
    const currentCards = this.state.useMinorArcana ? minorArcanaCards : majorArcanaCards;
    this.setState({
      currentCard: this.getRandomCard(currentCards),
    });
  }

  showDescription = () => {

    this.setState({
      showComponent: !this.state.showComponent,
    });
  }

  spin = () => {
    this.setState({ isClicked: true });
  }

  pullAgain = () => {
    this.setState({ isClicked: false, useMinorArcana: this.context.useMinorArcana });
    this.updateCard();
  }

  useMinorArcana = () => {
    let currVal = this.state.useMinorArcana; 
    this.setState({useMinorArcana: !currVal});  
  }

  render() {
    return (
   <Global.Provider value={{useMinorArcana: this.state.useMinorArcana}}>
          <>
        <div className="card-container" onClick={this.spin}>
          {
            this.state.isClicked ?
              <div className="card-back">

                <img
                  src={this.state.currentCard.imageaddress}
                  alt="img link is broken"
                  onClick={this.showDescription}
                />
                {this.state.showComponent ?
                  <TransitionsModal {...{ card: this.state.currentCard }} /> :
                  null
                }
              </div> :
              <div className="card-front">
                <span className="card-text">
                  Click to show card
                </span>
              </div>
          }
        </div>
        <div className="button">{
          this.state.isClicked ? 
            <div className="bottom-row">
              <Button variant="contained" onClick={this.pullAgain}>Pull Again</Button>
              <span>Click on the card to read its description</span>
            </div> :
            null
        }
        </div>
        </>
</Global.Provider>
    )
  }
}

export default FlippingCard

const modalStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);


function TransitionsModal(card: any) {
  const classes = modalStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {

    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{card.name}</h2>
            <p id="transition-modal-description">{card.description}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

