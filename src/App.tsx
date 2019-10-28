import React from 'react';
import Container from '@material-ui/core/Container';
import 'typeface-roboto';
import Basiclayout from './modules/Basiclayout';
import { Fab, makeStyles, Theme, createStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Notification from './containers/Notification';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    }
  }),
);

const App: React.FC = () => {
  const classes = useStyles();

  const handleAdd = () => {
    // Open the Notification!
  }

  return (
    <Container maxWidth="lg">
        <Notification />
        <Basiclayout />
      <Fab color="secondary" size="large" onClick={handleAdd} aria-label="add" className={classes.root} >
        <AddIcon fontSize="large" />
      </Fab>
    </Container>
  );
}

export default App;
