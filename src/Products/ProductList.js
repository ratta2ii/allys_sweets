import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Product from './Products';
import { masterProductList } from './masterProductList';
import useStyles from './ProductListStyles';


const ProductList = () => {
    const classes = useStyles();
    return (
        <Box id='products' className={classes.root}>
            <Typography variant='h2' className={classes.title}>Our Products</Typography>
            <Grid container
                alignItems="center"
                spacing={6}
                justifyContent="center"
            >
                {masterProductList.map(product => (
                    <Product key={product.id} {...product} />
                ))}
            </Grid>
        </Box>
    );
}

export default ProductList;
