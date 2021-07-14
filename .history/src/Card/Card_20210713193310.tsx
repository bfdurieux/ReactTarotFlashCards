import { Box, Container } from "@material-ui/core";
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

class TarotCard extends Component<Props, {}> {
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
  }

  // const classes = useStyles();

  /* <Card className={classes.root}> */
 
  render() {
 if(isEmpty){
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
                  />
                </div>
              </Container>
            </CardContent>
          </Card>
        </div>
      </Box>
    );
  }else{
    return(
      //empty card here
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
