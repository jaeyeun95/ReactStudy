import React from "react";

// p181 참고
class Todo extends React.Component {
  constructor(props) {
    super(props);
    console.log("### Todo props :", props);
    this.state = { item1: props.item1 };
  }
  render() {
    return (
      <div className="Todo">
        <input
          type="checkbox"
          id={this.state.item1.id}
          name={this.state.item1.id}
          checked={this.state.item1.done}
        />
        <label id={this.state.item1.id}>{this.state.item1.title}</label>
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
