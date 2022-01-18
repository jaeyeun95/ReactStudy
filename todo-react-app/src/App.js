import "./App.css";
import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { Container, List, Paper } from "@material-ui/core";

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

  // 1. 함수 추가
  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length; // key를 위한 id 추가
    item.done = false; // done 초기화
    thisItems.push(item);
    this.setState({ item: thisItems }); // 업데이트는 반드시 this.setState로 해야됨
    console.log("items : ", this.state.items);
  };
  render() {
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
      <Container maxWidth="md">
        <AddTodo add={this.add} />
        <div className="App">{todoItems}</div>
      </Container>
    );
  }
}

export default App;
