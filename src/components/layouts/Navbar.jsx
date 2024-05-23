import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaQuestion } from "react-icons/fa";
import { GiSevenPointedStar } from "react-icons/gi";
import { PiSignOutFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
const navigate = useNavigate();


  const logout = (e) => {
    e.preventDefault();
    localStorage.setItem("token","");
    navigate("login")
  };



  const controlNavBar = () => {
    if (window.scrollY > lastScrollY) {
      // if scrolling down
      setShowNav(false);
    } else {
      // if scrolling up
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    //adding our function to scroll event
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav className="desktop">
        <Link to="#" onClick={logout}>
          <PiSignOutFill className="icon" /> Signout
        </Link>
      </nav>
      <nav className={`mobile ${showNav ? "show" : ""}`}>
        <ul>
          <li>
            <ScrollLink
              to="cal" // Make sure to use the correct ID of your target element
              spy={true}
              smooth={true}
            >
              <FaCalendarAlt className="icon" />
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="quiz" // Make sure to use the correct ID of your target element
              spy={true}
              smooth={true}
            >
              <FaQuestion className="icon" />
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="points" // Make sure to use the correct ID of your target element
              spy={true}
              smooth={true}
            >
              <GiSevenPointedStar className="icon" />
            </ScrollLink>
          </li>
          <li>
            <Link to="#" onClick={logout}>
              <PiSignOutFill className="icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
