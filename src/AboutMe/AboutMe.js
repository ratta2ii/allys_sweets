import { Box, Grid } from "@material-ui/core";
import React from "react";
import ProfileImage from "./ProfileImage";
import BackgroundDetails from "./BackgroundDetails";
import useStyles from "./AboutMeStyles";

const AboutMe = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root} >
            <Grid container
                alignItems="center"
                spacing={6}
                justifyContent="center"
            >
                <Grid item xs={12} md={5}>
                    <ProfileImage />
                </Grid>
                <Grid item xs={12} md={7}>
                    <BackgroundDetails />
                </Grid>
            </Grid>
        </Box>
    );
}

export default AboutMe;   