"use client"; // Make it a client component

import React, { useEffect } from 'react';

function Counter() {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter-number');

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0; // Start from 0
      const increment = Math.ceil(target / 100); // Fixed increment

      const updateCount = () => {
        count += increment; // Increment by fixed amount
        if (count < target) {
          counter.innerText = count + "+"; // Update the counter display
          requestAnimationFrame(updateCount); // Use requestAnimationFrame for smoother animation
        } else {
          counter.innerText = target + "+"; // Ensure it doesn't exceed the target
        }
      };
      updateCount(); // Start the counter
    });
  }, []);

  
  return (
    <div className="counter-section section-padding">
      <div className="container">
        <div className="row align-item-center">
          <div className="col-md-4">
            <div className="counter-box d-lg-flex">
              <h3 className="counter-number" data-target="500">0+</h3>
              <p className="counter-para">Students Trained</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="counter-box d-lg-flex">
              <h3 className="counter-number" data-target="1000">0+</h3>
              <p className="counter-para">Bridal Makeover</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="counter-box d-lg-flex">
              <h3 className="counter-number" data-target="10">0+</h3>
              <p className="counter-para">Years of Existence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
