import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import useStyles from "./AboutMeStyles";

const BackgroundDetails = () => {
    const classes = useStyles();
    return (
        <Box>
            <p className={classes.details}>
                My name is Ally, I am 10 years old. I have been selling freeze dried candy for almost two years and I’m now officially launching “Ally’s Sweets”.
                I run a small business with the help from my mom, grandma, and brother. I am saving for school tuition, a trip India in 2024, and putting money
                in my savings for my future. I hope that Ally’s Sweet’s makes my customers happy and brings a smile to their faces.
                <br/>
                <br/>
                <span className={classes.thankYouSpan}>
                    Thank you for your support!
                </span> 
            </p>
        </Box>
    );
}

export default BackgroundDetails;   