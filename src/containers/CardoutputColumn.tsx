import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Outputcard from './Outputcard';
import { MultiStringcardContext } from '../contexts/CardContexts';

const CardoutputColumn = () => {
    const content = useContext(MultiStringcardContext);
    let cardlist = content.map( (context, index) => {
        return <Outputcard {...context} key={index} />
    });

    return (
        <Grid item xs={3}>
            <Grid container direction="column" justify="flex-start" alignItems="stretch">
                {cardlist}
            </Grid>
        </Grid>
    );
}

export default CardoutputColumn;