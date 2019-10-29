import React from 'react';
import Grid from '@material-ui/core/Grid';
import Inputcard from './Inputcard';
import Outputcard from './Outputcard';
import StringCarddata from '../types/StringCarddata';

const Basiclayout = () => {
    let newCardContent = new StringCarddata();
    let anotherCardContent = new StringCarddata();

    newCardContent = {
        cardtitle: "Card# 1",
        payload: "This is the content of this card.",
    };
    anotherCardContent = {
        cardtitle: "Card# 2",
        payload: "Lorem ipsum dolor!",
    };

    return(
        <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={1}>
            <Grid container direction="column" justify="flex-start" alignItems="stretch" xs={3}>
                <Inputcard {...newCardContent} />
                <Outputcard {...anotherCardContent} />
                <Inputcard {...newCardContent} />
            </Grid>
            <Grid container direction="column" justify="flex-start" alignItems="stretch" xs={6}>
                <Outputcard cardtitle="Hardcoded" payload="In case I need it... :D" />
            </Grid>
            <Grid container direction="column" justify="flex-start" alignItems="stretch" xs={3}>
                <Outputcard {...newCardContent} />
                <Inputcard {...anotherCardContent} />
                <Outputcard {...newCardContent} />
            </Grid>
        </Grid>
    );
}

export default Basiclayout;