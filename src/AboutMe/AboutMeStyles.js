import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#3d626d2b',
        borderRadius: '50px 250px',
        padding: '40px 40px 60px',
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
            borderRadius: '20px 100px',
            marginBottom: '50px',
        },
    },
    description: {
        fontFamily: 'cursive',
        color: 'white',
        fontWeight: 400,
        textAlign: 'left',
        fontSize: '1.9em',
    },
    profileImage: {
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '80px',
            borderRadius: '15px 80px 10px 10px',
        },
    },
}));

export default useStyles;