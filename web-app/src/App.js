import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import MainScreens from "./pages/MainScreen/Mainscreens.js";
import Auth from "./pages/auth/Auth.js";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        {isLogin ? (
          <MainScreens setIsLogin={setIsLogin} />
        ) : (
          <Auth setIsLogin={setIsLogin} />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
