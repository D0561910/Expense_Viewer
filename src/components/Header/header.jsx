import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.css";
import translate from "../../utils/translate";

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
          {translate("expense")}
        </Link>

        <nav>
          <div className={classes.nav_mobile}>
            <a id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>
          {userToken ? (
            <ul>
              <li>
                <a href="#!" onClick={() => logout()}>
                  {translate("logout")}
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
