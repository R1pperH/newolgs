import "./nav.css";
export default function Nav({ handleSubmit, getSearch, queryValue }) {
  return (
    <>
      <div className="navigation">
        <div className="nav-right">Logo</div>
        <div className="nav-left">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search News"
              value={queryValue}
              onChange={(e) => getSearch(e)}
            />
          </form>
        </div>
      </div>
    </>
  );
}
