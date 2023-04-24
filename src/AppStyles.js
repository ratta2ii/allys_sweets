import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        overflowX: 'hidden',
        [theme.breakpoints.down('lg')]: {
            padding: '0 5%',
        },
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '50px',
        },
        [theme.breakpoints.down('xs')]: {
        }
    },
    title: {
        color: 'white',
        fontSize: '4em',
        fontWeight: '600',
        fontFamily: `'Permanent Marker', cursive`,
        marginTop: 200,
        marginBottom: 100,
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }
    },
    candyLogo: {
        width: '20%',
        marginLeft: '40%',
        marginTop: '150px',
        marginBottom: '60px',
        [theme.breakpoints.down('lg')]: {
            marginTop: '130px',
            marginBottom: '50px',
            width: '40%',
            marginLeft: '30%',
        },
        [theme.breakpoints.down('md')]: {
            marginTop: '150px',
            marginBottom: '50px',

        },
        [theme.breakpoints.down('sm')]: {
            width: '40%',
            marginLeft: '30%',
            marginTop: '150px',
            marginBottom: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '70%',
            marginLeft: '15%',
            marginTop: '100px',
            marginBottom: '30px',
        }
    }
}));

export default useStyles;