import React, { useState } from "react";
import { useNavigate } from "react-router";

const LoginPage = ({ setIsAuth, users }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    setNameError(false);
    setPasswordError(false);
    setLoginError(false);

    if (name.length > 0 && password.length > 0) {
      const user = users.find((x) => x.name === name);
      if (user !== undefined && user.password === password) {
        setIsAuth(true);
        navigate("/");
      } else {
        setLoginError(true);
      }
    } else {
      if (name.length === 0) {
        setNameError(true);
      }
      if (password.length === 0) {
        setPasswordError(true);
      }
    }
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
        <div className="login">
          <form action="" className="login__form" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Имя"
              className={`input ${nameError ? "error" : ""}`}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            {nameError && <p>Поле не может быть пустым</p>}
            <input
              type="password"
              placeholder="Пароль"
              className={`input ${passwordError ? "error" : ""}`}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {passwordError && <p>Поле не может быть пустым</p>}
            {loginError && (
              <p style={{ color: "red" }}>Имя или пароль неправильны</p>
            )}
            <button type="submit" className="button">
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
