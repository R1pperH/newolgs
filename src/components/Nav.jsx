import "./nav.css";
export default function Nav() {
  return (
    <>
      <div className="navigation">
        <div className="nav-right">Logo</div>
        <div className="nav-left">
          <input type="text" placeholder="Search News" />
        </div>
      </div>
    </>
  );
}
