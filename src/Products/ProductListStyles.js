import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
            maxWidth: '1200px',
            margin: '0 auto',
            marginBottom: '150px',
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '50px',
        }
    },
    title: {
        fontSize: '4em',
        fontWeight: '600',
        fontFamily: 'cursive',
        marginBottom: '50px',
        color: 'white',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2em',
            marginBottom: '30px',
        }
    },
}));

export default useStyles;