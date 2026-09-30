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
          <span className="page-name">
            04 Weeks Professional Hair Styling Course
          </span>
        </div>
      </div>

      <div className="section-padding background-image main-bg-color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wrap-text">
                <div className="section-title">
                  <h2 className="title">Curriculum</h2>
                </div>
                <div className="course-content-point">
                  <div className="points">
                    <p className="bullet" data-target="#introduction">
                      <span>Module 1 : </span>Introduction to Hair Styling
                    </p>
                    <p className="bullet" data-target="#product-knowledge">
                      <span>Module 2 : </span>Basic Hair Care
                    </p>
                    <p className="bullet" data-target="#makeup-looks">
                      <span>Module 3 : </span>Essential Techniques
                    </p>
                    <p className="bullet" data-target="#hair-styling">
                      <span>Module 4 : </span>Basic Braiding
                    </p>
                    <p className="bullet" data-target="#special-topics">
                      <span>Module 5 : </span>Ponytails and Updos
                    </p>
                    <p className="bullet" data-target="#personal-skills">
                      <span>Module 6 : </span>Bridal Hairstyles
                    </p>
                    <p className="bullet" data-target="#Internship">
                      <span>Module 7 : </span>Types of Buns
                    </p>
                    <p
                      className="bullet"
                      data-target="#working-with-extensions"
                    >
                      <span>Module 8 : </span>Working with Extensions{" "}
                    </p>
                    <p className="bullet" data-target="#special-occasion">
                      <span>Module 9 : </span>Special Occasion Styles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 pr-lg-4">
              <div className="scroll-container">
                <div className="scroll">
                  <div className="scroll-content" id="introduction">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/4-weeks-professional-hair-styling-course/course-modules/module1.png`}
                        alt="Module 1: Introduction to Hair Styling"
                        width={500} // Adjust based on your design
                        height={300} // Adjust based on your design
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 1 : </span>Introduction to Hair Styling
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>Understanding hair types and textures</p>
                        <p>Hair analysis and consultation</p>
                        <p>Hair styling tools and products</p>
                        <p>Salon safety and hygiene</p>
                      </div>
                    </div>
                  </div>

                  <div className="scroll-content" id="product-knowledge">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/4-weeks-professional-hair-styling-course/course-modules/module2.png`}
                        alt="Module 2: Basic Hair Care"
                        width={500} // Adjust based on your design
                        height={300} // Adjust based on your design
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 2 : </span>Basic Hair Care
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>Shampooing and conditioning</p>
                        <p>Various hair products</p>
                        <p>Scalp health</p>
                        <p>Blow-drying techniques</p>
                        <p>Brushing and detangling</p>
                      </div>
                    </div>
                  </div>

                  <div className="scroll-content" id="makeup-looks">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/4-weeks-professional-hair-styling-course/course-modules/module3.png`}
                        alt="Module 3: Essential Techniques"
                        width={500} // Adjust based on your design
                        height={300} // Adjust based on your design
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 3 : </span>Essential Techniques
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>Sectioning and parting hair</p>
                        <p>Curling and straightening with hot tools</p>
                        <p>Creating volume and texture</p>
                        <p>Hairpin placement</p>
                      </div>
                    </div>
                  </div>

                  <div className="scroll-content" id="hair-styling">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/4-weeks-professional-hair-styling-course/course-modules/module4.png`}
                        alt="Module 4: Basic Braiding"
                        width={500} // Adjust based on your design
                        height={300} // Adjust based on your design
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 4 : </span>Basic Braiding
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>Three-strand braids</p>
                        <p>South Indian braids</p>
                        <p>French and Dutch braids</p>
                        <p>Fishtail braids</p>
                        <p>Braiding variations</p>
                      </div>
                    </div>
                  </div>

                  <div className="scroll-content" id="special-topics">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/4-weeks-professional-hair-styling-course/course-modules/module5.png`}
                        alt="Module 5: Ponytails and Updos"
                        width={500} // Adjust based on your design
                        height={300} // Adjust based on your design
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 5 : </span>Ponytails and Updos
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>Creating classic ponytails</p>
                        <p>Simple updo styles</p>
                        <p>Twist and roll techniques</p>
                        <p>Accessorizing hair</p>
                      </div>
                    </div>
                  </div>

                  <div className="scroll-content" id="personal-skills">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/4-weeks-professional-hair-styling-course/course-modules/module6.png`}
                        alt="Module 6: Bridal Hairstyles"
                        width={500} // Adjust based on your design
                        height={300} // Adjust based on your design
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 6 : </span>Bridal Hairstyles
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>Bridal hair consultation and styling</p>
                        <p>Incorporating veils and accessories</p>
                        <p>Braided bridal styles</p>
                        <p>Classic and modern bridal updos</p>
                      </div>
                    </div>
                  </div>

                  <div className="scroll-content" id="Internship">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/4-weeks-professional-hair-styling-course/course-modules/module7.png`}
                        alt="Module 7: Types of Buns"
                        width={500} // Adjust based on your design
                        height={300} // Adjust based on your design
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 7 : </span> Types of Buns
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>High buns</p>
                        <p>Low buns</p>
                        <p>Messy buns</p>
                        <p>Sock buns and donut buns</p>
                      </div>
                    </div>
                  </div>

                  <div className="scroll-content" id="working-with-extensions">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/4-weeks-professional-hair-styling-course/course-modules/module8.png`}
                        alt="Module 8: Working with Extensions"
                        width={500} // Adjust based on your design
                        height={300} // Adjust based on your design
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 8 : </span> Working with Extensions{" "}
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>Types of hair extensions</p>
                        <p>Application and removal</p>
                        <p>Blending extensions with natural hair</p>
                      </div>
                    </div>
                  </div>

                  <div className="scroll-content" id="special-occasion">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/4-weeks-professional-hair-styling-course/course-modules/module9.png`}
                        alt="Module 9: Special Occasion Styles"
                        width={500} // Adjust based on your design
                        height={300} // Adjust based on your design
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 9 : </span> Special Occasion Styles
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>Prom and formal styles</p>
                        <p>Vintage looks</p>
                        <p>Themed styles</p>
                        <p>Styling for other special occasions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 sticky-sidebar">
              {/* Include the course form here */}
              {/* Example: */}
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
                src={`${basePath}/assets/images/courses/4-weeks-professional-hair-styling-course/curriculum/1.png`}
                alt="Curriculum Image 1"
                width={500} // Adjust the width as needed
                height={600} // Adjust the height as needed
              />
            </div>
            <div className="col-md-3 p-0">
              <Image
                src={`${basePath}/assets/images/courses/4-weeks-professional-hair-styling-course/curriculum/2.png`}
                alt="Curriculum Image 2"
                width={500} // Adjust the width as needed
                height={600} // Adjust the height as needed
              />
            </div>
            <div className="col-md-3 p-0">
              <Image
                src={`${basePath}/assets/images/courses/4-weeks-professional-hair-styling-course/curriculum/3.png`}
                alt="Curriculum Image 3"
                width={500} // Adjust the width as needed
                height={600} // Adjust the height as needed
              />
            </div>
            <div className="col-md-3 p-0">
              <Image
                src={`${basePath}/assets/images/courses/4-weeks-professional-hair-styling-course/curriculum/4.png`}
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
        }}
      >
        <div className="left-fade"></div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wrap-text text-center">
                <h2
                  className="glamblush-heading animate-box"
                  data-animate-effect="fadeInUp"
                >
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
