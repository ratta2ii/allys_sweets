import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import { Paper, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import "./styles.css";
import useStyles from './ContactFormStyles';

const ContactForm = () => {
    let contactForm = useRef();
    const classes = useStyles();
    const [formMessage, setFormMessage] = useState("We offer FREE DELIVERY within a reasonable distance of CDA/Spokane Valley area. All other orders will be charged for shipping at cost. Please contact us here and someone will be with you shortly. Thank you for your patience.");

    const handleSubmitForm = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            contactForm.current,
            process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                if (result.status === 200) {
                    setFormMessage("Your form has been sent successfully. Thank you!")
                }
            }, (error) => {
                console.log(error.text);
                setFormMessage("There was a problem submitting your form. Please TRY AGAIN!")
            });
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
        >
            <Typography className={classes.title} variant='h2'>Contact Us</Typography>
            <Box className={classes.form}>
                <Form
                    onSubmit={handleSubmitForm}
                    initialValues={{ employed: true }}
                    validate={validate}
                    render={({ form, handleSubmit, reset, restart, submitting, pristine, values }) => (
                        <form
                            id='contact-form'
                            ref={contactForm}
                            onReset={reset}
                            onSubmit={async event => {
                                await handleSubmitForm(event);
                                form.restart();
                            }}
                        >
                            <Paper className={classes.paper} >
                                <Typography
                                    className='blink'
                                    style={{
                                        textAlign: 'center',
                                        fontWeight: '600',
                                        display: (formMessage.length < 150) ? 'none' : 'box',
                                    }}>
                                    PLEASE READ BELOW!
                                </Typography>
                                <Box
                                    className={classes.formMessage}
                                    style={{fontWeight: (formMessage.length < 150) ? '600' : '400'}}
                                >
                                    {formMessage}
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









