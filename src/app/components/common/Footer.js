"use client"; // Add this line to make the component a client component

import React, { useEffect } from 'react';
import Link from 'next/link'; // Import Link from next/link

function Footer() {
  useEffect(() => {
    const progressWrap = document.querySelector('.progress-wrap path');
    const pathLength = progressWrap.getTotalLength();
    const offset = 150;

    // Set up the SVG path
    progressWrap.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressWrap.style.strokeDashoffset = pathLength;

    // Function to update progress on scroll
    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength / height);
      progressWrap.style.strokeDashoffset = progress;

      // Toggle visibility of the button
      if (scroll > offset) {
        document.querySelector('.progress-wrap').classList.add('active-progress');
      } else {
        document.querySelector('.progress-wrap').classList.remove('active-progress');
      }
    };

    // Scroll event listener for updating the progress
    window.addEventListener('scroll', updateProgress);

    // Scroll to top functionality
    document.querySelector('.progress-wrap').addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Native smooth scroll
      });
    });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <div>
      {/* Footer section */}
      <div id="footer-bottom" className="footer-bottom">
        <div className="container">
          <div className="first-section">
            <div className="row justify-content-center align-item-center">
              <div className="col-md-3 order-sm-2">
                <div className="menu-item text-center">
                  <ul className="d-lg-flex justify-content-between p-0">
                    <li>
                      <Link href="/about" className="footer-links">
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link href="/#courses" className="footer-links">
                        Courses
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 order-sm-3">
                <div className="menu-item text-center">
                  <ul className="d-lg-flex justify-content-between p-0">
                    <li>
                      <Link href="/gallery" className="footer-links">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link href="/reach-us" className="footer-links">
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="second-section">
            <div className="row justify-content-center align-item-center">
              <div className="col-md-12">
                <ul className="copy-write d-lg-flex text-center justify-content-between">
                  <li>© 2024 glamblush</li>
                  <li>
                    Developed and Maintained by 
                    <a
                      href="https://eskonwebsolutions.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    > Eskon Web Solutions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share bar */}
      <div className="share-bar">
        <ul className="share-bar--list">
          <li className="call share-bar--item">
            <a
              className="share-bar--item-link"
              aria-label="Contact us"
              href="tel:+91-9167263001"
            ></a>
          </li>
          <li className="whatsapp share-bar--item">
            <a
              className="share-bar--item-link"
              aria-label="Whatsapp us"
              href="https://api.whatsapp.com/send/?phone=919167263001"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
