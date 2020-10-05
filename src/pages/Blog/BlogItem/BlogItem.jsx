import React from "react";
import { Link } from "react-router-dom";
import "./BlogItem.css";
const BlogItem = () => {
  return (
    <div className="blog_item">
      <div className="blog_item_pre_child">
        <div className="blog_item_child">
          <div className="child_1">
            <div className="div_1">
              {" "}
              <img src={require("../../../images/homechildbotfooter.jpg")} />
            </div>

            <div className="div_2">
              {" "}
              <p className="monthly_summary">MONTHLY SUMMARIES</p>
              <h3 className="title">
                <Link to="/blog"> SEP/OCT 2020: MONTHLY SUMMARY</Link>
              </h3>
              <p className="author_date">OSA, OCT 1, 2020</p>
            </div>
          </div>
        </div>
        <p className="text">
          I began to put this monthly summary together for blog and i realized
          that there are so many important conversations and movements taking
          place in the world right now that I simply cannot bring myself to
          write a tone-deaf post about how my life is tough because I can no
          longer travel, so until the world opens up and everyone is free to
          move again, stay safe.
        </p>
      </div>
    </div>
  );
};
export default BlogItem;
