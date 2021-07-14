import { Backdrop } from "@material-ui/core";
import React, { Component } from "react";

class CardDescription extends Component{

    render(){
        var open = true;
        const setOpen = (state: boolean) => {open = state};
        var handleClose = () => { setOpen(false); }
        return(
            <div>
                <Backdrop open={open} onClick={handleClose}></Backdrop>
            </div>
        );
    }

}
export default CardDescription;