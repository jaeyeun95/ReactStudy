import {
  Checkbox,
  InputBase,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import React from "react";

// p181 참고
class Todo extends React.Component {
  constructor(props) {
    // vue.js script
    super(props);
    console.log("### Todo props :", props);
    this.state = { item: props.item, readOnly: true };
    // 함수 등록
    this.delete = props.delete;
  }
  // 삭제
  deleteEventHandler = () => {
    console.log("deleteHandler");
    this.delete(this.state.item);
  };

  // 읽기 전용모드?
  offReadOnlyMode = () => {
    console.log("Event!", this.state.readOnly);
    this.setState({ readOnly: false }, () => {
      console.log("ReadOnly : ", this.state.readOnly);
    });
  };

  // 엔터키 눌렀을 때 readOnly 종료
  enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      this.setState({ readOnly: true });
    }
  };

  // item 수정 함수
  editEventHandler = (e) => {
    const thisItem = this.state.item;
    thisItem.title = e.target.value;
    this.setState({ item: thisItem });
  };

  // checkbox 업데이트
  checkboxEventHandler = (e) => {
    const thisItem = this.state.item;
    thisItem.done = !thisItem.done;
    this.setState({ item: thisItem });
  };

  render() {
    const item = this.state.item;
    return (
      <ListItem>
        <Checkbox checked={item.done} onChange={this.checkboxEventHandler} />
        <ListItemText>
          <InputBase
            inputProps={{
              "aria-label": "naked",
              readOnly: this.state.readOnly,
            }}
            type="text"
            id={item.id}
            name={item.id}
            value={item.title}
            multiline={true}
            fullWidth={true}
            onClick={this.offReadOnlyMode}
            onChange={this.editEventHandler}
            onKeyPress={this.enterKeyEventHandler}
          />
        </ListItemText>

        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete Todo"
            onClick={this.deleteEventHandler}
          >
            <DeleteOutlined />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

// class Todo extends React.Component {
//     render() {
//         return (
//             //...
//         );
//     }
//   }

export default Todo;
