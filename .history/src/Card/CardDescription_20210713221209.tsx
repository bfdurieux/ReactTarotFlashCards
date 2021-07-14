import { Backdrop, createStyles, Fade, makeStyles, Modal, Theme } from "@material-ui/core";
import React, { Component } from "react";

const useStyles = makeStyles((theme: Theme) =>
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

class CardDescription extends Component{

    render(){
        return(
            <div>
                <TransitionsModal></TransitionsModal>
            </div>
        );
    }

}
export default CardDescription;

function TransitionsModal() {
    const classes = useStyles();
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