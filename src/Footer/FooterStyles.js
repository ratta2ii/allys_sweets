import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        left: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: '#3e626c7d',
        color: 'white',
        textAlign: 'center',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        clear: 'both',
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
        },
        ['@media (max-width:475px)']: {
        },
    },
    footerText: {
        fontFamily: 'monospace',
    },
}));

export default useStyles;