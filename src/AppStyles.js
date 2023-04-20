import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        overflowX: 'hidden',
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.down('xs')]: {
            padding: '0 5%',
        }
    },
    title: {
        color: 'white',
        fontSize: '4em',
        fontWeight: '600',
        fontFamily: 'cursive',
        marginTop: 200,
        marginBottom: 100,
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }
    },
    candyLogo: {
        width: '100%',
        marginTop: '80px',
        marginBottom: '20px'
    }
}));

export default useStyles;