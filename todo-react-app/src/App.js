import "./App.css";
import React from "react";
import Todo from "./Todo";
import { List, Paper } from "@material-ui/core";

// class
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 0, title: "Hello World 1", done: true },
        { id: 1, title: "Hello World 2", done: false },
      ],
    };
  }
  render() {
    // 2. 자바스크립트 map 함수를 통해 배열 반복해서 <Todo .../> 컴포넌트 생성

    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} />
          ))}
        </List>
      </Paper>
    );

    // 3. 생성된 컴포넌트 리턴
    return (
      <div className="App">
        <h2>hi</h2>
        {todoItems}
      </div>
    );
  }
}

export default App;
