import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Table from "../TableComponent/table";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Table />
        {/* <section>
          <div className="jumbotron jumbotron-fluid py-5">
            <div className="container text-center py-5">
              <h1 className="display-4">Welcome to Chatty</h1>
              <p className="lead">
                A great place to share your thoughts with friends
              </p>
              <div className="mt-4">
                <Link className="btn px-5" to="/login">
                  Login to Your Account
                </Link>
              </div>
            </div>
          </div>
        </section> */}
        <Footer />
      </div>
    );
  }
}
