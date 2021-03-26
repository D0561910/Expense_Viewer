import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.css";

function Header() {
  const [userToken, setUserToken] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setUserToken(token);
  }, []);

  const logout = () => {
    // userCredentials;
    localStorage.removeItem("token");
    window.location.href = "/";
    // TODO: Maybe need to inform backend.
    // But this moment just remove localstorage enough
  };

  return (
    <header className={classes.navigation}>
      <div className={classes.nav_container}>
        <Link className={classes.brand} to="/">
          <a href="Chatty">Chatty</a>
        </Link>
        <nav>
          <div className={classes.nav_mobile}>
            <a id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>
          {userToken ? (
            <ul className="navbar-nav">
              <Link className="nav-item nav-link mr-3" to="/chat">
                <li>
                  <a href="#!">Profile</a>
                </li>
              </Link>
              <li>
                <a href="#!" onClick={() => logout()}>
                  Logout
                </a>
              </li>
            </ul>
          ) : (
            <div className="navbar-nav">
              <Link className="nav-item nav-link mr-3" to="/login">
                Sign In
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
