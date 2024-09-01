import React from 'react';
import './Header.css';
import moi from "../../../../assets/icon/wail-removebg-preview.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar2">
      <img src={moi} alt="moi" />
      <button>
        <Link to="/page_principale">
          <p>X</p>
        </Link>
      </button>
    </div>
  );
}

export default Header;
