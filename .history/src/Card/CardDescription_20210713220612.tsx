import { Backdrop } from "@material-ui/core";
import React, { Component } from "react";

class CardDescription extends Component{

    render(){
        return(
            <div>
                <SimpleBackdrop></SimpleBackdrop>
            </div>
        );
    }

}
export default CardDescription;


 function SimpleBackdrop() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };
  
    return (
      <div>
        <Backdrop open={open} onClick={handleClose}>
        </Backdrop>
      </div>
    );
  }