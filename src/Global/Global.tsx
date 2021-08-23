import React from "react";

const globals = React.createContext({useMinorArcana:false});

export default globals;


// const { Provider, Consumer } = React.createContext({useDarkTheme:false, useMinorArcana:false, toggle: () => {}});
// const Globals = React.createContext({ useDarkTheme:false, useMinorArcana:false, toggle: () => {}});
// export default Globals;

// interface Props{
// }

// export class GlobalProviderContext extends Component<Props, { useDarkTheme:boolean, useMinorArcana: boolean}> {
    
//     constructor(props: Props) {
//         super(props);
    
//         this.state = {
//           useDarkTheme: false,
//           useMinorArcana: false
//         };
//         // this.toggle = this.toggle.bind(this);
//       }

//   toggle = () => {
//     this.setState(prevState => {
//       return {
//         useMinorArcana: !prevState.useMinorArcana
//       };
//     });
//   };


//   render(){
//     return (
//         <Provider
//         value={{ useDarkTheme: false, useMinorArcana: this.state.useMinorArcana, toggle: this.toggle }}
//       >
//         {this.props.children}
//       </Provider>
//     );
//     }
// }
//     export { Provider as GlobalProvider, Consumer as GlobalConsumer };
