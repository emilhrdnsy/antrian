import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import readOutLoud from './function';

// import Loket from './components/loket';

const theme = createMuiTheme({
  typography: {
    fontFamily:"PT Sans",
    htmlFontSize: 8,
  },
});

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(3),
  },
}));


function App() {
   const classes = useStyles();
   const [count, setCount] = useState(0);

   const increment = () => {
     setCount(count + 1);
     readOutLoud(count + 1);
   }

   const decrement = () => {
     if (count > 0 ){
      setCount(count - 1);
      readOutLoud(count - 1 );
     }
  }

   return (
      <>
        <ThemeProvider theme={theme}>
          <Typography><center>ANTRIAN</center></Typography>
          <Divider />

          <Fab variant="extended" aria-label="like" className={classes.fab}>   
            Loket: 1
          </Fab>
          <center>
          <ThemeProvider theme={theme}>
            <Typography style={{fontSize: 244}}>{count}</Typography>
          </ThemeProvider>
      
          <Fab color="secondary" aria-label="vremove" className={classes.fab} onClick={decrement} style={{width: 70, height: 70}}>
            <RemoveIcon />
          </Fab>
          
          <Fab color="primary" aria-label="add" className={classes.fab} onClick={increment} style={{width: 70, height: 70}}>
            <AddIcon />
          </Fab>
          </center>
          
        </ThemeProvider>
      </>
   );
}


export default App;