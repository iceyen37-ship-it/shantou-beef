# 汕頭牛肉店｜市集掃碼點餐系統

- `index.html`：顧客掃 QR Code 進來的點餐頁，**不用登入**
- `staff.html`：店家後台，員工用 Email + 密碼登入，訂單即時跳出、有提示音
- 網頁放在 **GitHub Pages**（免費），訂單存在 **Firebase Firestore**（免費額度對一個攤位綽綽有餘）

---

## 上線步驟（大約 20 分鐘）

### 1. 建立 Firebase 專案
1. 到 <https://console.firebase.google.com> 用 Google 帳號登入，按「建立專案」，名稱隨意（例如 `curry-stall`），Google Analytics 可以關掉。
2. 左側「建構」→ **Firestore Database** →「建立資料庫」→ 位置選 `asia-east1（台灣）`→ 選「以**正式版模式**啟動」。
3. 左側「建構」→ **Authentication** →「開始使用」→ 登入方式選 **電子郵件/密碼** → 啟用 → 儲存。
4. 在 Authentication 的「使用者」分頁按「新增使用者」，幫每位員工建一組 Email 和密碼（這就是後台的登入帳號）。

### 2. 貼上安全規則
1. Firestore Database →「規則」分頁，把 `firestore.rules` 整份貼上。
2. 把 `'[員工Email，例如 boss@gmail.com]'` 換成剛剛建立的員工 Email，多個用逗號隔開：
   `['boss@gmail.com', 'staff1@gmail.com']`
3. 按「發布」。

### 3. 填入 Firebase 設定
1. Firebase 主控台左上角齒輪 →「專案設定」→ 往下到「你的應用程式」→ 點 `</>`（網頁）→ 取個暱稱 → 註冊（不用勾 Hosting）。
2. 畫面會出現一段 `firebaseConfig = { apiKey: ..., ... }`，把裡面的值貼進 `firebase-config.js`。

### 4. 放上 GitHub Pages
1. 在 GitHub 建一個新的 repository（例如 `curry-stall`），設為 **Public**。
2. 把這個資料夾裡的所有檔案上傳（網頁上按「Add file → Upload files」直接拖進去就可以）。
3. repository 的 **Settings → Pages** → Source 選 `Deploy from a branch`，Branch 選 `main` / `(root)` → Save。
4. 等 1～2 分鐘，網址會是：
   - 顧客點餐：`https://你的帳號.github.io/curry-stall/`
   - 店家後台：`https://你的帳號.github.io/curry-stall/staff.html`

### 5. 把網域加進 Firebase 白名單
Authentication →「設定」→「已授權的網域」→ 新增 `你的帳號.github.io`。沒加的話後台會登入失敗。

### 6. 做 QR Code、測試
1. 把顧客點餐網址做成 QR Code（任何免費 QR 產生器都可以），印出來貼在攤位。
2. **正式營業前一定要測**：一支手機掃碼下單 → 另一台裝置開後台，確認訂單有跳出來、按「完成・叫號」後顧客手機有變成「可取餐」。

---

## 營業時怎麼用
- 後台平板保持開著，第一次開要按一下「新訂單提示音」開啟聲音（瀏覽器規定要先點過才能出聲）。
- 賣完了：按該品項的「供應中」切成「已售完」，顧客端立刻不能點。
- 太忙：按「線上點餐 接單中」切成暫停，顧客端會顯示請現場點餐。
- 序號每天（台灣時間）自動從 001 重新開始。

## 要改菜單或價格
1. `firebase-config.js` 的 `MENU` 和 `PRICE`。
2. `firestore.rules` 裡的 `80`；如果品項 id 不是 `pork` / `lamb`，規則裡的欄位名稱也要一起改，然後重新發布規則。

## 已知限制
- 沒有線上付款，預設取餐時付現。
- 任何拿到網址的人都能下單，惡作劇假單要靠員工按「取消」。之後量大可以加 Firebase App Check 擋機器人。
- 顧客的等待時間是依「前面還有幾碗」×「每碗分鐘」估算的，僅供參考。
