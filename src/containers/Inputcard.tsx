import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import StringCarddata from '../types/StringCarddata';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            margin: theme.spacing(1),
            padding: theme.spacing(1),
            textAlign: 'center',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.secondary,
        }
    }),
);

const Inputcard = (data: StringCarddata) => {
    const classes = useStyles();
    const [values, setValues] = React.useState<StringCarddata>({
        payload: data.payload,
    });
    
    const handleChange = (payload: keyof StringCarddata) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [payload]: event.target.value});
    };

    return(
        <Grid item>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h1" >
                    {data.cardtitle}
                </Typography>
                <form noValidate autoComplete="off">
                    <TextField
                        id="payload-change"
                        label="Payload"
                        value={values.payload}
                        onChange={handleChange('payload')}
                        margin="normal"
                    />
                </form>
            </Paper>
        </Grid>
    );
}

export default Inputcard;