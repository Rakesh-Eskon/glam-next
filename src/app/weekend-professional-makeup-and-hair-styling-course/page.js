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
            Weekend Professional Makeup And Hair Styling Course
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
                      <span>Module 1 :</span>Introduction to the World of Makeup
                      Theory
                    </p>
                    <p className="bullet" data-target="#Module2">
                      <span>Module 2 :</span>Product knowledge & Hands-On
                      Practical Sessions
                    </p>
                    <p className="bullet" data-target="#Module3">
                      <span>Module 3 :</span>Types of Makeup Looks
                    </p>
                    <p className="bullet" data-target="#Module4">
                      <span>Module 4 :</span>Hair styling
                    </p>
                    <p className="bullet" data-target="#Module5">
                      <span>Module 5 :</span>Special Topics
                    </p>
                    <p className="bullet" data-target="#Module6">
                      <span>Module 6 :</span>Interpersonal skills
                    </p>
                    <p className="bullet" data-target="#Module7">
                      <span>Module 7 :</span>Internship and Placement Guidance
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
                                    src="assets/images/courses/weekend-professional-makeup-and-hair-styling-course/course-modules/module1.png" 
                                    alt="Module 1" 
                                    width={500} // Specify the desired width
                                    height={300} // Specify the desired height
                                    layout="responsive" // Optional: to maintain aspect ratio
                                />
                            </div>
                            <div className="wrap-text">
                                <div className="section-title">
                                    <h4 className="title">
                                        <span>Module 1 :</span> Introduction to the World of Makeup Theory
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
                                    src="assets/images/courses/weekend-professional-makeup-and-hair-styling-course/course-modules/module2.png" 
                                    alt="Module 2" 
                                    width={500} 
                                    height={300} 
                                    layout="responsive" 
                                />
                            </div>
                            <div className="wrap-text">
                                <div className="section-title">
                                    <h4 className="title">
                                        <span>Module 2 :</span> Product knowledge & Hands-On Practical Sessions
                                    </h4>
                                </div>
                                <div className="breif-point">
                                    <p>Know your concealer</p>
                                    <p>Know your powders and compacts</p>
                                    <p>Know your foundation</p>
                                    <p>Know your eyebrow palettes</p>
                                    <p>Know your eyebrow pencils and gels</p>
                                    <p>Know your lipstick</p>
                                    <p>Know your lashes</p>
                                    <p>Know your liners</p>
                                    <p>Learn essential techniques for base makeup</p>
                                    <p>Foundation</p>
                                    <p>Concealing</p>
                                    <p>Correcting and camouflaging</p>
                                    <p>Pigmentation on faces</p>
                                    <p>Pimple, pores, and blemishes coverage</p>
                                    <p>Vitiligo</p>
                                    <p>Rosacea</p>
                                    <p>Master eye makeup</p>
                                    <p>Including eyeshadow, eyeliner, and mascara.</p>
                                    <p>Perfect eyebrow shaping</p>
                                    <p>Contouring based on individual face structures.</p>
                                    <p>Highlighting and contouring for various face shapes.</p>
                                    <p>Lip shaping</p>
                                    <p>Lipstick application techniques.</p>
                                    <p>Expertise in applying strip and individual eyelashes.</p>
                                    <p>Introduction to airbrush makeup techniques.</p>
                                    <p>Practice on an airbrush machine</p>
                                    <p>Cleaning and maintaining airbrush kit</p>
                                </div>
                            </div>
                        </div>

                        {/* Module 3 */}
                        <div className="scroll-content" id="Module3">
                            <div className="about-img">
                                <Image 
                                    src="assets/images/courses/weekend-professional-makeup-and-hair-styling-course/course-modules/module3.png" 
                                    alt="Module 3" 
                                    width={500} 
                                    height={300} 
                                    layout="responsive" 
                                />
                            </div>
                            <div className="wrap-text">
                                <div className="section-title">
                                    <h4 className="title">
                                        <span>Module 3 :</span> Types of Makeup Looks
                                    </h4>
                                </div>
                                <div className="breif-point">
                                    <p>Create various makeup looks</p>
                                    <p>HD base</p>
                                    <p>No-makeup look</p>
                                    <p>Dewy makeup.</p>
                                    <p>Explore waterproof makeup for special occasions.</p>
                                    <p>Learn natural bridal makeup styles</p>
                                    <p>Heavy bridal makeup styles.</p>
                                    <p>Engagement makeup</p>
                                    <p>Sangeet makeup</p>
                                    <p>Cocktail makeup</p>
                                    <p>Haldi makeup</p>
                                    <p>Pool party makeup</p>
                                    <p>Wedding siders makeup</p>
                                    <p>Mature skin makeup</p>
                                    <p>Makeup for grooms</p>
                                    <p>Master the bronze look</p>
                                    <p>Master the wet look</p>
                                    <p>Master the Glass finish look</p>
                                    <p>Master the red-carpet look</p>
                                    <p>Master the party makeup looks</p>
                                    <p>Dive into editorial makeup</p>
                                    <p>Dive into high-fashion makeup</p>
                                    <p>Dive into Halloween makeup</p>
                                    <p>Explore a range of Indian bridal looks, both traditional and modern</p>
                                </div>
                            </div>
                        </div>

                        {/* Module 4 */}
                        <div className="scroll-content" id="Module4">
                            <div className="about-img">
                                <Image 
                                    src="assets/images/courses/weekend-professional-makeup-and-hair-styling-course/course-modules/module4.png" 
                                    alt="Module 4" 
                                    width={500} 
                                    height={300} 
                                    layout="responsive" 
                                />
                            </div>
                            <div className="wrap-text">
                                <div className="section-title">
                                    <h4 className="title">
                                        <span>Module 4 :</span> Hair styling
                                    </h4>
                                </div>
                                <div className="breif-point">
                                    <h5>Introduction to Hair Styling</h5>
                                    <p>Understanding hair types and textures</p>
                                    <p>Hair analysis and consultation</p>
                                    <p>Hair styling tools and products</p>
                                    <p>Salon safety and hygiene</p>

                                    <h5>Basic Hair Care</h5>
                                    <p>Shampooing and conditioning</p>
                                    <p>Various hair products</p>
                                    <p>Scalp health</p>
                                    <p>Blow-drying techniques</p>
                                    <p>Brushing and detangling</p>

                                    <h5>Essential Techniques</h5>
                                    <p>Sectioning and parting hair</p>
                                    <p>Curling and straightening with hot tools</p>
                                    <p>Creating volume and texture</p>
                                    <p>Hairpin placement</p>

                                    <h5>Basic Braiding</h5>
                                    <p>Three-strand braids</p>
                                    <p>South Indian braids</p>
                                    <p>French and Dutch braids</p>
                                    <p>Fishtail braids</p>
                                    <p>Braiding variations</p>

                                    <h5>Ponytails and Updos</h5>
                                    <p>Creating classic ponytails</p>
                                    <p>Simple updo styles</p>
                                    <p>Twist and roll techniques</p>
                                    <p>Accessorizing hair</p>

                                    <h5>Bridal Hairstyles</h5>
                                    <p>Bridal hair consultation and styling</p>
                                    <p>Incorporating veils and accessories</p>
                                    <p>Braided bridal styles</p>
                                    <p>Classic and modern bridal updos</p>

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
                        <div className="scroll-content" id="Module5">
                            <div className="about-img">
                                <Image 
                                    src="assets/images/courses/weekend-professional-makeup-and-hair-styling-course/course-modules/module5.png" 
                                    alt="Module 5" 
                                    width={500} 
                                    height={300} 
                                    layout="responsive" 
                                />
                            </div>
                            <div className="wrap-text">
                                <div className="section-title">
                                    <h4 className="title">
                                        <span>Module 5 :</span> Professional Makeup for Different Industries
                                    </h4>
                                </div>
                                <div className="breif-point">
                                    <p>Makeup for photo shoots</p>
                                    <p>Makeup for fashion shows</p>
                                    <p>Makeup for commercials</p>
                                    <p>Makeup for editorial shoots</p>
                                    <p>Makeup for theater</p>
                                    <p>Makeup for weddings</p>
                                    <p>Makeup for events</p>
                                    <p>Makeup for music videos</p>
                                    <p>Makeup for social media</p>
                                    <p>Bridal trials and preparation.</p>
                                    <p>Makeup for films</p>
                                    <p>Model makeup.</p>
                                    <p>Makeup for runway</p>
                                    <p>Editorial makeup</p>
                                    <p>Makeup for commercials</p>
                                    <p>Model test shoots</p>
                                    <p>Lookbook shoots</p>
                                </div>
                            </div>
                        </div>

                        {/* Module 6 */}
                        <div className="scroll-content" id="Module6">
                            <div className="about-img">
                                <Image 
                                    src="assets/images/courses/weekend-professional-makeup-and-hair-styling-course/course-modules/module6.png" 
                                    alt="Module 6" 
                                    width={500} 
                                    height={300} 
                                    layout="responsive" 
                                />
                            </div>
                            <div className="wrap-text">
                                <div className="section-title">
                                    <h4 className="title">
                                        <span>Module 6 :</span> Portfolio Development
                                    </h4>
                                </div>
                                <div className="breif-point">
                                    <p>Understanding the importance of a professional portfolio.</p>
                                    <p>Collecting and selecting your best work.</p>
                                    <p>Building an online presence.</p>
                                    <p>Creating a digital portfolio.</p>
                                    <p>Portfolio presentation techniques.</p>
                                    <p>Networking tips for makeup artists.</p>
                                    <p>Marketing yourself as a makeup artist.</p>
                                </div>
                            </div>
                        </div>

                        {/* Module 7 */}
                        <div className="scroll-content" id="Module7">
                            <div className="about-img">
                                <Image 
                                    src="assets/images/courses/weekend-professional-makeup-and-hair-styling-course/course-modules/module7.png" 
                                    alt="Module 7" 
                                    width={500} 
                                    height={300} 
                                    layout="responsive" 
                                />
                            </div>
                            <div className="wrap-text">
                                <div className="section-title">
                                    <h4 className="title">
                                        <span>Module 7 :</span> Business and Freelancing
                                    </h4>
                                </div>
                                <div className="breif-point">
                                    <p>Understanding the makeup industry</p>
                                    <p>How to price your services</p>
                                    <p>Contracts and agreements</p>
                                    <p>Client management</p>
                                    <p>Building client relationships</p>
                                    <p>Time management for freelancers</p>
                                    <p>Financial management for your business</p>
                                    <p>Legal considerations</p>
                                    <p>Marketing strategies</p>
                                    <p>Creating your brand</p>
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
                src="assets/images/courses/weekend-professional-makeup-and-hair-styling-course/curriculum/1.png"
                alt="Curriculum Image 1"
                width={500} // Adjust the width as needed
                height={600} // Adjust the height as needed
              />
            </div>
            <div className="col-md-3 p-0">
              <Image
                src="assets/images/courses/weekend-professional-makeup-and-hair-styling-course/curriculum/2.png"
                alt="Curriculum Image 2"
                width={500} // Adjust the width as needed
                height={600} // Adjust the height as needed
              />
            </div>
            <div className="col-md-3 p-0">
              <Image
                src="assets/images/courses/weekend-professional-makeup-and-hair-styling-course/curriculum/3.png"
                alt="Curriculum Image 3"
                width={500} // Adjust the width as needed
                height={600} // Adjust the height as needed
              />
            </div>
            <div className="col-md-3 p-0">
              <Image
                src="assets/images/courses/weekend-professional-makeup-and-hair-styling-course/curriculum/4.png"
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
                  src="assets/images/courses/08-Weeks-Professional-Makeup-and-Hair-Styling-Course/Certificate/2.webp"
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
