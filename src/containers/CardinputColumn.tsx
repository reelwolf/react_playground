import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Inputcard from './Inputcard';
import { MultiStringcardContext } from '../contexts/CardContexts';

const CardinputColumn = () => {
    const content = useContext(MultiStringcardContext);
    let cardlist = content.map( (context, index) => {
        return <Inputcard {...context} key={index} />
    });

    return (
        <Grid item xs={3}>
            <Grid container direction="column" justify="flex-start" alignItems="stretch">
                {cardlist}
            </Grid>
        </Grid>
    );
}

export default CardinputColumn;