import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import HomeChildItem from "./HomeChildItem/HomeChildItem";
import HomePageBlogItem from "./HomepageBlog/HomepageBlogItem";
// import { homeShortDesc } from "../constantText";

class HomePage extends Component {
  state = {};

  render() {
    return (
      <div className="homepage">
        {/* <header className="header-footer">Home</header> */}

        <div className="container_1">
          <h1 className="home_name">Hi, I’m Osa.</h1>
          <h3 className="home_short_description">
            I’ve been stumbling my way around the world for ten years and
            counting.
          </h3>
        </div>
        <HomeChildItem />
        <button className="continue_button">
          <Link to="/about">Continue Reading</Link>
        </button>
        <hr className="divider" />
        <HomePageBlogItem />
      </div>
    );
  }
}

export default HomePage;
