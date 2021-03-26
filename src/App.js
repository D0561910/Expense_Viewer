import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/login";
// import Table from "./components";
import Home from "./components/Home/home";

const App = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) setToken(userToken);
  }, []);

  return token ? (
    <div className="wrapper">
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
