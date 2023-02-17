import React from "react";
import Loader from "../components/Loader";

const HomePage = ({ loading, pets, isAuth, cart, setCart }) => {
  if (loading) {
    return <Loader />;
  }

  const addToCart = (item, index) => {
    setCart([...cart, { index: index, item: item, quantity: 1 }]);
  };

  return (
    <div className="page">
      <div className="page__inner">
        <div className="pets">
          {pets.map((item, index) => {
            return (
              <div key={index} className="pet">
                <h3>{item.name}</h3>
                {isAuth === true ? (
                  cart.find((x) => x.index === index) !== undefined ? (
                    <p>Добавлено!</p>
                  ) : (
                    <button onClick={() => addToCart(item, index)}>
                      В корзину
                    </button>
                  )
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
