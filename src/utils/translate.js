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
    午餐: "Lunch",
    晚餐: "Dinner",
    早餐: "Breakfast",
    飲料: "Beverage",
    家樂福: "Carrefour",
    全聯: "Px Mart"
  },
  tw: {
    expense: "生活費記錄",
    date: "日期",
    pay: "付錢者",
    price: "價錢",
    item: "商品",
    timestamp: "时间戳记",
    profile: "個人資料",
    logout: "登出",
    eng: "英文",
    tw: "繁體中文",
    lunch: "午餐",
    dinner: "晚餐",
    breakfast: "早餐",
    beverage: "飲料",
    drink: "飲料",
    carrefour: "家樂福",
    dessert: "甜點",
    supper: "宵夜",
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
