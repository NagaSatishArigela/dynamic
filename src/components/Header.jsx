import React from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../utils/Hamburger";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./index.css";

const Header = () => {
  const menu = [
    {
      listItem: "About Us",
      path: "/aboutus",
    },
    {
      listItem: "Facility",
      path: "/facility",
    },
    {
      listItem: "Products",
      path: "/products",
    },
    {
      listItem: "Careers",
      path: "/careers",
    },
    {
      listItem: "Contact Us",
      path: "/contact-us",
    },
    {
      listItem: "Blog",
      path: "/blog",
    },
  ];
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/">
          <img
            src="https://static.wixstatic.com/media/08186a_960ebbcc91af4b6097cdf570a427769e~mv2.png/v1/fill/w_237,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Promea%20logo%202023.png"
            alt="promea&reg;"
            title="promea"
          />
        </NavLink>
      </div>
      <ul className={`${hamburgerOpen ? "mobileNavbar" : "navbar"}`}>
        {menu.map((item, i) => {
          return (
            <NavLink key={i} to={item.path}>
              <li>{item.listItem}</li>
            </NavLink>
          );
        })}
      </ul>
      <div className="hamburger" onClick={toggleHamburger}>
        {hamburgerOpen ? <AiOutlineClose/> : <AiOutlineMenu/>}
      </div>
    </div>
  );
};

export default Header;
