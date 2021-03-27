import { useState } from "react";
import Snackbar from "../Snackbar/snackbar";
import classes from "./login.module.css";

async function loginUser(credentials) {
  return fetch("https://express-server-1128.herokuapp.com/api/fakelogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => response.json())
    .then((data) => data.token)
    .catch((error) => console.error(error));
}

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    if (token) {
      setToken(token);
      localStorage.setItem("token", token);
    } else {
      setMessage("Invaild Username and Password...");
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }
  };

  return (
    <div className={classes.container}>
      {isActive ? <Snackbar active={isActive} msg={message} /> : <div></div>}
      <section className={classes.login}>
        <div className={classes.head}>
          <img
            src="https://mateuspntx.github.io/templates/login-page/i/telescope.png"
            alt="logo-img"
          />
          <h1>Login Page</h1>
        </div>
        <p className={classes.msg}>Welcome Back</p>
        <div className={classes.form}>
          <form>
            <input
              type="text"
              placeholder="Username"
              className={classes.text}
              id="username"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className={classes.password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a
              href="abc"
              onClick={handleSubmit}
              className={classes.btn_login}
              id="login"
            >
              Login
            </a>
            <a href="/forget" className={classes.forgot}>
              Forgot?
            </a>
          </form>
        </div>
      </section>
      <footer>
        <p>
          Made with Charles Sin(
          <a href="https://github.com/D0561910">@Charles Github</a>)
        </p>
      </footer>
    </div>
  );
};

export default Login;
