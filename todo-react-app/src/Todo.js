import React from "react";

// p181 참고
class Todo extends React.Component {
  constructor(props) {
    super(props);
    console.log("### Todo props :", props);
    this.state = { item: props.item };
  }
  render() {
    return (
      <div className="Todo">
        <input
          type="checkbox"
          id={this.state.item.id}
          name={this.state.item.id}
          checked={this.state.item.done}
        />
        <label id={this.state.item.id}>{this.state.item.title}</label>
      </div>
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
