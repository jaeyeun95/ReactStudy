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
    this.state = { item: props.item };
    // 함수 등록
    this.delete = props.delete;
  }
  // 삭제
  deleteEventHandler = () => {
    console.log("deleteHandler");
    this.delete(this.state.item);
  };
  render() {
    const item = this.state.item;
    return (
      <ListItem>
        <Checkbox checked={item.done} />
        <ListItemText>
          <InputBase
            inputProps={{ "aria-label": "naked" }}
            type="text"
            id={item.id}
            name={item.id}
            value={item.title}
            multiline={true}
            fullWidth={true}
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
