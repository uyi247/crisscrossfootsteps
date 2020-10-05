import React from "react";
import "./HomePageBlog.css";
import { Link } from "react-router-dom";
const HomePageBlogItem = () => {
  return (
    <div className="homepage_blog_item">
      <h4>THE BLOG</h4>
      <h1>LATEST POSTS</h1>

      <div className="homepage_blog_item_child">
        <div className="child_1">
          <img src={require("../../../images/homechildbotfooter.jpg")} />
          <p className="monthly_summary">MONTHLY SUMMARIES</p>
          <h3 className="title">
            <Link to="/blog"> SEPT/OCT 2020: MONTHLY SUMMARY</Link>
          </h3>
          <p className="author_date">OSA, OCT 1, 2020</p>
          <p className="text">
            I began to put this monthly summary together for June then
            remembered I hadn’t published one in May! That was deliberate. There
            are so many important conversations
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomePageBlogItem;
