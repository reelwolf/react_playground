import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import StringCarddata from '../types/StringCarddata';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            margin: theme.spacing(1),
            padding: theme.spacing(1),
            textAlign: 'center',
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.text.secondary,
        }
    }),
);

const Outputcard = (data: StringCarddata) => {
    const classes = useStyles();
    return(
        <Grid item>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h1" >
                    {data.cardtitle}
                </Typography>
                <Typography variant="body1" component="p">
                    {data.payload}
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Outputcard;