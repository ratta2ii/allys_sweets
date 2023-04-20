import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import { Paper, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import useStyles from './ContactFormStyles';

const ContactForm = () => {
    const contactForm = useRef();
    const classes = useStyles();
    const [displayForm, setDisplayForm] = useState(true);

    const handleSubmitForm = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            contactForm.current,
            process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                if (result.status === 200) {
                    console.log("RESULT STATUS IS 200");
                }
            }, (error) => {
                console.log(error.text);
            });

        setTimeout(() => {
            setDisplayForm(false);
        }, 500)
    };

    const validate = (values) => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        }
        if (!values.lastName) {
            errors.lastName = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.phone) {
            errors.phone = 'Required';
        }
        return errors;
    };

    return (
        <Box
            id='contact'
            className={classes.root}
            style={{ display: (displayForm) ? 'box' : 'none' }}
        >
            <Typography className={classes.title} variant='h2'>Contact Us</Typography>
            <Box className={classes.form}>
                <Form
                    onSubmit={handleSubmitForm}
                    validate={validate}
                    render={({ form, handleSubmit, reset, submitting, pristine, values }) => (
                        <form
                            ref={contactForm}
                            onSubmit={handleSubmitForm}
                            onReset={reset}
                        >
                            <Paper className={classes.paper} >
                                <Box className={classes.contactInstructions}>
                                    <h2>Please fill out this form and we will get back with you right away.<br />Thank you!</h2>
                                </Box>
                                <Grid container alignItems="flex-start" spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            variant="filled"
                                            color="primary"
                                            fullWidth
                                            required
                                            name="firstName"
                                            component={TextField}
                                            type="text"
                                            label="First Name"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            variant="filled"
                                            fullWidth
                                            required
                                            name="lastName"
                                            component={TextField}
                                            type="text"
                                            label="Last Name"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            variant="filled"
                                            name="email"
                                            fullWidth
                                            required
                                            component={TextField}
                                            type="email"
                                            label="Email"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            variant="filled"
                                            name="phone"
                                            fullWidth
                                            required
                                            component={TextField}
                                            type="phone"
                                            label="Phone Number"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}></Grid>
                                    {/* Message (text area*/}
                                    <Grid item xs={12}>
                                        <Field
                                            fullWidth
                                            name="message"
                                            component={TextField}
                                            multiline
                                            label="Message"
                                            placeholder="Write your message here..."
                                            minRows={6}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    {/*
                                 //? Update buttons and write functionality to reset form ?\\ 
                                */}
                                    {/* Margin */}
                                    <Grid item xs={12} sm={7}></Grid>
                                    <Grid item style={{ marginTop: 20 }}>
                                        <Button
                                            type="button"
                                            variant="contained"
                                            onClick={() => {
                                                form.restart();
                                            }}
                                        // disabled={submitting || pristine}
                                        >
                                            Reset
                                        </Button>
                                    </Grid>
                                    <Grid item style={{ marginTop: 20 }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            disabled={submitting}
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </form>
                    )}
                />
            </Box>
        </Box>
    );
}


export default ContactForm;









