import React, { useEffect, useState } from "react";
import DonateModal from "../DonateModal/DonateModal";
import "./Navigation.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [donateOpen, setDonateOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown((current) => (current === name ? null : name));
  };

  return (
    <>
      <nav className="navigation">
        <div className="navigation-container">
          <a href="/" className="navigation-logo" onClick={closeMenu}>
            <img src="/images/logo/hrsa-logo.png" alt="HRSA - Humanitarian and Religious Support Association" className="hrsa-logo" />
          </a>

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span><span></span><span></span>
          </button>

          <div className={`navigation-menu ${menuOpen ? "open" : ""}`}>
            <a href="/" onClick={closeMenu}>Home</a>

            <div className={`nav-dropdown ${activeDropdown === "about" ? "open" : ""}`}>
              <button className="dropdown-toggle" onClick={() => toggleDropdown("about")} aria-expanded={activeDropdown === "about"}>
                About HRSA <span className="dropdown-arrow">⌄</span>
              </button>
              <div className="dropdown-menu">
                <a href="#about" onClick={closeMenu}>About HRSA</a>
                <a href="#mission" onClick={closeMenu}>Mission, Vision & Values</a>
                <a href="#contact" onClick={closeMenu}>Leadership & Contact</a>
              </div>
            </div>

            <div className={`nav-dropdown ${activeDropdown === "humanitarian" ? "open" : ""}`}>
              <button className="dropdown-toggle" onClick={() => toggleDropdown("humanitarian")} aria-expanded={activeDropdown === "humanitarian"}>
                Humanitarian Support <span className="dropdown-arrow">⌄</span>
              </button>
              <div className="dropdown-menu">
                <a href="#humanitarian" onClick={closeMenu}>Humanitarian Support</a>
                <a href="#distribution-gifts" onClick={closeMenu}>Distribution of Gifts</a>
                <a href="#family-support" onClick={closeMenu}>Support for Families</a>
              </div>
            </div>

            <div className={`nav-dropdown ${activeDropdown === "religious" ? "open" : ""}`}>
              <button className="dropdown-toggle" onClick={() => toggleDropdown("religious")} aria-expanded={activeDropdown === "religious"}>
                Religious Support <span className="dropdown-arrow">⌄</span>
              </button>
              <div className="dropdown-menu">
                <a href="#religious" onClick={closeMenu}>Religious Support</a>
                <a href="#religious-community" onClick={closeMenu}>Community Activities</a>
                <a href="#shared-values" onClick={closeMenu}>Shared Values</a>
              </div>
            </div>

            <div className={`nav-dropdown ${activeDropdown === "programs" ? "open" : ""}`}>
              <button className="dropdown-toggle" onClick={() => toggleDropdown("programs")} aria-expanded={activeDropdown === "programs"}>
                Programs & Projects <span className="dropdown-arrow">⌄</span>
              </button>
              <div className="dropdown-menu">
                <a href="#programs" onClick={closeMenu}>All Programs</a>
                <a href="#humanitarian" onClick={closeMenu}>Humanitarian Assistance</a>
                <a href="#religious" onClick={closeMenu}>Religious Support</a>
                <a href="#get-involved" onClick={closeMenu}>Community Development</a>
              </div>
            </div>

            <a href="#news" onClick={closeMenu}>News & Stories</a>

            <div className={`nav-dropdown ${activeDropdown === "involved" ? "open" : ""}`}>
              <button className="dropdown-toggle" onClick={() => toggleDropdown("involved")} aria-expanded={activeDropdown === "involved"}>
                Get Involved <span className="dropdown-arrow">⌄</span>
              </button>
              <div className="dropdown-menu">
                <a href="#get-involved" onClick={closeMenu}>Volunteer</a>
                <a href="#get-involved" onClick={closeMenu}>Support Our Work</a>
                <a href="#get-involved" onClick={closeMenu}>Partner With Us</a>
              </div>
            </div>

            <a href="#contact" className="contact-link" onClick={closeMenu}>Contact</a>
            <button className="donate-link" onClick={() => { closeMenu(); setDonateOpen(true); }}>Donate</button>
          </div>
        </div>
      </nav>

      <DonateModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </>
  );
};

export default Navigation;
