import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '1300px',
        margin: '0 auto',
        backgroundColor: '#ee3b9d61',
        borderRadius: '50px 250px',
        padding: '40px 40px 40px',
        marginBottom: '150px',
        [theme.breakpoints.down('lg')]: {
            maxWidth: '1100px',
        },
        [theme.breakpoints.down('md')]: {
            padding: '100px',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '650px',
            padding: '40px 40px 60px',
            borderRadius: '20px 100px',
            marginBottom: '150px',
        },
        [theme.breakpoints.down('xs')]: {
            borderRadius: '20px 100px',
            marginBottom: '100px',
        },
    },
    profileImage: {
        width: '100%',
        borderRadius: '31px 10px 10px 220px',
        [theme.breakpoints.down('md')]: {
            borderRadius: '31px 10px 10px 165px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '80px',
            borderRadius: '15px 80px 10px 10px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '80px',
            borderRadius: '15px 80px 10px 10px',
        },
    },
    details: {
        padding: '0 50px',
        fontFamily: 'system-ui, math, sans-serif',
        color: 'white',
        fontWeight: 400,
        textAlign: 'left',
        fontSize: '1.7em',
        [theme.breakpoints.down('lg')]: {
            padding: '0 75px',
            fontSize: '1.5em',
        },
        [theme.breakpoints.down('md')]: {
            padding: '0',
            fontSize: '1.3em',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5em',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0 10px',
            fontSize: '1.2em',
        },
    },
    thankYouSpan: {
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
        },
    }
}));

export default useStyles;