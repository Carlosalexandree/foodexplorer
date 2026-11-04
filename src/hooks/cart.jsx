import { title } from "process";
import { createContext, useContext, useState } from "react";

const CartContext = createContext({})

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    function addToCart(dish, quantity) {
        setItems((prevItems) => {
            const exists = prevItems.find((item) => item.id === dish.id)

            if (exists) {
                return prevItems.map((item) =>
                    item.id === dish.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [
                ...prevItems,
                { id: dish.id, title: dish.title, price: dish.price, image: dish.image, quantity },
            ];
        });
    }

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    
    return (
        <CartContext.Provider value={{
            items, addToCart, totalItems
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}