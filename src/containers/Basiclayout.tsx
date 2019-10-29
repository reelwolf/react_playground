import React from 'react';
import Grid from '@material-ui/core/Grid';
import Outputcard from './Outputcard';
import CardoutputColumn from './CardoutputColumn';
import CardinputColumn from './CardinputColumn';

const Basiclayout = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={1}>
            <CardinputColumn />
            <Grid item xs={6}>
                <Grid container direction="column" justify="flex-start" alignItems="stretch">
                    <Outputcard cardtitle="Hardcoded" payload="In case I need it... :D" />
                </Grid>
            </Grid>
            <CardoutputColumn />
        </Grid>
    );
}

export default Basiclayout;