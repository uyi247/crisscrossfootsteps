import React from "react";
import "./BlogPage.css";
import BlogItem from "./BlogItem/BlogItem";
const BlogPage = () => {
  return (
    <div className="blogPage">
      <p>The Blog</p>
      <BlogItem />
    </div>
  );
};

export default BlogPage;