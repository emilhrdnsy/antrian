import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import App from '../App';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(4),
  },
}));

export default function TombolPlus() {
  const classes = useStyles();

  return (
    <div>
      <center>
        <Fab color="secondary" aria-label="remove" className={classes.fab}>
          <RemoveIcon />
        </Fab>
        <Fab color="primary" aria-label="add" className={classes.fab} onClick={increment}>
          <AddIcon />
        </Fab>
      </center>
    </div>
  );
}