// ① 到 Firebase 主控台 →「專案設定」→「你的應用程式」→ 網頁應用程式，
//    把那段 firebaseConfig 的內容貼到下面，取代 [請填入] 的部分。
//    這些值本來就是公開的，放在 GitHub 上沒關係；安全性靠 firestore.rules 把關。
export const firebaseConfig = {
  apiKey: "[請填入]",
  authDomain: "[請填入].firebaseapp.com",
  projectId: "[請填入]",
  storageBucket: "[請填入].appspot.com",
  messagingSenderId: "[請填入]",
  appId: "[請填入]"
};

// ② 菜單與價格。改這裡之後，記得把 firestore.rules 裡的價格（80）一起改。
export const MENU = [
  { id: "pork", name: "沙茶咖哩豬肉飯", price: 80 },
  { id: "lamb", name: "沙茶咖哩羊肉飯", price: 80 }
];
export const PRICE = 80;

export const SHOP_NAME = "汕頭牛肉店";
