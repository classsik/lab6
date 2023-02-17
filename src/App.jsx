import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const [users, setUsers] = useState([{ name: "admin", password: "admin" }]);

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);
      await fetch(
        "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
      )
        .then((res) => res.json())
        .then((json) => {
          setPets(json);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchPets();
  }, []);

  return (
    <div className="App">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              loading={loading}
              pets={pets}
              isAuth={isAuth}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/login"
          element={<LoginPage users={users} setIsAuth={setIsAuth} />}
        />
        <Route
          path="/register"
          element={<RegisterPage users={users} setUsers={setUsers} />}
        />
        {isAuth && (
          <>
            <Route path="/orders" element={<OrdersPage orders={orders} />} />
            <Route
              path="/cart"
              element={
                <CartPage
                  cart={cart}
                  setCart={setCart}
                  orders={orders}
                  setOrders={setOrders}
                />
              }
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
