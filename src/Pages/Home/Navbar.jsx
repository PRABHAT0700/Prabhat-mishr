import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import pmLogo from "./images/pmLogo.png"
import { motion, useViewportScroll, useTransform } from "framer-motion";


function Navbar() {

  const [navActive, setNavActive] = useState(false);

  const toggleNav = (event) => {
    event.preventDefault();
    
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
      return  closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
     return closeMenu;
    }
  }, []);

  const { scrollYProgress } = useViewportScroll();
  const thumbY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (

    <nav className={`navbar ${navActive ? "active" : ""}`}>

      <div>
        <img src={pmLogo} alt="Logoipsum" height="40px" width="100px" />
      </div>

      <a href="."
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>

      <div className={`navbar--items ${navActive ? "active" : ""}`}>

        <ul>

          <li>

            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>

          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="testimonial"
              className="navbar--content"
            >
              Review's
            </Link>
          </li>

        </ul>
      </div>

      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>

      {/* Custom Scrollbar */}
      <motion.div
        className="custom-scrollbar"
        style={{
          position: "fixed",
          right: "0",
          top: "0",
          bottom: "0",
          width: "100%",
          backgroundColor: "none",
          borderRadius: "4px",
          zIndex: 1 // Adjust z-index as needed
        }}
        >
        <motion.div
          className="scroll-thumb"
          style={{
            position: "absolute",
            top: 0,
            width: thumbY,
            backgroundColor: "#40779b",
            borderRadius: "4px",
            height: "5px"
          }}
        />
      </motion.div>

    </nav>
  );
}

export default Navbar;