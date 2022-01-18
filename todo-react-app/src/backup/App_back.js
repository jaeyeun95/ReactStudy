import "./App.css";
import React from "react";
import Todo from "../Todo";

// 함수 버전
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // vue.js 에서 data
      items: [
        { id: 0, title: "Hello World 1", done: true },
        { id: 1, title: "Hello World 2", done: false },
      ],
    };
  }
  render() {
    // console.log("Todo: ", Todo);
    // 2. 자바스크립트 map 함수를 통해 배열 반복해서 <Todo .../> 컴포넌트 생성
    // var todoItems = this.state.items.map((item, idx) => {
    //   console.log("item :", item);
    //   console.log("title :", item.title);
    //   console.log("id :", item.id);
    //   <Todo item={item} key={item.id} />;
    //   console.log("Todo : ", { Todo });
    // });
    // console.log("@@@ :", todoItems);
    // console.log("3333 :", { todoItems });
    console.log(this.state);
    // 3. 생성된 컴포넌트 리턴
    return (
      <div className="App">
        <h2>hi</h2>
        <Todo item={this.state.items} />
        {/* {todoItems} */}
      </div>
    );
  }
}

export default App;
