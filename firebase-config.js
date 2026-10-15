// ① 到 Firebase 主控台 →「專案設定」→「你的應用程式」→ 網頁應用程式，
//    把那段 firebaseConfig 的內容貼到下面，取代 [請填入] 的部分。
//    這些值本來就是公開的，放在 GitHub 上沒關係；安全性靠 firestore.rules 把關。
export const firebaseConfig = {
  apiKey: "AIzaSyDQU7SXkC47lxqBsXMBWMuyUeRf38KZtLk",
  authDomain: "shantou-beef.firebaseapp.com",
  projectId: "shantou-beef",
  storageBucket: "shantou-beef.firebasestorage.app",
  messagingSenderId: "9263700028",
  appId: "1:9263700028:web:27be5bdcf124e93e914b39"
};

// ② 菜單與價格。改這裡之後，記得把 firestore.rules 裡的價格（80）一起改。
export const MENU = [
  { id: "pork", name: "沙茶咖哩豬肉飯", price: 80 },
  { id: "lamb", name: "沙茶咖哩羊肉飯", price: 80 }
];
export const PRICE = 80;

export const SHOP_NAME = "汕頭牛肉店";

// ③ 員工名單：後台登入時從下拉選單選名字。
//    每位員工要在 Firebase「Authentication → 使用者 → 新增使用者」建立對應帳號：
//    電子郵件填下面的 email，密碼填「你要的密碼 + #stb」（例如密碼 123 → 填 123#stb）
export const STAFF = [
  { name: "員工1", email: "staff1@shantou-beef.app" },
  { name: "員工2", email: "staff2@shantou-beef.app" },
  { name: "員工3", email: "staff3@shantou-beef.app" }
];
