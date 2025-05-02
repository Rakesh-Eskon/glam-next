"use client"; // This tells Next.js that this is a client component

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [submenuActive, setSubmenuActive] = useState(false);
  const router = useRouter(); // Initialize useRouter

  // Handle scroll to update scrollY state
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    setScrollY(window.scrollY); // Set initial scroll position on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle the navbar class based on scroll position
  const navbarClass = () => {
    return scrollY > 150 ? "glamblush-header scrolled awake" : "glamblush-header";
  };

  useEffect(() => {
    const toggleButton = document.querySelector(".ann-js-glamblush-nav-toggle");
    const menu = document.querySelector(".glamblush-menu");
    const body = document.body;
    const submenu = document.querySelector(".submenu");

    // Toggle submenu class based on submenuActive state
    if (submenu) {
      submenu.classList.toggle("active", submenuActive);
    }

    // Main Menu Toggle Logic
    const toggleMenu = (e) => {
      e.preventDefault();
      const menuItems = document.querySelectorAll(
        ".glamblush-menu .glamblush-menu-inner > ul > li"
      );

      if (body.classList.contains("menu-open")) {
        toggleButton.classList.remove("active");
        menuItems.forEach((item, i) => {
          setTimeout(() => {
            item.classList.remove("is-show");
          }, i * 100);
        });
        setTimeout(() => {
          menu.classList.remove("glamblush-menu-show");
        }, 800);
        body.classList.remove("menu-open");
      } else {
        menu.classList.add("glamblush-menu-show");
        toggleButton.classList.add("active");
        body.classList.add("menu-open");
        setTimeout(() => {
          menuItems.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add("is-show");
            }, i * 100);
          });
        }, 500);
      }
    };

    if (toggleButton) {
      toggleButton.addEventListener("click", toggleMenu);
      // Cleanup: Remove event listener when the component unmounts
      return () => {
        toggleButton.removeEventListener("click", toggleMenu);
      };
    }
  }, [submenuActive]);

  // Close sidebar when navigating to another page
  const handleLinkClick = () => {
    const menu = document.querySelector(".glamblush-menu");
    const toggleButton = document.querySelector(".ann-js-glamblush-nav-toggle");
    const body = document.body;

    // Close the menu for any link click
    toggleButton.classList.remove("active");
    body.classList.remove("menu-open");
    menu.classList.remove("glamblush-menu-show");
  };

  const toggleSubmenu = () => {
    setSubmenuActive((prev) => !prev);
  };

  return (
    <div>
      {/* Your existing JSX code */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <div className="sidebar-icon">
        <button
          className="glamblush-nav-toggle2 ann-js-glamblush-nav-toggle"
          aria-label="toggle"
        >
          <i></i>
        </button>
      </div>

      <nav className="glamblush-menu" id="ann-navbar-spy">
        <div className="glamblush-menu-inner" id="ann-navbar">
          <ul className="list-unstyled">
            <li>
              <Link href="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={handleLinkClick}>About</Link>
            </li>
            <li className="has-menu" onClick={toggleSubmenu}>
              <a href="#0" style={{ position: "relative" }}>
                Courses
              </a>
              <i
                className="ti-arrow-down"
                style={{ position: "absolute", right: "10%" }}
              ></i>
              <ul className={`submenu ${submenuActive ? "active" : ""}`}>
                <li>
                  <Link href="/8-week-professional" onClick={handleLinkClick}>
                    08 Weeks Professional Makeup And Hair Styling Course
                  </Link>
                </li>
                <li>
                  <Link href="/6-weeks-bridal-makeup-and-hair-styling-course" onClick={handleLinkClick}>
                    06 Weeks Bridal Makeup And Hair Styling Course
                  </Link>
                </li>
                <li>
                  <Link href="/4-weeks-professional-hair-styling-course" onClick={handleLinkClick}>
                    04 Weeks Professional Hair Styling Course
                  </Link>
                </li>
                <li>
                  <Link href="/weekend-professional-makeup-and-hair-styling-course" onClick={handleLinkClick}>
                    Weekend Professional Makeup And Hair Styling Course
                  </Link>
                </li>
                <li>
                  <Link href="/personal-makeup" onClick={handleLinkClick}>Personal Grooming Course</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/gallery" onClick={handleLinkClick}>Gallery</Link>
            </li>
            <li>
              <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-bottom">
          <div className="row justify-content-center align-item-center">
            <div className="copy-write-content">
              <p>
                Copyright © 2024{" "}
                <a href="index">
                  <span>Glam blush</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className={navbarClass()}>
        <div className="container">
          <div className="row align-items-center justify-content-space-between">
            <div className="col-md-4 glamblush-header-courses">
              <div>
               
                <Link href="/#courses">
                <h4>Our Courses</h4>
                </Link>
              </div>
            </div>
            {/* Logo */}
            <div className="col-md-4 glamblush-logo-wrap">
              <Link href="/" className="glamblush-logo" aria-label="logo">
                <Image
                  src="assets/images/logo/logo-white.webp" // Path relative to the public folder
                  className="img-fluid"
                  width={250}
                  height={69}
                  alt="Glamblush Logo"
                />
              </Link>
            </div>

            {/* Menu Burger */}
            <div className="col-md-4 text-right glamblush-menu-burger-wrap">
              <div className="glamblush-header-btn">
                <Link href="/contact">
                  <span>Enquiry Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
