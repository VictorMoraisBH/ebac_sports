    import React from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { RootState } from '../store/store';
    import { addItem, removeItem } from '../features/cart/cartSlice';

    const CartComponent = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);

    const handleAddItem = (id: number) => {
        const item = items.find((item) => item.id === id);
        if (item) {
        dispatch(addItem({ ...item, quantity: 1 }));
        }
    };

    const handleRemoveItem = (id: number) => {
        dispatch(removeItem(id)); 
    };

    return (
        <div>
        <h2>Itens no Carrinho</h2>
        {items.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
        ) : (
            <ul>
            {items.map((item) => (
                <li key={item.id}>
                {item.name} - {item.quantity} x R$ {item.price}
                <button onClick={() => handleAddItem(item.id)}>Adicionar</button>
                <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
                </li>
            ))}
            </ul>
        )}
        </div>
    );
    };

    export default CartComponent;
