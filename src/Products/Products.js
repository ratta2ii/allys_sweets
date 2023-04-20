import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import useStyles from './ProductsStyles';

const Product = (props) => {
    const classes = useStyles();

    const { id,
        title,
        subTitle,
        productImage,
        description,
        price } = props;

    return (
        <Grid item alignItems="center" justifyContent="center" xs={12} sm={6}>
            <Card className={classes.card}>
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
                            <span className={classes.candyPrice}>${price}</span>
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default Product;