import { useState } from "react";
import News from "./components/News";
import Blogs from "./components/Blogs";
import Nav from "./components/Nav";
import GetBlog from "./components/GetBlog";
import { nanoid } from "nanoid";
function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [blogModal, setBlogModal] = useState(false);
  const [myBlogs, setMyBlogs] = useState([]);
  const [getBlogs, setGetBlogs] = useState({
    title: "",
    post: "",
    image: null,
  });

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

  function closeForm() {
    setBlogModal(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMyBlogs([...myBlogs, { ...getBlogs, id: nanoid() }]);
    setGetBlogs({ title: "", post: "", image: null });
    setBlogModal(false);
  }

  function getFormData(e) {
    const { name, value, files } = e.target;

    setGetBlogs((prevBlogs) => {
      const newBlog = { ...prevBlogs };

      if (files && files.length > 0) {
        // Handle image input
        const file = files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
          newBlog[name] = reader.result;
          // Trigger re-render or further processing
        };

        reader.readAsDataURL(file);
      } else {
        // Handle other input types
        newBlog[name] = value;
      }
      //
      return newBlog;
    });
  }

  // console.log(myBlogs);

  return (
    <>
      <Nav
        handleSubmit={getSearchResult}
        getSearch={getQuery}
        queryValue={search}
      />
      <div className="app-content">
        <News getSearch={query} resetQuery={resetQuery} />
        <Blogs handleBlog={handleBlog} blogs={myBlogs} />
      </div>

      {blogModal && (
        <div className="blogs">
          <div className="blog-form">
            <GetBlog
              closeForm={closeForm}
              submit={handleSubmit}
              data={getFormData}
              blogs={getBlogs}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
