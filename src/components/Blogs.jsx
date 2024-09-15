import { useState } from "react";
import GetBlog from "./GetBlog";

export default function Blogs() {
  const [blogModal, setBlogModal] = useState(false);

  function handleBlog() {
    setBlogModal(true);
  }
  return (
    <>
      <button onClick={handleBlog}>Create New Post</button>
      {blogModal && <GetBlog />}
    </>
  );
}
