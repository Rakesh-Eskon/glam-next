import React, { useEffect } from 'react';
import $ from 'jquery'; // Make sure jQuery is installed and imported

const Faq = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && $('.faqs-box').length) {
      $('.faqs-box').on('click', '.acc-btn', function () {
        const outerBox = $(this).parents('.faqs-box'),
          target = $(this).parents('.accordion');

        if ($(this).next('.acc-content').is(':visible')) {
          $(this).removeClass('active');
          $(this).next('.acc-content').slideUp(300);
          outerBox.children('.accordion').removeClass('active-block');
        } else {
          outerBox.find('.accordion .acc-btn').removeClass('active');
          $(this).addClass('active');
          outerBox.children('.accordion').removeClass('active-block');
          outerBox.find('.accordion').children('.acc-content').slideUp(300);
          target.addClass('active-block');
          $(this).next('.acc-content').slideDown(300);
        }
      });
    }

    // Cleanup function to remove event listeners
    return () => {
      if (typeof window !== 'undefined') {
        $('.faqs-box').off('click', '.acc-btn');
      }
    };
  }, []);

  return (
    <div>
      {/* FAQs Section */}
      <div id="faqs" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="glamblush-heading-meta animate-box" data-animate-effect="fadeInUp">
                F.A.Qs
              </span>
              <h2 className="glamblush-heading animate-box" data-animate-effect="fadeInUp">
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <ul className="faqs-box clearfix">
                <li className="accordion block active-block">
                  <div className="acc-btn active">
                    How can I enroll in Glam Blush courses?
                  </div>
                  <div className="acc-content current">
                    <div className="content">
                      <div className="text">
                        Students can enroll in Glam Blush courses by filling out the enrolment form or by
                        contacting directly through the details provided on the website.
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn">
                    What different courses does Glam Blush offer?
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Glam Blush offers a range of courses including an 08 Weeks Professional Makeup
                        And Hairstyling Course, a 06 Weeks Professional Bridal Course, a 04 Weeks
                        Professional Hairstyling Course, and Personal Grooming sessions.
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn">
                    Will I receive certification after completing courses at Glam Blush Makeup Academy?
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Yes, upon successful completion of our Professional Makeup Course, you will
                        receive a certification from Glam Blush Makeup Academy.
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn">
                    Is previous makeup experience required to enroll in Glam Blush&apos;s Professional Makeup
                    Course?
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        No prior makeup experience is necessary to join our Professional Makeup Course
                        at Glam Blush. Our courses are designed to accommodate all skill levels, from
                        complete beginners to seasoned artists seeking to refine their techniques.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
