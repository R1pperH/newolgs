import { useState } from "react";
import GetBlog from "./GetBlog";
import "./getblog.css";

export default function Blogs({ handleBlog }) {
  return (
    <>
      <div className="blog-post">
        <button className="create-button" onClick={handleBlog}>
          Create New Post
        </button>
      </div>
    </>
  );
}
