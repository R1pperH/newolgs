import { useState } from "react";
import News from "./components/News";
import Blogs from "./components/Blogs";
import Nav from "./components/Nav";
function App() {
  return (
    <>
      <Nav />
      <div className="app-content">
        <News />
        <Blogs />
      </div>
    </>
  );
}

export default App;
