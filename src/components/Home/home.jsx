import React, { Component } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Grid from "../Grid/grid";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Grid />
        <Footer />
      </div>
    );
  }
}
