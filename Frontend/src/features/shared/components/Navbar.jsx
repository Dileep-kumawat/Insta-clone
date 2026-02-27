import { Link, NavLink, useNavigate } from "react-router-dom";
import "../style/navbar.scss";
import { useAuth } from "../../auth/hooks/useAuth";

const Navbar = () => {

  const { handleLogout } = useAuth();

  const navigate = useNavigate();

  const logout = () => {
    handleLogout();

    navigate("/login");
  }

  const navLinkHandler = (e) => "link " + (e.isActive ? "active" : "");

  return (
    <nav className="nav-container">
      <Link to="/" className="logo">
        <img src="primary-logo.png" alt="logo" />
      </Link>
      <NavLink to="/" className={navLinkHandler}>
        <i className="ri-home-smile-fill"></i>
        <span>Home</span>
      </NavLink>
      <NavLink to="/saved" className={navLinkHandler}>
        <i className="ri-bookmark-line"></i>
        <span>Saved Posts</span>
      </NavLink>
      <NavLink to="/create" className={navLinkHandler}>
        <i className="ri-add-large-line"></i>
        <span>Create Post</span>
      </NavLink>
      <NavLink to="/profile" className={navLinkHandler}>
        <i className="ri-user-3-fill"></i>
        <span>Profile</span>
      </NavLink>
      <div
        onClick={logout}
        id="logout" className="link">
        <i className="ri-logout-box-line"></i>
        <span>Logout</span>
      </div>
    </nav >
  )
}

export default Navbar
