const lang = {
  en: {
    expense: "Expense Tracker",
    date: "Date",
    pay: "Pay",
    price: "Price",
    item: "Item",
    timestamp: "Timestamp",
    profile: "Profile",
    logout: "Logout",
    eng: "English",
    tw: "Traditional",
  },
  tw: {
    expense: "生活費記錄",
    date: "日期",
    pay: "付錢者",
    price: "價錢",
    item: "商品",
    timestamp: "時間軸",
    profile: "個人資料",
    logout: "登出",
    eng: "英文",
    tw: "繁體中文",
  },
};

const langType = () => {
  const langKey = localStorage.getItem("LanguageKey");
  return langKey ? langKey : "en";
};

const translate = (word) => {
  return lang[langType()][word] ? lang[langType()][word] : word;
};

export default translate;
