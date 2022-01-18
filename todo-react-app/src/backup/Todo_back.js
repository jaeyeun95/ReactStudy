import React from "react";

// p181 참고
class Todo extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log("### Todo props :", props);
  //   this.state = { item: props.item };
  // }
  render() {
    var lists = [];
    var data = this.props.item;
    var i = 0;
    console.log("chlid data", data);
    // var keys = data.map((item) => {
    //   console.log("keys ::", item);
    //   item.id;
    // });
    while (i < data.length) {
      console.log(data.id);
      lists.push(<label id={data.id}>{data.title}</label>);
      i = i + 1;
    }
    // lists = data.map((item) => {
    //   console.log("item ::", item);
    //   lists.push(<label id={data.id}>{data.title}</label>);
    // });
    return (
      <div className="Todo" key={data.id}>
        <input
          type="checkbox"
          id={data.id}
          name={data.id}
          checked={data.done}
        />
        {/* <label id={this.state.item.id}>{this.state.item.title}</label> */}
        {lists}
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
