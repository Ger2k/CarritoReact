import "./Cart.css"
import { useId,useState,useEffect } from "react";
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from "../hooks/useCart";


function CartItem({ thumbnail, price, title, quantity, addToCart }) {
    return (
        <li>
            <img 
                src={thumbnail} 
                alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart () {

    const cartCheckboxId = useId()
    const { cart,clearCart, addToCart } = useCart()

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
        setTotalPrice(total);
    }, [cart]);

    return (
    <>
        <label className="cart-button" htmlFor={cartCheckboxId} >
            <CartIcon />
        </label>
        <input id={cartCheckboxId} type="checkbox" hidden />
        <aside className="cart">
            <ul>
                {cart.map(product => (
                        <CartItem
                        key={product.id}
                        addToCart={() => addToCart(product)}
                        {...product}
                    />
                ))}
            </ul>
            <p>Total: {totalPrice}$</p>
            <button onClick={clearCart}>
                <ClearCartIcon />
            </button>
        </aside>
    </>
    )
}