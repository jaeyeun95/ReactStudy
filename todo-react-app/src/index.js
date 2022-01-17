import React from "react"; // 리액트 사용을 위해
import ReactDOM from "react-dom"; // 리액트 DOM 사용을 위해
import "./index.css"; // css
import App from "./App"; // App 컴포넌트 임포트
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // ReactDOM이 내부 컴포넌트들을 'root' 엘리먼트에 render 함
  <React.StrictMode>
    <App /> {/*  App Component 사용법 */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
