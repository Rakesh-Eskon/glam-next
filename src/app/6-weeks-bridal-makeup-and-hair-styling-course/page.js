import React from "react";
import Image from "next/image";
import CoursesForm from "../components/CoursesForm";

const Page = () => {
  return (
    <div>
      <div
        className="breadcrumb-section"
        style={{
          backgroundImage:
            "url('/assets/images/courses/personal-grooming-course/banner.webp')",
        }}
      >
        <div className="breadcrumb-container">
          <span className="page-name">
            06 Weeks Bridal Makeup And Hair Styling Course
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
                    <p className="bullet" data-target="#Module1">
                      <span>Module 1 : </span>Introduction to the World of
                      Makeup Theory
                    </p>
                    <p className="bullet" data-target="#Module2">
                      <span>Module 2 : </span>Product knowledge & Hands-On
                      Practical Sessions
                    </p>
                    <p className="bullet" data-target="#Module3">
                      <span>Module 3 : </span>Types of Makeup Looks
                    </p>
                    <p className="bullet" data-target="#Module4">
                      <span>Module 4 : </span>Hair styling
                    </p>
                    <p className="bullet" data-target="#Module5">
                      <span>Module 5 : </span>Interpersonal skills
                    </p>
                    <p className="bullet" data-target="#Module6">
                      <span>Module 6 : </span>Internship and Placement Guidance
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
                  <div className="scroll-content" id="Module1">
                    <div className="about-img">
                      <Image
                        src="assets/images/courses/6-weeks-bridal-makeup-and-hair-styling-course/course-modules/module1.png"
                        alt="Module 1"
                        width={500} // Adjust based on your design
                        height={300} // Adjust based on your design
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 1 : </span>Introduction to the World of
                          Makeup Theory
                        </h4>
                      </div>
                      <div className="breif-point">
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
                  <div className="scroll-content" id="Module2">
                    <div className="about-img">
                      <Image
                        src="assets/images/courses/6-weeks-bridal-makeup-and-hair-styling-course/course-modules/module2.png"
                        alt="Module 2"
                        width={500} // Adjust based on your design
                        height={300} // Adjust based on your design
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 2 : </span>Product knowledge & Hands-On
                          Practical Sessions
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>Know your concealer</p>
                        <p>Know your powders and compacts</p>
                        <p>Know your foundation</p>
                        <p>Know your eyebrow pallets</p>
                        <p>Know your eyebrow pencils and gels</p>
                        <p>Know your lipstick</p>
                        <p>Know your lashes</p>
                        <p>Know your liners</p>
                        <p>Learn essential techniques for base makeup</p>
                        <p>Foundation</p>
                        <p>Concealing</p>
                        <p>Correcting and camouflaging</p>
                        <p>Pigmentation on faces</p>
                        <p>Pimple, pores and blemishes coverage</p>
                        <p>Vitiligo</p>
                        <p>Rosacea</p>
                        <p>Master eye makeup</p>
                        <p>Including eyeshadow</p>
                        <p>Eyeliner, and mascara</p>
                        <p>Perfect eyebrow shaping</p>
                        <p>Contouring based on individual face structures</p>
                        <p>
                          Highlighting and contouring for various face shapes
                        </p>
                        <p>Lip shaping</p>
                        <p>Lipstick application techniques</p>
                        <p>Expertise in applying strip</p>
                        <p>Individual eyelashes</p>
                        <p>Introduction to airbrush makeup techniques</p>
                        <p>Practice on an airbrush machine</p>
                        <p>Cleaning and maintain airbrush kit</p>
                      </div>
                    </div>
                  </div>

                  {/* Module 3 */}
                  <div className="scroll-content" id="Module3">
                    <div className="about-img">
                      <Image
                        src="assets/images/courses/6-weeks-bridal-makeup-and-hair-styling-course/course-modules/module3.png"
                        alt="Module 3"
                        width={500} // Adjust based on your design
                        height={300} // Adjust based on your design
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 3 : </span>Types of Makeup Looks
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>Create various makeup looks</p>
                        <p>Dewy makeup</p>
                        <p>Explore waterproof makeup for special occasions</p>
                        <p>Learn natural bridal makeup styles</p>
                        <p>Heavy bridal makeup styles</p>
                        <p>Engagement makeup</p>
                        <p>Sangeet makeup</p>
                        <p>Cocktail makeup</p>
                        <p>Haldi makeup</p>
                        <p>Pool party makeup</p>
                        <p>Wedding siders makeup</p>
                        <p>Mature skin makeup</p>
                        <p>Makeup for grooms</p>
                        <p>Master the party makeup looks</p>
                        <p>
                          Explore a range of Indian bridal looks, both
                          traditional and modern
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Module 4 */}
                  <div className="scroll-content" id="Module4">
                    <div className="about-img">
                      <Image
                        src="assets/images/courses/6-weeks-bridal-makeup-and-hair-styling-course/course-modules/module4.png"
                        alt="Module 4"
                        width={500} // Adjust based on your design
                        height={300} // Adjust based on your design
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 4 : </span>Hair styling
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>Introduction to Hair Styling</p>
                        <p>Understanding hair types and textures</p>
                        <p>Hair analysis and consultation</p>
                        <p>Hair styling tools and products</p>
                        <p>Salon safety and hygiene</p>
                        <p>Basic Hair Care</p>
                        <p>Knowledge about Shampooing and conditioning</p>
                        <p>Various hair products</p>
                        <p>Scalp health</p>
                        <p>Blow-drying techniques</p>
                        <p>Brushing and detangling</p>
                        <p>Essential Techniques</p>
                        <p>Sectioning and parting hair</p>
                        <p>Curling and straightening with hot tools</p>
                        <p>Creating volume and texture</p>
                        <p>Hairpin placement</p>
                        <p>Basic Braiding</p>
                        <p>Three-strand braids</p>
                        <p>South Indian braids</p>
                        <p>French and Dutch braids</p>
                        <p>Fishtail braids</p>
                        <p>Braiding variations</p>
                        <p>Ponytails and Updos</p>
                        <p>Creating classic ponytails</p>
                        <p>Simple updo styles</p>
                        <p>Twist and roll techniques</p>
                        <p>Accessorizing hair</p>
                        <p>Bridal Hairstyles</p>
                        <p>Bridal hair consultation and styling</p>
                        <p>Incorporating veils and accessories</p>
                        <p>Braided bridal styles</p>
                        <p>Classic and modern bridal updos</p>
                        <p>Types of Buns</p>
                        <p>High buns</p>
                        <p>Low buns</p>
                        <p>Messy buns</p>
                        <p>Sock buns and donut buns</p>
                        <p>Working with Extensions</p>
                        <p>Types of hair extensions</p>
                        <p>Application and removal</p>
                        <p>Blending extensions with natural hair</p>
                      </div>
                    </div>
                  </div>

                  {/* Module 5 */}
                  <div className="scroll-content" id="Module5">
                    <div className="about-img">
                      <Image
                        src="assets/images/courses/6-weeks-bridal-makeup-and-hair-styling-course/course-modules/module5.png"
                        alt="Module 5"
                        width={500} // Adjust based on your design
                        height={300} // Adjust based on your design
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 5 : </span>Interpersonal skills
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>Client communication</p>
                        <p>Professionalism in makeup artistry</p>
                        <p>Building a portfolio</p>
                        <p>Networking and client acquisition</p>
                      </div>
                    </div>
                  </div>

                  {/* Module 6 */}
                  <div className="scroll-content" id="Module6">
                    <div className="about-img">
                      <Image
                        src="assets/images/courses/6-weeks-bridal-makeup-and-hair-styling-course/course-modules/module6.png"
                        alt="Module 6"
                        width={500} // Adjust based on your design
                        height={300} // Adjust based on your design
                      />
                    </div>
                    <div className="wrap-text">
                      <div className="section-title">
                        <h4 className="title">
                          <span>Module 6 : </span>Internship and Placement
                          Guidance
                        </h4>
                      </div>
                      <div className="breif-point">
                        <p>Hands-on internship opportunities</p>
                        <p>Guidance for industry placements</p>
                        <p>Building industry connections</p>
                        <p>Resume building and interview preparation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sticky-sidebar">
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
                src="assets/images/courses/6-weeks-bridal-makeup-and-hair-styling-course/curriculum/1.png"
                alt="Curriculum Image 1"
                width={500} // Adjust the width as needed
                height={600} // Adjust the height as needed
              />
            </div>
            <div className="col-md-3 p-0">
              <Image
                src="assets/images/courses/6-weeks-bridal-makeup-and-hair-styling-course/Curriculum/2.png"
                alt="Curriculum Image 2"
                width={500} // Adjust the width as needed
                height={600} // Adjust the height as needed
              />
            </div>
            <div className="col-md-3 p-0">
              <Image
                src="assets/images/courses/6-weeks-bridal-makeup-and-hair-styling-course/Curriculum/3.png"
                alt="Curriculum Image 3"
                width={500} // Adjust the width as needed
                height={600} // Adjust the height as needed
              />
            </div>
            <div className="col-md-3 p-0">
              <Image
                src="assets/images/courses/6-weeks-bridal-makeup-and-hair-styling-course/Curriculum/4.png"
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
                  src="assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/Certificate/completion-certificate.png"
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
                  src="assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/Certificate/1.webp"
                  alt="Certificate 1"
                  width={600} // Adjust the width as needed
                  height={400} // Adjust the height as needed
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="certificate">
                <Image
                  src="assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/Certificate/1.webp"
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
          backgroundImage: "url('/assets/images/cta-section.png')",
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
