import React, { Component } from "react";

// header
class Control extends Component {
  // class 안에 들어가 있는 함수는 function 선언이 없어도 된다.
  render() {
    // vue 에서 <template>에서처럼 최상위 태그 하나만 있어야 한다.
    return (
      <ul>
        <li>
          <a
            href="/create"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("create");
            }.bind(this)}
          >
            create
          </a>
        </li>
        <li>
          <a
            href="/update"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("update");
            }.bind(this)}
          >
            update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="delete"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("delete");
            }.bind(this)}
          />
        </li>
      </ul>
    );
  }
}

export default Control;
