import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 575,
        margin: 'auto',
        marginBottom: '150px',
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '50px',
        },
    },
    form: {
        padding: 15,
        backgroundColor: '#3e626c7d',
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
            margin: '5% auto',
        },
    },
    title: {
        fontSize: '4em',
        fontWeight: '600',
        marginBottom: '50px',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
        },
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
    contactInstructions: {
        fontWeight: 100,
        fontSize: '1em',
        margin: '5% 5% 10%',
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '.6em',
        },
    }
}));


export default useStyles;