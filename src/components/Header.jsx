import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/">
          <h3>Pets</h3>
        </Link>
        <div className="header__menu">
          {isAuth == false ? (
            <>
              <Link to="/login">Войти</Link>
              <Link to="/register">Регистрация</Link>
            </>
          ) : (
            <>
              <Link to="/cart">Корзина</Link>
              <Link to="/orders">Заказы</Link>
              <button
                onClick={() => {
                  setIsAuth(false);
                  navigate("/");
                }}
              >
                Выйти
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
