import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Roboto',
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
        },
    },
    description: {
        color: 'white',
        fontWeight: 400,
        textAlign: 'left',
        fontSize: '1.9em',
    },
}));

const BackgroundDetails = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography className={classes.description} style={{fontFamily: 'cursive'}}>
                My name is Ally, I am 10 years old. I have been selling freeze dried candy for almost two years and I’m now officially launching “Ally’s Sweets”.
                I run a small business with the help from my mom, grandma, and brother. I am saving for school tuition, a trip India in 2024, and putting money
                in my savings for my future. I hope that Ally’s Sweet’s makes my customers happy and brings a smile to their faces. Thank you!
            </Typography>
        </Box>
    );
}

export default BackgroundDetails;   