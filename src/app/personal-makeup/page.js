import React from "react";
import Image from "next/image";
import CoursesForm from "../components/CoursesForm";
import { basePath } from "@/lib/basePath";

const Page = () => {
  return (
    <div>
      <div
        className="breadcrumb-section"
        style={{
          backgroundImage:
            `url('${basePath}/assets/images/courses/personal-grooming-course/banner.webp')`,
        }}
      >
        <div className="breadcrumb-container">
          <span className="page-name">Personal Grooming Course</span>
        </div>
      </div>

      <div className="section-padding background-image main-bg-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 pr-lg-4">
              <div className="scroll-container">
                <div className="scroll">
                  <div id="Module1">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/personal-grooming-course/personal-grooming.jpg`}
                        alt="Module 1"
                        layout="responsive"
                        width={800} // Adjust as needed
                        height={600} // Adjust as needed
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">Personal Grooming Course</h4>
                      </div>
                      <p>
                        Crafted for individuals aiming to acquire basic
                        self-makeup application skills or refine their existing
                        techniques, our personal makeup workshop offers expert
                        guidance from our team of professionals. We&apos;ll help
                        you grasp the fundamentals of your face shape, skin
                        tone, and provide tailored recommendations on product
                        choices to enhance your beauty and boost your
                        confidence.
                      </p>
                      <div className="breif-point">
                        <p>Basic Makeup</p>
                        <p>Advance Makeup</p>
                        <p>Latest Global Trends In Makeup</p>
                        <p>Different Eye Makeup Techniques</p>
                        <p>Highlighting/ Contouring</p>
                        <p>Lashes Application</p>
                        <p>4 Different Looks</p>
                        <p>Products Knowledge</p>
                        <p>Optional - Hairstyling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 sticky-sidebar">
              {/* Include your form component here */}
              {/* For example, if you have a ContactForm component */}
              <CoursesForm />
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Section */}
      <div className="full-width-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 p-0">
              <Image
                src={`${basePath}/assets/images/courses/personal-grooming-course/Curriculum/1.png`}
                alt="Curriculum Image 1"
                width={500} // Adjust the width as needed
                height={600} // Adjust the height as needed
              />
            </div>
            <div className="col-md-3 p-0">
              <Image
                src={`${basePath}/assets/images/courses/personal-grooming-course/Curriculum/2.png`}
                alt="Curriculum Image 2"
                width={500} // Adjust the width as needed
                height={600} // Adjust the height as needed
              />
            </div>
            <div className="col-md-3 p-0">
              <Image
                src={`${basePath}/assets/images/courses/personal-grooming-course/Curriculum/3.png`}
                alt="Curriculum Image 3"
                width={500} // Adjust the width as needed
                height={600} // Adjust the height as needed
              />
            </div>
            <div className="col-md-3 p-0">
              <Image
                src={`${basePath}/assets/images/courses/personal-grooming-course/Curriculum/4.png`}
                alt="Curriculum Image 4"
                width={500} // Adjust the width as needed
                height={600} // Adjust the height as needed
              />
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <div className="section-padding main-bg-color">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about-img pr-lg-2">
                <Image
                  src={`${basePath}/assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/Certificate/completion-certificate.png`}
                  alt="Completion Certificate"
                  width={500} // Adjust the width as needed
                  height={500} // Adjust the height as needed
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="wrap-text text-center pl-lg-2">
                <div className="section-title">
                  <h2 className="title2">
                    Get Certificate on Course Completion
                  </h2>
                </div>
                <p className="mb-0">
                  Upon successfully finishing our professional courses, receive
                  certification to showcase your expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="full-width-section personal-grooming-section">
        <div className="container-fluid">
          <div className="row gap-0">
            <div className="col-md-6">
              <div className="certificate">
                <Image
                  src={`${basePath}/assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/Certificate/1.webp`}
                  alt="Certificate 1"
                  width={600} // Adjust the width as needed
                  height={400} // Adjust the height as needed
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="certificate">
                <Image
                  src={`${basePath}/assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/Certificate/2.webp`}
                  alt="Certificate 2"
                  width={600} // Adjust the width as needed
                  height={400} // Adjust the height as needed
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="footer"
        className="footer-section section-padding background-image"
        style={{
          backgroundImage: `url('${basePath}/assets/images/cta-section.webp')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}>
        <div className="left-fade"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wrap-text text-center">
                <h2
                  className="glamblush-heading animate-box"
                  data-animate-effect="fadeInUp">
                  Craft Your Future In Makeup Artistry At Mumbai&apos;s Top
                  Makeup Academy
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

export default Page;
