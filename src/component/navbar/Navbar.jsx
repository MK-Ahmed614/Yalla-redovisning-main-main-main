import { Link, NavLink } from "react-router-dom";
import "./navabar.scss";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
          <Link className="navbar-brand" to="/">Yalla redovisning</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink className="nav-link" to="/">start </NavLink>
      <NavLink className="nav-link" to="/TJÄNSTER">TJÄNSTER</NavLink>
      <NavLink className="nav-link" to="/Priser">Priser</NavLink>
      <NavLink className="nav-link" to="/Kontakt" >Kontakt</NavLink>
    </div>
  </div>
      </div>
</nav>
  );
};

export default Navbar;
