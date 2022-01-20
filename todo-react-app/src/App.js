import "./App.css";
import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { Container, List, Paper } from "@material-ui/core";
import { call, signout } from "./service/ApiService";
import { Grid, Button, AppBar, Toolbar, Typography } from "@material-ui/core";

// class
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      // 로딩 중이라는 상태를 표현할 변수
      loading: true,
    };
  }

  componentDidMount() {
    // todo 리스트를 가져오는 GET 요청이 성공적으로 리턴하는 경우 loading을 false로 바꾼다.
    // 더 이상 로딩 중이 아니라는 뜻.
    call("/todo", "GET", null).then((res) =>
      this.setState({ items: res.data, loading: false })
    );
  }

  // 저장 함수
  add = (item) => {
    // front 용
    // const thisItems = this.state.items;
    // item.id = "ID-" + thisItems.length; // key를 위한 id 추가
    // item.done = false; // done 초기화
    // thisItems.push(item);
    // this.setState({ item: thisItems }); // 업데이트는 반드시 this.setState로 해야됨
    // console.log("items : ", this.state.items);

    // + backend
    call("/todo", "POST", item).then((res) =>
      this.setState({ items: res.data })
    );
  };

  // 삭제 함수
  delete = (item) => {
    // front
    // console.log("item ", item);
    // const thisItems = this.state.items;
    // console.log("Before Update Item : ", this.state.items);
    // const newItems = thisItems.filter((e) => e.id !== item.id);
    // this.setState({ items: newItems }, () => {
    //   // 디버깅 콜백
    //   console.log("Update Items : ", this.state.items);
    // });

    // + back
    call("/todo", "DELETE", item).then((res) =>
      this.setState({ items: res.data })
    );
  };

  // update
  update = (item) => {
    console.log("App Component update");
    call("/todo", "PUT", item).then((res) =>
      this.setState({ items: res.data })
    );
  };

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo
              item={item}
              key={item.id}
              delete={this.delete}
              update={this.update}
            />
          ))}
        </List>
      </Paper>
    );

    // navigationBar 추가
    var navigationBar = (
      <AppBar position="static">
        <Toolbar>
          <Grid justifyContent="space-between" container>
            <Grid item>
              <Typography variant="h6">오늘의 할일</Typography>
            </Grid>
            <Button color="inherit" onClick={signout}>
              로그아웃
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    );

    // 로딩중이 아닐 때 렌더링 할 부분
    var todoListPage = (
      <div>
        {navigationBar}
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );

    // 로딩중일 때 렌더링할 부분
    var loadingPage = <h1>로딩중....</h1>;

    var content = loadingPage;

    if (!this.state.loading) {
      // 로딩중이 아니면 todoListPage
      content = todoListPage;
    }

    return <div className="App">{content}</div>;

    // 3. 생성된 컴포넌트 리턴
    // return (
    //   <div className="App">
    //     {navigationBar}
    //     <Container maxWidth="md">
    //       <AddTodo add={this.add} />
    //       <div className="TodoList">{todoItems}</div>
    //     </Container>
    //   </div>
    // );
  }
}

export default App;
