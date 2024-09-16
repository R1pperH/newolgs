import { useState } from "react";
import News from "./components/News";
import Blogs from "./components/Blogs";
import Nav from "./components/Nav";
import GetBlog from "./components/GetBlog";
function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [blogModal, setBlogModal] = useState(false);
  const myBlogs = [];
  const [getBlogs, setGetBlogs] = useState([]);

  function handleBlog() {
    setBlogModal(true);
  }
  function getSearchResult(e) {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  function getQuery(e) {
    setSearch(e.target.value);
  }

  function resetQuery() {
    setQuery("");
  }

  return (
    <>
      <Nav
        handleSubmit={getSearchResult}
        getSearch={getQuery}
        queryValue={search}
      />
      <div className="app-content">
        <News getSearch={query} resetQuery={resetQuery} />
        <Blogs handleBlog={handleBlog} />
      </div>

      {blogModal && (
        <div className="blogs">
          <div className="blog-form">
            <GetBlog />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
