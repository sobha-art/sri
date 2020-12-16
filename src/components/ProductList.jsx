import React from 'react';
import './productgrid.css';
import {Product} from './Product';

export const ProductList=(props)=>(
    <div className='prod-grid'>
        {props.products.map(product=>(
        <Product key={product.id} name={product.name} price={product.price}>
            </Product>
        ))}
</div>
)
