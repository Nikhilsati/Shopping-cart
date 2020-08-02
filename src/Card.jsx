import React, { useContext} from 'react'
import { MyContext } from './App'
import './Card.css'
const Card = (props) => {
    const { cart, setCart } = useContext(MyContext)
    const addToCart = () => {
        setCart([...cart, {
            image: props.image,
            name: props.name,
            price: props.price
        }])
    }
    return (
        <div className="card">
            <img src={props.image} alt = "item"/>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <h3>{props.price}</h3>
            <button onClick={addToCart}>Add</button>
        </div>
    )
}

export default Card
