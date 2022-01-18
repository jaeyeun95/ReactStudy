import { Component } from "react/cjs/react.production.min";
import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

class App extends Component {
  // 컴포넌트가 실행될 때 render() 함수보다 먼저 실행되고 해당 컴포넌트를 초기화
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "WEB", sub: "World wide Web!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for infomation" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        />
        {/* <Subject title="React" sub="For UI" /> */}
        <TOC data={this.state.contents} />
        <Content title="HTML" desc="HTML is HyperText Markup Language." />
      </div>
    );
  }
}

export default App;
