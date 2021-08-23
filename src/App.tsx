import React, { Component } from "react";
import "./App.css";
import { IViewportSize } from "./Interfaces/IViewportSize";
import { Container, ThemeProvider } from "@material-ui/core";
import SingleSpread from "./Spreads/SingleSpread/SingleSpread";
import CenteredTabs from "./navbar";
import { lightTheme } from "./theme";


interface Props {
  updateCard?: () => void;
}

var viewport: IViewportSize;
var styles = {};
var isEmpty: boolean;

class App extends Component<
  Props,
  {}
> {
  constructor(props: Props) {
    super(props);
   
  }

  componentWillMount() {
    //gets called immediately after the constructor, before render()

  }

  render() {
    return (
      // <div className="App" style={styles}>

      <div className="App">
        <CenteredTabs></CenteredTabs>
        {/* <div className="cardRow"> */}

        {/* </div> */}
      </div>
    );
  }
}
export default App;
