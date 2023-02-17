import React, { useState } from "react";
import { useNavigate } from "react-router";

const RegisterPage = ({ setUsers, users }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    setNameError(false);
    setPasswordError(false);
    if (name.length > 0 && password.length > 7) {
      if (users.find((x) => x.name === name) === undefined) {
        setUsers([...users, { name, password }]);
      }
      navigate("/login");
    } else {
      if (name.length === 0) {
        setNameError(true);
      }
      if (password.length < 8) {
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
        <div className="register">
          <form action="" className="register__form" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Имя"
              className={`input ${nameError ? "error" : ""}`}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            {nameError && <p>Имя не может быть пустым</p>}
            <input
              type="password"
              placeholder="Пароль"
              className={`input ${passwordError ? "error" : ""}`}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {passwordError && <p>Пароль должен содержать минимум 8 символов</p>}
            <button type="submit" className="button">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
