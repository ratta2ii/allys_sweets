import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from './FooterStyles';
import CandyLogo from './../Assets/Images/2_Transparent_Image.png';

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography className={classes.footerText}>Presented By <img src={CandyLogo} alt='company logo' width='50px' style={{marginBottom: '-10px'}} /> &#169; 2023</Typography>
        </Box>
    );
}

export default Footer;   