import { useState } from "react";

export default function GetBlog() {
  const [data, setData] = useState({ title: "", post: "" });

  return (
    <>
      <form className="blog-data">
        <input
          type="text"
          name="title"
          placeholder="Type Your Title"
          value={data.title}
        />

        <textarea
          name="post"
          value={data.post}
          placeholder="Type Your Thoughts"
        ></textarea>
      </form>
    </>
  );
}
