import React from 'react'
import './Header.css'
import moi from '../../../../assets/icon/wail-removebg-preview.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
          <div className="navbar">
        <img src={moi} alt="moi" />
        <button>
          <Link to="Page_2">
            <p>______<br />______</p>
          </Link>
        </button>
      </div>
    </>
  )
}

export default Header


