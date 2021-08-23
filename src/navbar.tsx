import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppBar, Box, FormControl, FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import SingleSpread from './Spreads/SingleSpread/SingleSpread';
import ThreeSpread from './Spreads/ThreeSpread/ThreeSpread';
import Footer from './Footer/Footer';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    color: 'red',
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Single" />
        <Tab label="Three"  />
        <Tab label="Celtic Cross"  />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Single></Single>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Three></Three>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Celtic></Celtic>
      </TabPanel>
      
    <div className="footer">
      <Footer></Footer>
    </div>
    </div>
    </>
  );
}

function Single() {
    return (
      <div >
        <SingleSpread></SingleSpread>
      </div>
    );
  }
  
  function Three() {
    return (      
      <div>
        <ThreeSpread></ThreeSpread>
      </div>
    );
  }
  
  
  function Celtic() {
    return (
      <Paper>
        <div>Item two</div>
      </Paper>
    );
  }
  interface Props{
    children: any;
    value:any;
    index:any;
  }

  function TabPanel(props:Props) {
    const { children, value, index } = props;
    return (
      <div>
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  }

