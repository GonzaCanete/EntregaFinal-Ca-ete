import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  let userRol = "user";

  return (
    <div className={"containerNavbar"}>
      <Link to="/" className="title">Game Shop</Link>

      <ul className="categories">
        <Link to="/category/Playstation">Playstation</Link>
        <Link to="/category/Xbox">Xbox</Link>
        <Link to="/category/nintendo">Nintendo</Link>
      </ul>

      {userRol === "admin" && <Link to="/dashboard">ADMIN</Link>}

      <CartWidget />
    </div>
  );
};

export default Navbar;
