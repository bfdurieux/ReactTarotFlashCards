import { Backdrop, Box, Container, createStyles, Fade, makeStyles, Modal, Theme } from "@material-ui/core";
import React, { Component } from "react";
import { ITarotCard } from "../Interfaces/ICard";
import { IViewportSize } from "../Interfaces/IViewportSize";
import "./TarotCard.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

interface Props {
  card: ITarotCard;
  viewportSize: IViewportSize;
  isEmpty: boolean;
}

var styles = {};
var mui = {};
var view = {};


class TarotCard extends Component<Props, {showComponent: boolean}> {
  constructor(props: Props) {
    super(props);
    styles = {
      height: props.viewportSize.height - 130,
    };
    mui = {
      width: "min-content",
    };
    view = {
      height: props.viewportSize.height - 130,
      width: "min-content",
    };
    this.state = {
      showComponent: false,
    };
    this.showDescription  = this.showDescription.bind(this);
  }

  showDescription = () => {
    this.setState({
      showComponent: true,
    });
  }

  // const classes = useStyles();

  /* <Card className={classes.root}> */

  render() {
    if (!this.props.isEmpty) {
      return (
        <Box bgcolor="green" display="flex" width="min-content">
          <div className="card-container" style={view}>
            <Card className="card-ui" style={view}>
              <CardContent>
                <Container maxWidth={false}>
                  <div className="front">
                    <img
                      src={this.props.card.imageaddress}
                      alt="img link is broken"
                      style={styles}
                      onClick={this.showDescription}
                    />
                    {this.state.showComponent ?
                      <TransitionsModal /> :
                        null
                    }
                  </div>
                </Container>
              </CardContent>
            </Card>
          </div>
        </Box>
      )
    } else {
      return (
        <Box bgcolor="green" display="flex" width="min-content">
          <div className="card-container" style={view}>
            
          </div>
        </Box>
      )
    }
  }
}

export default TarotCard;

/*
<div className="card-container" style={styles}>
   <div className="card" style={styles}>
     <div className="front" style={styles}>
       <div className="eng" style={styles}>
 <div className="card-container">
   <div className="card">
     <div className="front">
       <div className="eng">
        <img
          src={this.props.card.imageaddress}
          alt="img link is broken"
        />
       </div>
     </div>
    { <div className="back" style={styles}> }
     <div className="back">
      <div className="han">{this.props.card.name}</div>
      <div className="pin">{this.props.card.description}</div>
     </div>
   </div>
 </div>
 */

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

 function TransitionsModal() {
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
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
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
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
