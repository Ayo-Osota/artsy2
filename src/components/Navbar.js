import { Link } from 'react-router-dom'
import { links, navIcons } from "../utils.js/data";
import closeIcon from "../assets/artsy-icons/close-icon.svg";
import menuIcon from "../assets/artsy-icons/menu-icon.svg";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="primary-header">
      <div className="top-nav flex">
        <input
          type="image"
          src={menuIcon}
          alt="menu"
          className="hamburger display-lg-none"
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={() => setIsSidebarOpen(true)}
        />
        <h3 className="text-grey-400 ff-tertiary fs-200 fw-bold logo">ARTSY.</h3>
        <div className={isSidebarOpen ? "nav-wrapper sidebar-open" : "nav-wrapper"}>
          <div className="nav-header flex display-lg-none">
            <h3 className="text-grey-400 ff-tertiary fs-200 fw-bold">ARTSY.</h3>
            <input
              type="image"
                src={closeIcon}
              alt="menu"
              className="close-btn"
              aria-controls="close"
              aria-expanded="false"
              onClick={() => setIsSidebarOpen(false)}
            />
          </div>
          <nav className="primary-nav">
            <ul role="list">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}><Link to={url}>{text}</Link></li>
                )
              })}
            </ul>
          </nav>
          <button className="customer-care-btn display-lg-none"></button>
        </div>
        <div className="nav-icons">
          {navIcons.map((navIcon) => {
            const {id, text, icon} = navIcon;
          return (
          <button key={id} type="button">
            <img src={icon} alt={text} />
          </button>
          )
          })}
        </div>
      </div>
    </header>
  )
}

export default Navbar;