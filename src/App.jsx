import { useState } from "react";
import News from "./components/News";
import Blogs from "./components/Blogs";
import Nav from "./components/Nav";
function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

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
        <Blogs />
      </div>
    </>
  );
}

export default App;
