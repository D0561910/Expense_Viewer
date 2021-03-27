import React, { Component } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Table from "../TableComponent/table";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Table />
        <Footer />
      </div>
    );
  }
}
