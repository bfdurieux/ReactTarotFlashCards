import { Backdrop } from "@material-ui/core";
import React, { Component } from "react";

class CardDescription extends Component{

    render(){
        const [open, setOpen] = React.useState(false);
        const handleClose = () => {
          setOpen(false);
        };
        const handleToggle = () => {
          setOpen(!open);
        };

        return(
            <div>
                <Backdrop open={open} onClick={handleClose}></Backdrop>
            </div>
        );
    }

}
export default CardDescription;