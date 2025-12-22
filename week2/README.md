# HexSchool React 2024 課程作業 - W2

## 功能介紹

1. 使用者可以從登入頁面登入，並轉到後台商品頁面
2. 使用者若無登入直接進入商品頁面，會被導回登入頁面
3. 使用者可以查看產品列表
4. 使用者可以點擊單一產品，查看詳細資訊

## 使用技能

1. bootStrap
2. React 元件建立、useState
3. vite
4. axios + async / await 串接 API

## Demo 畫面

https://github.com/user-attachments/assets/42b24ec4-c521-402f-b881-aec397a36957

## 紀錄

1. 透過三元運算值判斷是否登入，然後用 useState 切換畫面，之後學習 Router！！
2. 如何放 token 在 cookie 上，如何從 cookie 上刪除 token
3. 登出無法使用三元運算值切換登入頁面，違反 React 的 spa 原則，最後使用瀏覽器的路由導向，之後學習 Router 可以改善這個問題。
4. cookie 的 token 讀取不能放在全域
