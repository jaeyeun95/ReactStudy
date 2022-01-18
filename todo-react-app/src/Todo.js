import { Checkbox, InputBase, ListItem, ListItemText } from "@material-ui/core";
import React from "react";

// p181 참고
class Todo extends React.Component {
  constructor(props) {
    super(props);
    console.log("### Todo props :", props);
    this.state = { item: props.item };
  }
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
