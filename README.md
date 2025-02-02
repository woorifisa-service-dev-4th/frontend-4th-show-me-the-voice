
# 💻 익명 질문 채팅방 <생생정호통>

- 배포 URL : https://frontend-4th-show-me-the-voice.vercel.app/

![image](https://github.com/user-attachments/assets/b15b521f-2e5f-4959-8668-97d1744ad7f6)



---
## 💡 프로젝트 소개

- Next.js 기반 익명 질문 및 답변 웹뷰 서비스
- 자신의 신원을 공개하지 않고 자유롭게 질문하고 답변받을 수 있습니다.
- 강사용, 게스트용 페이지를 구분하여 권한별 기능을 분리하였습니다.

&nbsp; 
&nbsp; 

---
## ⚙️ 개발 환경

- FE : Next.js, react-query, Radix UI
- BE : express.js
- DB : PostgresSQL
- 배포 환경 : Vercel

&nbsp; 
&nbsp; 

---
## 🚧 프로젝트 규칙

   1. **이슈 이름**

   ```
   Feature: Some feature add and problem solve
   ```

   2. **브랜치 이름**

   ```
   type/#Issue No.
   ex) feat/3-(feature이름)
   ```

   3. **PR 이름**
   ```
   Feat: 000구현
   ```

&nbsp; 
&nbsp; 
---
## 👻 **팀 소개**

| ![yj](https://avatars.githubusercontent.com/u/99820610?v=4) | ![ye](https://avatars.githubusercontent.com/u/105282117?v=4) | ![sh](https://avatars.githubusercontent.com/u/108069902?v=4) | ![sb](https://avatars.githubusercontent.com/u/87076416?v=4) |
| ----------------------------------------------------------- |--------------------------------------------------------------|--------------------------------------------------------------|-------------------------------------------------------------|
| [이한비](https://github.com/AlmondBreez3)                   | [이승준](https://github.com/sengjun0624)                        | [마서영](https://github.com/luxihua)                            | [김소민](https://github.com/minnie0175)                        |
| 팀원                                                        | 팀원                                                           | 팀원                                                           | 팀원                                                          |


&nbsp; 
&nbsp; 

---

## 📖 프로젝트 구조
```
📦app
 ┣ 📂(guests)
 ┃ ┗ 📂chatroom
 ┃ ┃ ┣ 📂[chatroomId]
 ┃ ┃ ┃ ┣ 📜layout.jsx
 ┃ ┃ ┃ ┗ 📜page.jsx
 ┃ ┃ ┗ 📜page.jsx
 ┣ 📂(hosts)
 ┃ ┣ 📂chatlist
 ┃ ┃ ┣ 📂[chatlistId]
 ┃ ┃ ┃ ┗ 📜page.jsx
 ┃ ┃ ┣ 📜layout.jsx
 ┃ ┃ ┗ 📜page.jsx
 ┃ ┗ 📜testdata.js
 ┣ 📂api
 ┃ ┣ 📂chatrooms
 ┃ ┃ ┗ 📂[chatroomId]
 ┃ ┃ ┃ ┣ 📂chats
 ┃ ┃ ┃ ┃ ┣ 📂add
 ┃ ┃ ┃ ┃ ┃ ┗ 📜route.js
 ┃ ┃ ┃ ┃ ┗ 📜route.js
 ┃ ┃ ┃ ┗ 📜route.js
 ┃ ┗ 📂chats
 ┃ ┃ ┣ 📂[chatId]
 ┃ ┃ ┃ ┣ 📂like
 ┃ ┃ ┃ ┃ ┗ 📜route.js
 ┃ ┃ ┃ ┣ 📂pin
 ┃ ┃ ┃ ┃ ┗ 📜route.js
 ┃ ┃ ┃ ┗ 📜route.js
 ┃ ┃ ┗ 📜route.js
 ┣ 📂lib
 ┃ ┣ 📜action.js
 ┃ ┣ 📜data.js
 ┃ ┗ 📜db.js
 ┣ 📂providers
 ┃ ┗ 📜Providers.jsx
 ┣ 📂ui
 ┃ ┣ 📂(guest)
 ┃ ┃ ┗ 📂chatroom
 ┃ ┃ ┃ ┣ 📜Cards.jsx
 ┃ ┃ ┃ ┣ 📜Search.jsx
 ┃ ┃ ┃ ┗ 📜SubHeader.jsx
 ┃ ┣ 📂(host)
 ┃ ┃ ┗ 📂chatlist
 ┃ ┃ ┃ ┣ 📜Cards.jsx
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┣ 📜Likes.jsx
 ┃ ┃ ┃ ┗ 📜Select.jsx
 ┃ ┣ 📂landing
 ┃ ┃ ┣ 📜LoginForm.jsx
 ┃ ┃ ┗ 📜PasscodeForm.jsx
 ┃ ┣ 📜Card.jsx
 ┃ ┣ 📜ChatInput.jsx
 ┃ ┣ 📜ChatroomCard.jsx
 ┃ ┣ 📜ClipboardButton.jsx
 ┃ ┣ 📜Dropdown.jsx
 ┃ ┣ 📜Header.jsx
 ┃ ┣ 📜Modal.jsx
 ┃ ┣ 📜ToolTipCustom.jsx
 ┃ ┗ 📜skeletons.jsx
 ┣ 📜globals.css
 ┣ 📜layout.jsx
 ┣ 📜page.jsx
 ┗ 📜testdata.js

```
