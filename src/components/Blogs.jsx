import { useState } from "react";
import GetBlog from "./GetBlog";
import "./getblog.css";

export default function Blogs({ handleBlog, blogs }) {
  console.log(blogs);
  const dispBlog = blogs.map((currBlog) => {
    return (
      <div className="blog-img-container" key={currBlog.id}>
        <img src={currBlog.image} alt={currBlog.title} className="blog-img" />
      </div>
    );
  });
  return (
    <>
      <div className="blog-post">
        {blogs.length > 0 && dispBlog}

        <button className="create-button" onClick={handleBlog}>
          Create New Post
        </button>
      </div>
    </>
  );
}
