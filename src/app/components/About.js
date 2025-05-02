"use client";
import React from 'react';
import Counter from "./Counter";
import Image from "next/image";
import Testimonial from './Testimonial';
import Services from './Services';

const About = () => {
  return (
    <div>
      <div
        className="breadcrumb-section about-breadcrumb"
        style={{ backgroundImage: "url('./assets/images/about/about.webp')" }} // Ensure path correctness
      >
        <div className="breadcrumb-container">
          <span className="page-name">About us</span>
        </div>
      </div>
      <Counter />
      <div className="section-padding background-image">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-img">
                <Image
                  src="assets/images/about/founder.webp"
                  alt="Founder"
                  width={500} // Set the width you want the image to be
                  height={500} // Set the height you want the image to be
                  layout="responsive" // Optional: use this for responsive images
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="wrap-text pl-lg-4">
                <div className="section-title">
                  <h2 className="title">Our Founder</h2>
                </div>
                <div className="heading-meta">Vishakha Verma</div>
                <p>
                  Vishakha Verma is renowned as one of the best makeup artists
                  in Mumbai, with a rich experience spanning over 10 years.
                  Having honed her skills at prestigious academies across the
                  globe, including the London School of Makeup Dubai, Delmar
                  Makeup Academy London, Marvie and Beck, and Farouk Shamratov
                  Hair, Vishaka stands out for her expertise and dedication to
                  her craft.
                </p>

                <p className="mb-0">
                  As the founder of one of the leading makeup academies in
                  Mumbai, Vishaka mission is to groom aspiring makeup artists
                  into professionals of the highest caliber. With over 10 years
                  of hands-on experience, she firmly believes in providing her
                  students with real-world learning opportunities. Vishaka
                  actively involves her students in the latest client projects,
                  ranging from high-fashion shoots to bridal makeup, ensuring
                  they receive practical exposure and invaluable insights into
                  the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding background-image main-bg-color">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="wrap-text pr-lg-2">
                <div className="section-title">
                  <h2 className="title">About Glam Blush</h2>
                </div>
                <p>
                  Renowned as the premier makeup academy in Mumbai, Glam Blush
                  offers extensive and professional makeup and hairstyling
                  courses. Our steadfast commitment to excellence and innovative
                  strategies in makeup education sets us apart as the preeminent
                  makeup academy in Mumbai, preparing students for successful
                  endeavors in the beauty sector.
                </p>

                <div className="row align-items-stretch">
                  <div className="col-md-6 animate-box fadeInUp animated">
                    <div className="glamblush-about-award-content">
                      <a href="#">
                        <Image
                          className="img-fluid"
                          src="assets/images/certificate/hands-on-training.png"
                          alt="Hands-on Training"
                          width={150} // Set appropriate width
                          height={150} // Set appropriate height
                        />
                      </a>
                      <h6>Hands-on Training</h6>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box fadeInUp animated">
                    <div className="glamblush-about-award-content">
                      <a href="#">
                        <Image
                          className="img-fluid"
                          src="assets/images/certificate/international-certificate.png"
                          alt="International Certificate"
                          width={150} // Set appropriate width
                          height={150} // Set appropriate height
                        />
                      </a>
                      <h6>International Certificate of Course Completion</h6>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box fadeInUp animated">
                    <div className="glamblush-about-award-content">
                      <a href="#">
                        <Image
                          className="img-fluid"
                          src="assets/images/certificate/guidance-on-placements.png"
                          alt="Guidance on Placements"
                          width={150} // Set appropriate width
                          height={150} // Set appropriate height
                        />
                      </a>
                      <h6>Guidance on Placements</h6>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box fadeInUp animated">
                    <div className="glamblush-about-award-content">
                      <a href="#">
                        <Image
                          className="img-fluid"
                          src="assets/images/certificate/guaranteed-internship.webp"
                          alt="Guaranteed Internship"
                          width={150} // Set appropriate width
                          height={150} // Set appropriate height
                        />
                      </a>
                      <h6>Guaranteed Internship</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-img">
                <Image
                  className="img-fluid"
                  src="assets/images/about/about-glam-page.webp"
                  alt="About Glam Blush"
                  width={500} // Set appropriate width
                  height={500} // Set appropriate height
                  layout="responsive" // Optional: use this for responsive images
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brands We Use Section */}
      <div id="glamblush-brands" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="title2">Brands We Use</h2>
              </div>
              <p>
                As the premier professional makeup academy in Mumbai, Glam Blush
                partners with the finest makeup brands globally. Training with
                elite brands such as MAC, Bobbi Brown, and more, our students
                gain experience with the tools and products used by top
                professionals, reinforcing our status as the best makeup academy
                in India.
              </p>
            </div>
          </div>
          <div className="row gap-1 justify-content-center">
            {Array.from({ length: 10 }, (_, index) => (
              <div
                key={index}
                className="col-md-2 col-sm-6 p-lg-0 animate-box"
                data-animate-effect="fadeInUp"
              >
                <div className="glamblush-brands">
                  <Image
                    src={`/assets/images/brands/Item${
                      index === 0 ? "" : `-${index}`
                    }.webp`} // Dynamic path for images
                    className="img-fluid"
                    alt={`Brand ${index + 1}`}
                    width={150} // Set appropriate width
                    height={150} // Set appropriate height
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Why Join Glam Blush Academy Section */}
      <div className="section-padding background-image main-bg-color">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-img">
                <Image
                  src="assets/images/about/why-join-glamblush.webp" // Updated path format
                  alt="Why Join Glam Blush Academy"
                  width={500} // Set appropriate width
                  height={500} // Set appropriate height
                  className="img-fluid" // Ensure fluid styling
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="wrap-text pl-lg-2">
                <div className="section-title">
                  <h2 className="title">Why join Glam Blush Academy?</h2>
                </div>
                <p>
                  Glam Blush Makeup Academy empowers students with essential
                  skills, creativity, and confidence to succeed in the dynamic
                  makeup industry. Led by experienced professionals, our courses
                  incorporate cutting-edge techniques and insights into the
                  latest industry trends and technologies. What truly sets us
                  apart is our emphasis on real-world experience. Through
                  internships, students have the unique opportunity to work on
                  real brides and celebrity shoots, gaining invaluable hands-on
                  experience that prepares them for success.
                </p>
                <p>
                  Our personalized one-on-one training ensures that each student
                  receives tailored guidance to refine their skills effectively.
                  By choosing Glam Blush, you not only learn the art of makeup
                  but also build a network of industry professionals and
                  cultivate the creative confidence essential for thriving in
                  the competitive beauty and fashion landscape. Take the first
                  step towards a rewarding career in makeup artistry with Glam
                  Blush Makeup Academy today.
                </p>
                <div className="custom-btn">
                  <a
                    className="btn-style"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send/?phone=919167263001"
                  >
                    Enquiry Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  <Services/>

      {/* 5 Star Accredited Academy Section */}
      <div id="certificate" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="title2">5 Star Accredited Academy</h2>
              </div>
              <p>
                Glam Blush academy proudly holds a prestigious 5-star
                accreditation from the International Board of Education
                (Department of Aesthetics and Cosmetology).
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="glamblush-certificate">
                <Image
                  src="assets/images/certificate/international-certification1.webp" // Updated image path
                  className="img-fluid" // Responsive styling
                  alt="International Certification 1"
                  width={400} // Set appropriate width
                  height={500} // Set appropriate height
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="glamblush-certificate">
                <Image
                  src="assets/images/certificate/international-certification2.webp" // Updated image path
                  className="img-fluid" // Responsive styling
                  alt="International Certification 2"
                  width={400} // Set appropriate width
                  height={500} // Set appropriate height
                />
              </div>
            </div>
          </div>
        </div>
      </div>

<Testimonial/>
      {/* Footer Section */}
      <div
        id="footer"
        className="footer-section section-padding background-image"
        style={{
          backgroundImage: "url('/assets/images/cta-section.png')", // Updated path
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="left-fade"></div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wrap-text text-center">
                <h2 className="glamblush-heading">
                  Get Industry-Ready by Enrolling in our Pro Makeup & Hair
                  Styling Courses
                </h2>

                <div className="custom-btn">
                  <a
                    className="btn-style"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send/?phone=919167263001"
                  >
                    Enquiry Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
