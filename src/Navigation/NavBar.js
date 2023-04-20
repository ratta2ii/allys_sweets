import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HashLink as Link } from 'react-router-hash-link';
import CandyLogo from './../Assets/Images/candyLogo.jpg';
// import FacebookIcon from '@mui/icons-material/Facebook';
import FacebookIcon from './../Assets/Images/facebook-icon.webp';

const drawerWidth = 240;

function NavBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#f4f2f2' }}>
            <img
                src={CandyLogo}
                alt='candy logo'
                style={{
                    width: '150px',
                    marginTop: '8px'
                }}
            />
            <Divider />
            <List>
                <ListItem>
                    <Link to='#home'>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary='Home' />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to='#products'>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary='Products' />
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to='#contact'>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary='Contact' />
                        </ListItemButton>
                    </Link>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" style={{ backgroundColor: '#3d626d' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <a href="https://www.facebook.com/AllysFreezeDriedSweet/">
                            <img src={FacebookIcon} alt='facebook icon' style={{marginTop: 9}} />
                        </a>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button onClick={scrollToTop} sx={{ color: '#fff' }}>
                            Home
                        </Button>
                        <a href='#products'>
                            <Button sx={{ color: '#fff' }}>
                                Products
                            </Button>
                        </a>
                        <a href='#contact'>
                            <Button sx={{ color: '#fff' }}>
                                Contact
                            </Button>
                        </a>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

NavBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default NavBar;