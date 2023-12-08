import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1>The Dojo blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        {/* <a
          to="/create"
          style={{
            color: "white",
            backgroundColor: "pink",
            borderRadius: "10px",
          }}
        >
          New Blog
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
