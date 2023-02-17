import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CartPage = ({ cart, setCart, orders, setOrders }) => {
  const navigate = useNavigate();

  const incrementQuantity = (item) => {
    setCart(
      cart.map((x) =>
        x.index == item.index ? { ...x, quantity: x.quantity + 1 } : x
      )
    );
  };
  const decermentQuantity = (item) => {
    if (item.quantity > 1) {
      setCart(
        cart.map((x) =>
          x.index == item.index ? { ...x, quantity: x.quantity - 1 } : x
        )
      );
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((x) => x.index !== item.index));
  };

  const order = () => {
    setOrders([...orders, cart]);
    navigate("/orders");
    setCart([]);
  };

  return (
    <div className="page">
      <div className="page__inner">
        <button onClick={() => navigate(-1)} className="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <p>Назад</p>
        </button>
        <h1>Корзина</h1>
        {cart.length === 0 && <h3>Корзина пуста</h3>}
        {cart.map((item) => {
          return (
            <div className="cart__item">
              <h3>{item.item.name}</h3>
              <div className="cart__quantity">
                <button onClick={() => decermentQuantity(item)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => incrementQuantity(item)}>+</button>
                <button
                  className="cart__remove"
                  onClick={() => removeFromCart(item)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
        <div className="cart__footer">
          {cart.length !== 0 && (
            <button className="cart__order" onClick={order}>
              Оформить заказ
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
