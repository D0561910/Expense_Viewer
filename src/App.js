import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/login";
import Home from "./components/Home/home";
import "./App.css";

const App = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) setToken(userToken);
  }, []);

  return token ? (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  ) : (
    <Login setToken={setToken} />
  );
};

export default App;
