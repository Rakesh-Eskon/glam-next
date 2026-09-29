"use client";
import { useEffect } from 'react';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Counter from "./Counter";
import Slider from "./Slider";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import Faq from "./Faq";

const founderImage = "/assets/images/home-images/founder/founder.webp"; 
const whyusImage = "/assets/images/home-images/why-us/why-us.webp";
const aboutglamImage = "/assets/images/home-images/about/about-glamblush.webp";
const serviceImage = "/assets/images/home-images/services/our-services.webp";
const ctaImage = "/assets/images/cta-section.webp";

const Home = () => {

  useEffect(() => {
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach((container) => {
      const videoEmbed = container.querySelector('.video-embed');
      const mobilePlaceholder = container.querySelector('.mobile-placeholder');
      const playIcon = container.querySelector('.play-icon');
      const mobilePlayBtn = container.querySelector('.mobile-play-btn');

      function playVideo() {
        if (!videoEmbed.innerHTML) {
          videoEmbed.innerHTML = `
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/szQuOmwt7Ro?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=szQuOmwt7Ro" frameborder="0" allowfullscreen></iframe>
          `;
          videoEmbed.style.display = 'block';
          mobilePlaceholder.style.display = 'none';
          mobilePlayBtn.style.display = 'none';
        }
      }

      function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      }

      container.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          playVideo();
        }
      });

      window.addEventListener('scroll', () => {
        if (isInViewport(container)) {
          playVideo();
        }
      });

      playIcon.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          playVideo();
        }
      });
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      city: e.target.city.value,
      course: e.target.course.value,
    };
  
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      alert('Your message has been sent!');
    } else {
      alert('Failed to send message. Please try again.');
    }
  };
  
  return (
    <div>
      <div id="home">
        <div className="glamblush-hero">
          <div className="hero-content">
            <ul className="slides">
              <li className="bg-fixed" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
                <Image
                  src="/assets/images/home-images/hero/banner.webp"
                  alt="Become an Certified Makeup & Hairstyling Expert"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  className="hero-bg-image"
                />
                <div className="overlay"></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                  <div className="row">
                    <div className="col-md-12 slider-text">
                      <div className="slider-text-inner">
                        <div className="mx-auto frame-inner">
                          <h1>
                            Become an Certified Makeup & Hairstyling Expert with
                            our Industry-Centric Courses
                          </h1>
                          <div className="enroll-now-btn">
                            <Link
                              href="https://api.whatsapp.com/send/?phone=919167263001"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>Enroll Now</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="hero-video">
          <div className="video-container">
            <Image
              className="video-placeholder mobile-placeholder img-fluid"
              src="/assets/images/home-images/video-bg2.webp"
              width={360}
              height={592}
              alt="Video Thumbnail"
            />
            <div className="video-embed" data-video-id="szQuOmwt7Ro"></div>
            <div className="mobile-play-btn">
              <i className="fa fa-play play-icon"></i>
            </div>
          </div>
        </div> 
      </div>

      <Counter/>
      <Slider/>

      <div className="section-padding glamblush-awards">
        <div className="container">
          <div className="row align-items-stretch glamblush-photos">
            <div className="col-12">
              <div className="row align-items-stretch">
                <div className="col-md-3 animate-box fadeInUp animated">
                  <div className="glamblush-award-content">
                    <Image
                      src="/assets/images/home-images/certificate/hands-on-training.webp"
                      className="img-fluid"
                      width={100}
                      height={100}
                      alt="Hands on Training"
                    />
                    <h3>Hands on Training</h3>
                  </div>
                </div>

                <div className="col-md-3 animate-box fadeInUp animated">
                  <div className="glamblush-award-content">
                    <Image
                      src="/assets/images/home-images/certificate/international-certificate.webp"
                      className="img-fluid"
                      width={100}
                      height={100}
                      alt="International Certificate on Course Completion"
                    />
                    <h3>International Certificate on Course Completion</h3>
                  </div>
                </div>

                <div className="col-md-3 animate-box fadeInUp animated">
                  <div className="glamblush-award-content">
                    <Image
                      src="/assets/images/home-images/certificate/guidance-on-placements.webp"
                      className="img-fluid"
                      width={100}
                      height={100}
                      alt="Guidance on Placements"
                    />
                    <h3>Guidance on Placements</h3>
                  </div>
                </div>

                <div className="col-md-3 animate-box fadeInUp animated">
                  <div className="glamblush-award-content">
                    <Image
                      src="/assets/images/home-images/certificate/guaranteed-internship.webp"
                      className="img-fluid"
                      width={100}
                      height={100}
                      alt="Guaranteed Internship"
                    />
                    <h3>Guaranteed Internship</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="our-founder" className="section-banner background-image main-bg-color" style={{ position: 'relative' }}>
        <Image src={founderImage} alt="Vishakha Verma - Our Founder" fill style={{ objectFit: 'cover' }} className="section-bg-image" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-md-6 d-mobile-none">
              <div className="about-img">
                <Image src="/assets/images/home-images/founder/founder-mobile.webp" alt="Founder" width={370} height={370} className="img-fluid" />
              </div>
            </div>
            <div className="offset-md-6 col-md-6">
              <div className="wrap-text">
                <div className="section-title">
                  <h2 className="title">Our Founder</h2>
                </div>
                <div className="heading-meta">Vishakha Verma</div>
                <p>Vishakha Verma is renowned as one of the best makeup artists in Mumbai, with a rich experience spanning over 10 years.</p>
                <p className="mb-0">As the founder of one of the leading makeup academies in Mumbai, Vishaka&apos;s mission is to groom aspiring makeup artists into professionals of the highest caliber.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Gallery/>

      <div id="why-glam-blush" className="section-banner background-image main-bg-color" style={{ position: 'relative' }}>
        <Image src={whyusImage} alt="Why join Glam Blush Academy" fill style={{ objectFit: 'cover' }} className="section-bg-image" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-md-6 order-sm-2">
              <div className="wrap-text">
                <div className="section-title">
                  <h2 className="title">Why join Glam Blush Academy?</h2>
                </div>
                <p>Glam Blush Makeup Academy offers industry-leading courses that empower students with essential makeup skills and confidence.</p>

                <div className="custom-btn">
                  <a className="btn-style" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=919167263001">Enquiry Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-sm-1 d-mobile-none">
              <div className="about-img">
                <Image src="/assets/images/home-images/why-us/why-us-mobile.webp" className="img-fluid" width={370} height={303} alt="Why join Glam Blush Academy" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="certificate" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="title2">5 Star Accredited Academy</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
              <div className="glamblush-certificate">
                <Image src="/assets/images/home-images/certificate/international-certification1.webp" className="img-fluid" width={350} height={501} alt="International Certification 1" />
              </div>
            </div>
            <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
              <div className="glamblush-certificate">
                <Image src="/assets/images/home-images/certificate/international-certification2.webp" className="img-fluid" width={350} height={417} alt="International Certification 2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about-glam-blush" className="section-banner background-image main-bg-color" style={{ position: 'relative' }}>
        <Image src={aboutglamImage} alt="About Glam Blush Academy" fill style={{ objectFit: 'cover' }} className="section-bg-image" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-md-5 order-sm-2">
              <div className="wrap-text">
                <div className="section-title">
                  <h2 className="title">About Glam Blush</h2>
                </div>
                <p>Glam Blush stands out as the best makeup academy in Mumbai and India, offering comprehensive and professional makeup artist courses in Mumbai.</p>
                <div className="custom-btn mb-20">
                  <a className="btn-style" href="about.php">Know More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-sm-2 d-mobile-none">
              <div className="about-img m-0">
                <Image src="/assets/images/home-images/about/about-glamblush-mobile.webp" className="img-fluid" width={370} height={330} alt="About Glam Blush" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="glamblush-brands" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="title2">Brands We Use</h2>
              </div>
            </div>
          </div>
          <div className="row gap-1 justify-content-center">
            {Array.from({ length: 10 }, (_, index) => (
              <div key={index} className="col-md-2 col-sm-6 p-lg-0 animate-box" data-animate-effect="fadeInUp">
                <div className="glamblush-brands">
                  <Image src={`/assets/images/home-images/brands/${index + 1}.webp`} className="img-fluid" width={188} height={121} alt={`Brand Item ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="our-services" className="section-banner background-image main-bg-color" style={{ position: 'relative' }}>
        <Image src={serviceImage} alt="Our Services" fill style={{ objectFit: 'cover' }} className="section-bg-image" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-md-6 d-mobile-none">
              <div className="about-img">
                <Image src="/assets/images/home-images/services/our-services-mobile.webp" className="img-fluid" width={370} height={330} alt="Our Services" />
              </div>
            </div>
            <div className="offset-md-6 col-md-6">
              <div className="wrap-text">
                <div className="section-title">
                  <h2 className="title">Our Services</h2>
                </div>
                <p>Beyond our renowned makeup artist courses in Mumbai...</p>
                <ul className="services-list">
                  <li>Bridal makeup / hairstyling</li>
                  <li>Photo shoot</li>
                  <li>Pre wedding shoots</li>
                  <li>Party makeup / hairstyling</li>
                  <li>Engagement makeup / hairstyling</li>
                  <li>Sangeet makeup / hairstyling</li>
                  <li>Theatre makeup / hairstyling</li>
                </ul>
                <div className="custom-btn">
                  <a className="btn-style" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=919167263001">Make A Reservation</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonial/>
      <Faq/>

      <section id="get-in-touch" className="get-in-touch section-padding main-bg-color">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6 pr-lg-4 mb-mobile">
              <div className="col-md-12 text-center">
                <h2 className="glamblush-heading animate-box" data-animate-effect="fadeInUp">Get in touch</h2>
                <p>Have a query? Complete the form below and our team will get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} id="contact-form" name="contact-form" className="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control" id="name" placeholder="Name" />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <label htmlFor="email">Email ID</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <label htmlFor="phone">Phone No.</label>
                    <div className="flex-number">
                      <p className="mb-0">+91</p>
                      <input type="text" className="form-control" name="phone" id="phone" placeholder="0000000000" />
                    </div>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" name="city" id="city" placeholder="Your City" />
                  </div>
                  <div className="col-md-12 form-group mt-3 mt-md-0">
                    <label htmlFor="course">Select Course</label>
                    <select aria-label="course" name="course" id="course" className="form-select">
                      <option value="" disabled="disabled" selected="selected"></option>
                      <option value="04 Weeks Professional Hair Styling Course">04 Weeks Professional Hair Styling Course</option>
                      <option value="06 Weeks Bridal Makeup And Hair Styling Course">06 Weeks Bridal Makeup And Hair Styling Course</option>
                      <option value="08 Weeks Professional Makeup And Hair Styling Course">08 Weeks Professional Makeup And Hair Styling Course</option>
                      <option value="Personal Grooming Course">Personal Grooming Course</option>
                      <option value="Weekend Professional Makeup And Hair Styling Course">Weekend Professional Makeup And Hair Styling Course</option>
                    </select>
                  </div>
                </div>
                <div className="custom-btn text-center">
                  <button className="btn-style" type="submit" id="send" name="send">Submit</button>
                </div>
              </form>
            </div>

            <div className="col-lg-6">
              <div className="map-img">
                <a target="_blank" rel="noreferrer noopener" aria-label="map" href="https://www.google.com/maps/place/GlamBlush+Best+Makeup+Academy+in+Mumbai/@19.174288,72.841571,14z/data=!4m6!3m5!1s0x3be7b6faeb9ac9e9:0xeb647dd47ec4bb70!8m2!3d19.1742882!4d72.8415714!16s%2Fg%2F11fxqwc1kk?hl=en-GB&entry=ttu">
                  <Image src="/assets/images/home-images/map.webp" className="m-none" width={735} height={453} alt="Map of GlamBlush location" />
                  <Image src="/assets/images/home-images/map2.webp" className="d-none" width={400} height={247} alt="Map of GlamBlush location" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-padding">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="title2">Contact us</h2>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-3 col-md-6 mb-sm-2">
              <div className="info-box">
                <i className="ti-mobile"></i>
                <h3>Call Us</h3>
                <p><a href="tel:+919167263001">+91 9167263001</a></p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-box">
                <i className="ti-email"></i>
                <h3>Email Us</h3>
                <p><a href="mailto:info@glamblush.in">info@glamblush.in</a></p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="info-box mb-0">
                <i className="ti-location-pin"></i>
                <h3>Our Address</h3>
                <p>1132/1099, Rustomjee Eaze Zone Mall, Vasari Hill Road, Malad (W), Mumbai - 400064.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="footer" className="footer-section background-image" style={{ position: 'relative' }}>
        <Image src={ctaImage} alt="Footer Background" fill style={{ objectFit: 'cover' }} className="footer-bg-image" />
        <div className="left-fade"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="wrap-text text-center">
                <h2 className="glamblush-heading">Craft Your Future In Makeup Artistry At Mumbai Top Makeup&apos;s Academy</h2>
                <div className="custom-btn">
                  <a className="btn-style" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=919167263001">Enquiry Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
