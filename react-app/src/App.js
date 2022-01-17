import { Component } from "react/cjs/react.production.min";
import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!" />
        {/* <Subject title="React" sub="For UI" /> */}
        <TOC />
        <Content title="HTML" desc="HTML is HyperText Markup Language." />
      </div>
    );
  }
}

export default App;
