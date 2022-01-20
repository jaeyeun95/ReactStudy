import { Component } from "react/cjs/react.production.min";
import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import Control from "./components/Control";

class App extends Component {
  // 컴포넌트가 실행될 때 render() 함수보다 먼저 실행되고 해당 컴포넌트를 초기화
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 2,
      subject: { title: "WEB", sub: "World wide Web!" },
      welcome: { title: "Welcome", desc: "Hello React!!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for infomation" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  render() {
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: "welcome",
            });
          }.bind(this)}
        />
        <TOC
          onChangePage={function (id) {
            console.log(id);
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
          data={this.state.contents}
        />
        <Control
          onChangeMode={function (_mode) {
            this.setState({ mode: _mode });
          }.bind(this)}
        ></Control>
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
