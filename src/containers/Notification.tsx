import React from 'react';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';

export interface State extends SnackbarOrigin {
    open: boolean;
}

const Notification = () => {
    const [state, setState] = React.useState<State>({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return (
        <Snackbar 
            anchorOrigin={{ vertical, horizontal }}
            open = {open}
            onClick = {handleClose}
            message={"This is a test!"}
        />
    );
};

export default Notification;