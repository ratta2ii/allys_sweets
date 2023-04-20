import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
            maxWidth: '1200px',
            margin: '0 auto',
            marginBottom: '150px',
            [theme.breakpoints.down('md')]: {
                padding: '0 5%',
            },
            [theme.breakpoints.down('sm')]: {
            padding: '0',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '100px',
        }
    },
    title: {
        fontSize: '4em',
        fontWeight: '600',
        fontFamily: 'sans-serif',
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