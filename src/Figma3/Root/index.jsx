import React, { Component } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebare";
import Body from "../Body";
import { BodyWrapper, Main } from "./style";
export default class App extends Component {
  render() {
    return (
      
        <Main>
          <Sidebar />

          <BodyWrapper>
            <Navbar />

            <Body />
        </BodyWrapper>
        </Main>
      
    );
  }
}
