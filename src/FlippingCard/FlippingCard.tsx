import { render } from "@testing-library/react";
import React, { Component } from "react";
import './FlippingCard.css';
import { Backdrop, Box, Container, createStyles, Fade, makeStyles, Modal, Theme } from "@material-ui/core";
import { ITarotCard } from "../Interfaces/ICard";
import data from "../Data/tarot-cards.json";
import Button from '@material-ui/core/Button';

interface Props {
    isEmpty: boolean;
    card:ITarotCard;
}

class FlippingCard extends Component<Props, { showComponent: boolean; cards: ITarotCard[]; currentCard: ITarotCard; isClicked:boolean}> {
    constructor(props: Props) {
        super(props);
        
        
        this.state = {
            showComponent: false,
            cards: [{ imageaddress: "" }],
            currentCard: { imageaddress: "" },
            isClicked: false
          };
          this.showDescription  = this.showDescription.bind(this);
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
        //this.props.isEmpty = false;
        const currentCards = this.state.cards;
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
        this.setState({isClicked: true});
      }

      pullAgain = () => {
        this.setState({isClicked: false});
        this.updateCard();
      }

    render(){
      return(
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
                <TransitionsModal {...{isEmpty:false, card:this.state.currentCard}} /> :
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
          <Button variant="contained" onClick={this.pullAgain}>Pull Again</Button> :
          null
        }
        </div>
        </>
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


function TransitionsModal(props:Props) {
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
              <h2 id="transition-modal-title">{props.card.name}</h2>
              <p id="transition-modal-description">{props.card.description}</p>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }

//This should include the randomizing logic and flip the card on clicking
//maybe copy from example code used as template
