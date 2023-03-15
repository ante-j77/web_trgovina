import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthetication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="header_logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="header_search">
        <input
          type="text"
          placeholder="Traži..."
          className="header_searchInput"
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      <nav className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_option" onClick={handleAuthetication}>
            <span>{!user ? "Prijavi se" : "Odjava"}</span>
          </div>
        </Link>
        <div className="header_option">
          <span>Kontakt</span>
        </div>

        <div className="header_option">
          <span>O nama</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_itemCount">{basket.length}</span>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
