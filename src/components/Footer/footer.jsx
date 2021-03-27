import { useEffect, useState } from "react";
import classes from "./footer.module.css";

function Footer() {
  const [lang, setLang] = useState();

  const changeLanguage = (lng) => {
    localStorage.setItem("LanguageKey", lng);
    window.location.reload(false);
  };

  useEffect(() => {
    const lang = localStorage.getItem("LanguageKey") || "en";
    setLang(lang);
  }, []);

  return (
    <footer>
      <div className={classes.footer_container}>
        <p>&copy; React Expense Tracker 2021.</p>
        <nav classes={classes.language}>
          <button disabled={lang === "tw"} onClick={() => changeLanguage("tw")}>
            中文
          </button>
          <button disabled={lang === "en"} onClick={() => changeLanguage("en")}>
            English
          </button>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
