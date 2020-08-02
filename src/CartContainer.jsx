import React from 'react';
import Card from './Card';
import data from './items.json'
const CartContainer = () => {
	return (
		<div className="cart-container">
            {
                data.map(
                    item => <Card
                                key={item.id}
                                image={item.image}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                            />
                )
            }
		</div>
	);
};

export default CartContainer;
