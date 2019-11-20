import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const theme = createMuiTheme({
  typography: {
    fontFamily:"PT Sans",
    htmlFontSize: 1.8,
  },
});


class Angka extends Component {
 render() {
   return (
      <>
        <ThemeProvider theme={theme}>
          <Typography><center>{angka}</center></Typography>
        </ThemeProvider>
      </>
   );
 }
}


export default Angka;