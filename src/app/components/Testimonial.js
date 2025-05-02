import React, { useEffect } from 'react';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from 'next/image';

const Testimonial = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      // Fancybox configuration (if needed)
    });
  }, []);

  return (
    <div className="section-padding glamblush-gallery">
      <section className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <span className="glamblush-heading-meta"></span>
            <h2 className="glamblush-heading">Testimonials</h2>
            <p>Hear from our graduates about their transformative journey at GlamBlush. Their success stories highlight our reputation as not just a professional makeup academy in Mumbai but as a beacon for aspiring artists across India.</p>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-3 col-sm-6 p-2">
            <article className="swiper-slide">
              <div className="animate-box video-testimonial-content fadeInUp animated" data-animate-effect="fadeInUp">
                <a aria-label="testimonial-popup" data-fancybox="" href="assets/images/home-images/testimonial-videos/aditi.mp4">
                  <Image
                    className="img-fluid"
                    src="assets/images/home-images/testimonial-videos/aditi.webp"
                    width={270}
                    height={463}
                    loading="lazy"
                    alt="Aditi testimonial"
                  />
                  <p><i className="ti-control-play"></i></p>
                </a>
                <div className="testimonials-content">
                  <p className="testimonial-heading">Aditi</p>
                  <p>Student, Glam Blush</p>
                </div>
              </div>
            </article>
          </div>

          <div className="col-md-3 col-sm-6 p-2">
            <article className="swiper-slide">
              <div className="animate-box video-testimonial-content fadeInUp animated" data-animate-effect="fadeInUp">
                <a aria-label="testimonial-popup" data-fancybox="" href="assets/images/home-images/testimonial-videos/priyanka.mp4">
                  <Image
                    className="img-fluid"
                    src="assets/images/home-images/testimonial-videos/priyanka.webp"
                    width={270}
                    height={463}
                    loading="lazy"
                    alt="Priyanka testimonial"
                  />
                  <p><i className="ti-control-play"></i></p>
                </a>
                <div className="testimonials-content">
                  <p className="testimonial-heading">Priyanka</p>
                  <p>Student, Glam Blush</p>
                </div>
              </div>
            </article>
          </div>

          <div className="col-md-3 col-sm-6 p-2">
            <article className="swiper-slide">
              <div className="animate-box video-testimonial-content fadeInUp animated" data-animate-effect="fadeInUp">
                <a aria-label="testimonial-popup" data-fancybox="" href="assets/images/home-images/testimonial-videos/rachel.mp4">
                  <Image
                    className="img-fluid"
                    src="assets/images/home-images/testimonial-videos/rachel.webp"
                    width={270}
                    height={463}
                    loading="lazy"
                    alt="Rachel testimonial"
                  />
                  <p><i className="ti-control-play"></i></p>
                </a>
                <div className="testimonials-content">
                  <p className="testimonial-heading">Rachel</p>
                  <p>Student, Glam Blush</p>
                </div>
              </div>
            </article>
          </div>

          <div className="col-md-3 col-sm-6 p-2">
            <article className="swiper-slide">
              <div className="animate-box video-testimonial-content fadeInUp animated" data-animate-effect="fadeInUp">
                <a aria-label="testimonial-popup" data-fancybox="" href="assets/images/home-images/testimonial-videos/sana.mp4">
                  <Image
                    className="img-fluid"
                    src="assets/images/home-images/testimonial-videos/sana.webp"
                    width={270}
                    height={463}
                    loading="lazy"
                    alt="Sana testimonial"
                  />
                  <p><i className="ti-control-play"></i></p>
                </a>
                <div className="testimonials-content">
                  <p className="testimonial-heading">Sana</p>
                  <p>Student, Glam Blush</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
