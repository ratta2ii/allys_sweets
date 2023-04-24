import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        margin: 'auto',
        marginBottom: '150px',
        [theme.breakpoints.down('md')]: {
            maxWidth: 575,
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '50px',
        },
    },
    form: {
        padding: 15,
        background: `linear-gradient(90deg, rgba(235,175,210, .5) 0%, rgba(240,175,210, .5) 27%, rgba(161,197,201,.5) 100%)`,
        [theme.breakpoints.down('md')]: {
            maxWidth: '550px',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '550px',
            margin: '60px auto 60px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            maxWidth: '420px',
            margin: '12% auto',
        },
        ['@media (max-width:475px)']: {
            width: '100%',
            margin: '0',
        },
    },
    title: {
        fontSize: '4em',
        fontWeight: '400',
        marginBottom: '50px',
        color: '#fff',
        textAlign: 'center',
        fontFamily: `'Permanent Marker', cursive`,
        [theme.breakpoints.down('xs')]: {
            fontSize: '2em',
            marginBottom: '30px',
        }
    },
    paper: {
        padding: '25px',
        backgroundColor: '#eaeaea',
    },
    phoneNumber: {
        color: '#f6961b',
        fontWeight: '600',
        fontSize: '1rem',
    },
    formMessage: {
        fontWeight: 400,
        fontSize: '1em',
        margin: '5% 5% 10%',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.8em',
        },
    }
}));

export default useStyles;