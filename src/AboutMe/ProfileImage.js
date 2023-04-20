import React from "react";
import { Box } from "@material-ui/core";
import profileImage from './../Assets/Images/profile_image2.jpg';
import useStyles from "./AboutMeStyles";

const ProfileImage = () => {
    const classes = useStyles();
    return (
        <Box>
            <img src={profileImage} className={classes.profileImage} alt='profile_image' />
        </Box>
    );
}

export default ProfileImage;   