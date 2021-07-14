import { Backdrop } from "@material-ui/core";
import React, { Component } from "react";

class CardDescription extends Component{

    render(){
        var open:boolean = true;
        return(
            <div>
                <Backdrop open={open} onClick={()=>{open = false}}></Backdrop>
            </div>
        );
    }

}
export default CardDescription;