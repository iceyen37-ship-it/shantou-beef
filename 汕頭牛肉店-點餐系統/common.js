import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

export const app = initializeApp(firebaseConfig);
export const fs = getFirestore(app);

export const AGE = ["15 歲以下"];
for (let a = 16; a <= 61; a += 5) AGE.push(a + "-" + (a + 4));
AGE.push("66 歲以上", "不願透露");

export const STATUS = { new: "待處理", cooking: "製作中", ready: "可取餐", done: "已取餐", cancelled: "已取消" };

// 以台灣時間計算「今天」，跨午夜自動從 001 重新編號
export function today() {
  const p = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Taipei", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date());
  const g = (t) => p.find((x) => x.type === t).value;
  return g("year") + g("month") + g("day");
}
export const pad = (n) => String(n).padStart(3, "0");
export const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
export const $ = (s) => document.querySelector(s);
export const bowls = (o) => (o.pork || 0) + (o.lamb || 0);
export const active = (o) => o.status === "new" || o.status === "cooking";
export const DEFAULT_SETTINGS = { perBowl: 3, soldOut: {}, open: true };
