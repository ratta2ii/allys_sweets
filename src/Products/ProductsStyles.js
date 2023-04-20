import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
        }
    },
    card: {
        borderRadius: 30,
        padding: 15,
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
            
        }
    },
    productImage: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
            height: '200px'
        }
    },
    candyTitle: {
        marginTop: '10px',
        fontFamily: 'cursive',
        fontWeight: '600',
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.4em',
            marginTop: '10px'
        }
    },
    candyPrice: {
        float: 'right',
        fontFamily: 'math',
        fontWeight: '200',
    }
}));

export default useStyles;