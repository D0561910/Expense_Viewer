import { useEffect, useState } from "react";

function Footer() {
  const [lang, setLang] = useState();

  const changeLanguage = (lng) => {
    localStorage.setItem("LanguageKey", lng);
    window.location.reload(false);
  };

  useEffect(() => {
    const lang = localStorage.getItem("LanguageKey");
    setLang(lang);
  }, []);

  return (
    <footer>
      <div>
        <p>&copy; React Expense Tracker 2021.</p>
        <button disabled={lang === "tw"} onClick={() => changeLanguage("tw")}>
          中文
        </button>
        <button disabled={lang === "en"} onClick={() => changeLanguage("en")}>
          English
        </button>
      </div>
    </footer>
  );
}

export default Footer;
