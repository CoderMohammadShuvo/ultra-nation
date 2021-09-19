import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const population = cart.reduce((sum, country) => sum + country.population, 0)
    return (
        <div>
            <h3>Total Population: {population}</h3>
        </div>
    );
};

export default Cart;