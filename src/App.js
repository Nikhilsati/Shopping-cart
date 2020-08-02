import React, { useState, createContext } from 'react';
import './App.css';
import CartContainer from './CartContainer';
import Cart from './Cart';
import CartItem from './CartItem';
export const MyContext = createContext(null);
function App() {
	const [ cart, setCart ] = useState([]);
	return (
		<div>
			<MyContext.Provider value={{cart, setCart}}>
				<CartContainer />
				<Cart>
            {
              cart.map(
                item => <CartItem
                  name = {item.name}
                  price = {item.price}
                  image = {item.image}
                 />
              )
            }
				</Cart>
			</MyContext.Provider>
		</div>
	);
}

export default App;
