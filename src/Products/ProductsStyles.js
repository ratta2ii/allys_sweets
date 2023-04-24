import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    card: {
        borderRadius: 30,
        padding: 15,
        [theme.breakpoints.down('sm')]: {
            maxWidth: '400px',
            margin: 'auto',
        },
    },
    productImage: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        [theme.breakpoints.down('xs')]: {
            height: '200px'
        }
    },
    candyTitle: {
        marginTop: '10px',
        fontFamily: `'Permanent Marker', cursive`,
        fontWeight: '400',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.4em',
            marginTop: '10px'
        }
    },
    candyDescription: {
        marginTop: '10px',
        fontFamily: 'system-ui, math, sans-serif',
        fontWeight: '100',
        fontSize: '1.2em',
    },
    candyPrice: {
        fontFamily: 'math',
        fontWeight: '600',
        fontSize: '1.2em',
        color: '#6f6f87',
    },
    shippingMessage: {
        fontFamily: 'math',
        fontWeight: '200',
        marginLeft: '5px',
        fontSize: '.8em',
        color: '#6f6f87',
    }
}));

export default useStyles;