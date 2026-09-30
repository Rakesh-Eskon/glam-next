"use client";
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
            8 Weeks Professional Makeup Artist Course
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
                      <span>Module 1 : </span>Introduction to the World of
                      Makeup Theory
                    </p>
                    <p className="bullet" data-target="#product-knowledge">
                      <span>Module 2 : </span>Product knowledge & Hands-On
                      Practical Sessions
                    </p>
                    <p className="bullet" data-target="#makeup-looks">
                      <span>Module 3 : </span>Types of Makeup Looks
                    </p>
                    <p className="bullet" data-target="#hair-styling">
                      <span>Module 4 : </span>Hair styling
                    </p>
                    <p className="bullet" data-target="#special-topics">
                      <span>Module 5 : </span>Special Topics
                    </p>
                    <p className="bullet" data-target="#personal-skills">
                      <span>Module 6 : </span>Interpersonal skills
                    </p>
                    <p className="bullet" data-target="#Internship">
                      <span>Module 7 : </span>Internship and Placement Guidance
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
                  {/* Module 1 */}
                  <div className="scroll-content" id="introduction">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/personal-grooming-course/banner.webp`}
                        alt="Module 1"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 1: </span>Introduction to the World of
                          Makeup Theory
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>Introduction to the World of Makeup Theory</p>
                        <p>Explore the fundamentals</p>
                        <p>Theory of makeup artistry</p>
                        <p>Understand the history of makeup</p>
                        <p>Evolution of makeup</p>
                        <p>Hygiene and sanitation</p>
                        <p>Study color theory</p>
                        <p>Skin types</p>
                        <p>Face shapes</p>
                      </div>
                    </div>
                  </div>

                  {/* Module 2 */}
                  <div className="scroll-content" id="product-knowledge">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/courses-modules/module2.png`}
                        alt="Module 2"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 2: </span>Product knowledge & Hands-On
                          Practical Sessions
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p> Know your concealer</p>
                        <p> Know your powders and compacts</p>
                        <p> Know your foundation</p>
                        <p> Know your eyebrow pallets</p>
                        <p> Know your eyebrow pencils and gels</p>
                        <p> Know your lipstick</p>
                        <p> Know your lashes</p>
                        <p> Know your liners</p>
                        <p> Learn essential techniques for base makeup</p>
                        <p> Foundation</p>
                        <p> Concealing</p>
                        <p> Correcting and camouflaging</p>
                        <p> Pigmentation on faces</p>
                        <p> Pimple, pores and blemishes coverage</p>
                        <p> Vitiligo</p>
                        <p> Rosacea</p>
                        <p> Master eye makeup</p>
                        <p> Including eyeshadow</p>
                        <p> Eyeliner, and mascara.</p>
                        <p> Perfect eyebrow shaping</p>
                        <p> Contouring based on individual face structures.</p>
                        <p>
                          {" "}
                          Highlighting and contouring for various face shapes.
                        </p>
                        <p> Lip shaping</p>
                        <p> Lipstick application techniques.</p>
                        <p> Expertise in applying strip</p>
                        <p> Individual eyelashes.</p>
                        <p> Introduction to airbrush makeup techniques.</p>
                        <p> Practice on an airbrush machine</p>
                        <p> Cleaning and maintain airbrush kit</p>
                      </div>
                    </div>
                  </div>

                  {/* Repeat the above structure for additional modules (3, 4, 5, 6, 7) */}

                  {/* Module 3 */}
                  <div className="scroll-content" id="makeup-looks">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/courses-modules/module3.png`}
                        alt="Module 3"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 3: </span>Types of Makeup Looks
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p> Create various makeup looks</p>
                        <p> HD base</p>
                        <p> No-makeup look</p>
                        <p> Dewy makeup.</p>
                        <p> Explore waterproof makeup for special occasions.</p>
                        <p> Learn natural bridal makeup styles</p>
                        <p> Heavy bridal makeup styles.</p>
                        <p> Engagement makeup</p>
                        <p> Sangeet makeup</p>
                        <p> Cocktail makeup</p>
                        <p> Haldi makeup</p>
                        <p> Pool party makeup</p>
                        <p> Wedding siders makeup</p>
                        <p> Mature skin makeup</p>
                        <p> Make up for grooms</p>
                        <p> Master the bronze look</p>
                        <p> Master the wet look</p>
                        <p> Master the Glass finish look</p>
                        <p> Master the red-carpet look</p>
                        <p> Master the party makeup looks</p>
                        <p> Dive into editorial makeup</p>
                        <p> Dive into the high-fashion makeup</p>
                        <p> Dive into Halloween makeup</p>
                        <p>
                          {" "}
                          Explore a range of Indian bridal looks, both
                          traditional and modern
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Module 4 */}
                  <div className="scroll-content" id="hair-styling">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/courses-modules/module4.png`}
                        alt="Module 4"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 4: </span>Hair Styling
                        </h4>
                      </div>
                      <div className="breif-point">
                        <h5>Introduction to Hair Styling</h5>
                        <p>Understanding hair types and textures</p>
                        <p> Hair analysis and consultation</p>
                        <p> Hair styling tools and products</p>
                        <p> Salon safety and hygiene</p>

                        <h5>Basic Hair Care</h5>
                        <p> Shampooing and conditioning</p>
                        <p> Various hair products</p>
                        <p> Scalp health</p>
                        <p> Blow-drying techniques</p>
                        <p> Brushing and detangling</p>

                        <h5>Essential Techniques</h5>
                        <p> Sectioning and parting hair</p>
                        <p> Curling and straightening with hot tools</p>
                        <p> Creating volume and texture</p>
                        <p> Hairpin placement</p>

                        <h5>Basic Braiding</h5>
                        <p> Three-strand braids</p>
                        <p> South Indian braids</p>
                        <p> French and Dutch braids</p>
                        <p> Fishtail braids</p>
                        <p> Braiding variations</p>

                        <h5>Ponytails and Updos</h5>
                        <p> Creating classic ponytails</p>
                        <p> Simple updo styles</p>
                        <p> Twist and roll techniques</p>
                        <p> Accessorizing hair</p>

                        <h5>Bridal Hairstyles</h5>
                        <p> Bridal hair consultation and styling</p>
                        <p> Incorporating veils and accessories</p>
                        <p> Braided bridal styles</p>
                        <p> Classic and modern bridal updos</p>

                        <h5>Types of Buns</h5>
                        <p>High buns</p>
                        <p>Low buns</p>
                        <p>Messy buns</p>
                        <p>Sock buns and donut buns</p>

                        <h5>Working with Extensions</h5>
                        <p>Types of hair extensions</p>
                        <p>Application and removal</p>
                        <p>Blending extensions with natural hair</p>

                        <h5>Special Occasion Styles</h5>
                        <p>Prom and formal styles</p>
                        <p>Vintage looks</p>
                        <p>Themed styles</p>
                        <p>Styling for other special occasions</p>
                      </div>
                    </div>
                  </div>

                  {/* Module 5 */}
                  <div className="scroll-content" id="special-topics">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/courses-modules/module5.png`}
                        alt="Module 5"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 5: </span>Special Topics
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>Basics of Special Effects (SFX) makeup.</p>
                        <p>Basics of prosthetics</p>
                        <p>TV makeup techniques.</p>
                        <p>Photo shoot makeup techniques</p>
                        <p>Celebrity makeup</p>
                        <p>Ramp makeup</p>
                        <p>
                          {" "}
                          Understanding various lighting conditions for makeup.
                        </p>
                        {/* Add more points as necessary */}
                      </div>
                    </div>
                  </div>

                  {/* Module 6 */}
                  <div className="scroll-content" id="personal-skills">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/courses-modules/module6.png`}
                        alt="Module 6"
                        width={500}
                        height={300}
                        needed
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 6: </span>Interpersonal skills
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>Getting started as makeup actors</p>
                        <p>In-depth knowledge of marketing strategies</p>
                        <p>Building a strong makeup artist resume</p>
                        <p>Client handling techniques</p>
                        <p>Product drive by the trainers to makeup store</p>
                        <p>Product selection and building your makeup vanity</p>
                      </div>
                    </div>
                  </div>

                  {/* Module 7 */}
                  <div className="scroll-content" id="Internship">
                    <div className="about-img">
                      <Image
                        src={`${basePath}/assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/courses-modules/module7.png`}
                        alt="Module 7"
                        width={500}
                        height={300} // Adjust the width as needed  // Adjust the height as
                        needed
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 7: </span>Internship and Placement
                          Guidance
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>
                          Gain real-world experience through internship
                          opportunities
                        </p>
                        <p>Receive guidance and support for job placements</p>
                        <p>Build valuable industry connections</p>
                        <p>
                          Transition smoothly into your makeup and hair styling
                          career
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 sticky-sidebar">
                   <CoursesForm/>
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
                src={`${basePath}/assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/Curriculum/1.webp`}
                alt="Curriculum Image 1"
                width={500} // Adjust the width as needed
                height={600} // Adjust the height as needed
              />
            </div>
            <div className="col-md-3 p-0">
              <Image
                src={`${basePath}/assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/Curriculum/2.webp`}
                alt="Curriculum Image 2"
                width={500} // Adjust the width as needed
                height={600} // Adjust the height as needed
              />
            </div>
            <div className="col-md-3 p-0">
              <Image
                src={`${basePath}/assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/Curriculum/3.webp`}
                alt="Curriculum Image 3"
                width={500} // Adjust the width as needed
                height={600} // Adjust the height as needed
              />
            </div>
            <div className="col-md-3 p-0">
              <Image
                src={`${basePath}/assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/Curriculum/4.webp`}
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
                                src={`${basePath}/assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/Certificate/1.webp`}
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
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
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
                                Craft Your Future In Makeup Artistry At Mumbai&apos;s Top Makeup Academy
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
