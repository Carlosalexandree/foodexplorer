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

    function removeFromCart(id) {
        setItems((prevItems)=> prevItems.filter((item) => item.id !== id))
    }

    function changeQuantity(id, amount) {
        setItems((prevItems) =>
        prevItems
            .map((item) =>
             item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    return (
        <CartContext.Provider value={{
            items, addToCart, changeQuantity, totalItems, removeFromCart, totalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}