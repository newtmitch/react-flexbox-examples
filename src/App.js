import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

class App extends Component {
  render() {
    const TopLevel = styled.div`margin: 20px;`;
    return (
      <TopLevel>
        What you're probably looking for is the list of examples. For now, you
        should instead start the storybook so you can navigate through them
        per-example. I'll put them in a single page slightly later, but for now,
        just run <code>yarn run storybook</code> since you have the code sitting
        there...
      </TopLevel>
    );
  }
}

export default App;
