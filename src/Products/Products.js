import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import useStyles from './ProductsStyles';

const Product = (props) => {
    const classes = useStyles();

    const { 
        id,
        title,
        productImage,
        description,
        price } = props;

    return (
        <Grid item xs={12} md={6}>
            <Card key={id} className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.productImage}
                        component="img"
                        height="320"
                        image={productImage}
                        alt="product image"
                    />
                    <CardContent>
                        <Typography className={classes.candyTitle} gutterBottom variant="h6">
                            {title}
                        </Typography>
                        <Typography className={classes.candyDescription} gutterBottom variant="h6">
                            {description}
                            <br/>
                            <br/>
                            <span className={classes.candyPrice}>{price} </span>
                            <span className={classes.shippingMessage}>(+ Shipping at cost where applicable)</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default Product;