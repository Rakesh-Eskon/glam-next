import React from 'react';

const CoursesForm = () => {
  return (
    <div>
      <div className="contact-box-design">
        <div className="text-center">
          <h2 className="glamblush-heading animate-box" data-animate-effect="fadeInUp">
            Get in touch
          </h2>
          <p>For Any Query Contact us</p>
        </div>
        <form
          id="contact-form"
          name="contact-form"
          role="form"
          className="php-email-form aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-md-12 form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
              />
              <span className="error_field" id="name_error"></span>
            </div>
            <div className="col-md-12 form-group mt-3 mt-md-0">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              <span className="error_field" id="email_error"></span>
            </div>
            <div className="col-md-12 form-group mt-3 mt-md-0">
              <label htmlFor="phone">WhatsApp No.</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Your WhatsApp No."
              />
              <span className="error_field" id="phone_error"></span>
            </div>
            <div className="col-md-12 form-group mt-3 mt-md-0">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                id="city"
                placeholder="Your City"
              />
              <span className="error_field" id="city_error"></span>
            </div>

            <div className="col-md-12 form-group mt-3 mt-md-0">
              <label htmlFor="course">Select Course</label>
              <select name="course" id="course" className="form-select">
                <option value="" disabled selected>
                  Select a course
                </option>
                <option value="04 Weeks Professional Hair Styling Course">
                  04 Weeks Professional Hair Styling Course
                </option>
                <option value="06 Weeks Bridal Makeup And Hair Styling Course">
                  06 Weeks Bridal Makeup And Hair Styling Course
                </option>
                <option value="08 Weeks Professional Makeup And Hair Styling Course">
                  08 Weeks Professional Makeup And Hair Styling Course
                </option>
                <option value="Personal Grooming Course">
                  Personal Grooming Course
                </option>
                <option value="Weekend Professional Makeup And Hair Styling Course">
                  Weekend Professional Makeup And Hair Styling Course
                </option>
              </select>
              <span className="error_field" id="course_error"></span>
            </div>
          </div>

          <div className="custom-btn text-center">
            <button className="btn-style" type="submit" id="send" name="send">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoursesForm;
