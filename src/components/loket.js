import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
}));

export default function Loket() {
  const classes = useStyles();

  return (
    <div>
      <Fab variant="extended" aria-label="like" className={classes.fab}>   
        Loket:
      </Fab>
    </div>
  );
}