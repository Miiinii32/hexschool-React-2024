import axios from "axios";
import { useState, useEffect } from "react";
import LoginPage from "./component/loginPage";
import ProductListPage from "./component/productListPage";
let loginData = {};
const url = `${import.meta.env.VITE_BASE_URL}`;
const path = `${import.meta.env.VITE_API_PATH}`;

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    checkCookie();
  }, []);

  const login = () => {
    loginData = { username, password };
    postLogin(loginData);
  };
  const checkCookie = () => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (token) {
      setIsLogin(true);
    }
  };

  // login API 使用
  const postLogin = async (loginData) => {
    try {
      const res = await axios.post(`${url}/v2/admin/signin`, loginData);
      const { token, expired } = res.data;
      document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
      setIsLogin(true);
      console.log(token, expired);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {isLogin ? (
        <ProductListPage />
      ) : (
        <LoginPage
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          login={login}
        />
      )}
    </>
  );
}

export default App;
