import { useEffect, useState } from "react";
import classes from "./footer.module.css";
import translate from "../../utils/translate";

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
    <footers>
      <div className={classes.footer_container}>
        <div className={classes.copy}>&copy; React Expense Tracker 2020.</div>
        <div className={classes.language}>
          <button
            className={classes.btn}
            disabled={lang === "tw"}
            onClick={() => changeLanguage("tw")}
          >
            {translate("tw")}
          </button>
          <button
            className={classes.btn}
            disabled={lang === "en"}
            onClick={() => changeLanguage("en")}
          >
            {translate("eng")}
          </button>
        </div>
      </div>
    </footers>
  );
}

export default Footer;
