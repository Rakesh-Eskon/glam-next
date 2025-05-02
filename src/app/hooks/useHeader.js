// src/hooks/useHeader.js
import { useEffect, useState } from 'react';

const useHeader = () => {
  const [scrollY, setScrollY] = useState(0);
  const [submenuActive, setSubmenuActive] = useState(false);

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
  useEffect(() => {
    const menu = document.querySelector(".glamblush-menu");
    const toggleButton = document.querySelector(".ann-js-glamblush-nav-toggle");
    const body = document.body;

    if (body.classList.contains("menu-open")) {
      toggleButton.classList.remove("active");
      body.classList.remove("menu-open");
      menu.classList.remove("glamblush-menu-show");
    }
  }, []); // No dependency since we aren't using useLocation

  const toggleSubmenu = () => {
    setSubmenuActive((prev) => !prev);
  };

  return { navbarClass, toggleSubmenu };
};

export default useHeader;
