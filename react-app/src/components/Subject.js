import React, { Component } from "react";

// header
class Subject extends Component {
  // class 안에 들어가 있는 함수는 function 선언이 없어도 된다.
  render() {
    // vue 에서 <template>에서처럼 최상위 태그 하나만 있어야 한다.
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
