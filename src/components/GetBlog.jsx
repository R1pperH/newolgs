import { useState } from "react";
import "./getblog.css";

export default function GetBlog({ closeForm, data, submit, blogs }) {
  return (
    <>
      <form className="blog-data" onSubmit={submit}>
        <input type="file" name="image" onChange={data} />
        <input
          type="text"
          name="title"
          placeholder="Type Your Title"
          value={blogs.title}
          onChange={data}
        />

        <textarea
          name="post"
          value={blogs.post}
          placeholder="Type Your Thoughts"
          onChange={data}
        ></textarea>

        <button>Submit Post</button>
      </form>

      <div className="close-button">
        <i className="fa-solid fa-circle-xmark" onClick={closeForm}></i>
      </div>
    </>
  );
}
