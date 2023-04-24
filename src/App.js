import { Box } from '@material-ui/core';
import ContactForm from './ContactUs/ContactForm';
import ProductList from './Products/ProductList';
import NavBar from './Navigation/NavBar';
import AboutMe from './AboutMe/AboutMe';
import Footer from './Footer/Footer';
import useStyles from './AppStyles';
import CandyLogo from './Assets/Images/2_Transparent_Image.png';

function App() {
    const classes = useStyles();
    return (
        <>
            <NavBar />
            <Box className={classes.root}>
                <img src={CandyLogo} className={classes.candyLogo} alt='candy logo' />
                <AboutMe />
                <ProductList />
                <ContactForm />
            </Box>
            <Footer />
        </>
    );
}

export default App;
