import React, { Component } from "react";
import Switch from '@material-ui/core/Switch';
import { FormControl, FormGroup, FormControlLabel } from '@material-ui/core';
import Global from "../Global/Global";

function Switches(){
    
    const [state, setState] = React.useState({
        useDarkTheme: false,
        useMinorArcana: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

    return (

<Global.Provider value={{useMinorArcana: state.useMinorArcana}}>
<>
  <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
        <FormControlLabel
        control={
          <Switch
            checked={state.useMinorArcana}
            onChange={handleChange}
            name="useMinorArcana"
            color="primary"
          />
        }
        label="Minor Arcana"
      />
        </FormGroup>
      </FormControl>
</>
      </Global.Provider>
    );
}

    export default Switches;
    
//   render() {
//     return (
//       <Provider
//         value={{ theme: this.state.useDarkTheme, toggleTheme: this.toggleTheme }}
//       >
//         {this.props.children}
//       </Provider>
//     );
//   }




// export default function Switches() {
//   const [state, setState] = React.useState({
//     checkedA: true,
//     checkedB: true,
//   });

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };

  
//     return (
//   <FormControl component="fieldset">
//         <FormGroup aria-label="position" row>
//           <FormControlLabel
//             value="end"
//             control={<Switch color="primary" />}
//             label="Minor Arcana"
//             labelPlacement="end"
//             checked={state.checkedA}
//           />
//         </FormGroup>
//       </FormControl>
//     );
//   }
  