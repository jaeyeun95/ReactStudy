import { Component } from "react/cjs/react.production.min";
import "./App.css";

// header
class Subject extends Component {
  // class 안에 들어가 있는 함수는 function 선언이 없어도 된다.
  render() {
    // vue 에서 <template>에서처럼 최상위 태그 하나만 있어야 한다.
    return (
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

// nav
class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="1.html">HTML</a>
          </li>
          <li>
            <a href="2.html">CSS</a>
          </li>
          <li>
            <a href="3.html">JavaScript</a>
          </li>
        </ul>
      </nav>
    );
  }
}

// article
class Content extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject />
        <TOC />
        <Content />
      </div>
    );
  }
}

export default App;
