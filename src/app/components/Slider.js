import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image'; // Import Image from Next.js
import { basePath } from "@/lib/basePath";

const Slider = () => {
  return (
    <div className="services courses" id="courses">
      <section className="container-fluid">
        <Swiper
          loop={true}
          spaceBetween={0} 
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.swiper-pagination-courses',
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-courses',
            prevEl: '.swiper-button-prev-courses',
          }}
          speed={2000}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            968: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="item animate-box video-testimonial-content fadeInUp animated" data-animate-effect="fadeInUp">
              <div className="card-content">
                <Image
                  className="img-fluid"
                  src={`${basePath}/assets/images/home-images/courses/8-week.webp`}
                  width={391}
                  height={521}
                  alt="08 Weeks Professional Makeup And Hair Styling Course"
                />
              </div>
              <div className="con">
                <div className="course-heading">
                  <a href="8-week-professional.php">08 Weeks Professional Makeup And Hair Styling Course</a>
                </div>
                <p>08 Weeks</p>
                <a className="read-more" href="8-week-professional.php">Read More</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item animate-box video-testimonial-content fadeInUp animated" data-animate-effect="fadeInUp">
              <div className="card-content">
                <Image
                  className="img-fluid"
                  src={`${basePath}/assets/images/home-images/courses/bridal-makeup.webp`}
                  width={391}
                  height={521}
                  alt="06 Weeks Bridal Makeup And Hair Styling Course"
                />
              </div>
              <div className="con">
                <div className="course-heading">
                  <a href="6-weeks-bridal-makeup-and-hair-styling-course.php">06 Weeks Bridal Makeup And Hair Styling Course</a>
                </div>
                <p>06 Weeks</p>
                <a className="read-more" href="6-weeks-bridal-makeup-and-hair-styling-course.php">Read More</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item animate-box video-testimonial-content fadeInUp animated" data-animate-effect="fadeInUp">
              <div className="card-content">
                <Image
                  className="img-fluid"
                  src={`${basePath}/assets/images/home-images/courses/4-week.webp`}
                  width={391}
                  height={521}
                  alt="04 Weeks Professional Hair Styling Course"
                />
              </div>
              <div className="con">
                <div className="course-heading">
                  <a href="4-weeks-professional-hair-styling-course.php">04 Weeks Professional Hair Styling Course</a>
                </div>
                <p>04 Weeks</p>
                <a className="read-more" href="4-weeks-professional-hair-styling-course.php">Read More</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item animate-box video-testimonial-content fadeInUp animated" data-animate-effect="fadeInUp">
              <div className="card-content">
                <Image
                  className="img-fluid"
                  src={`${basePath}/assets/images/home-images/courses/weekend-professional.webp`}
                  width={391}
                  height={521}
                  alt="Weekend Professional Makeup And Hair Styling Course"
                />
              </div>
              <div className="con">
                <div className="course-heading">
                  <a href="weekend-professional-makeup-and-hair-styling-course.php">Weekend Professional Makeup And Hair Styling Course</a>
                </div>
                <p>Weekend</p>
                <a className="read-more" href="weekend-professional-makeup-and-hair-styling-course.php">Read More</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item animate-box video-testimonial-content fadeInUp animated" data-animate-effect="fadeInUp">
              <div className="card-content">
                <Image
                  className="img-fluid"
                  src={`${basePath}/assets/images/home-images/courses/personal-grooming.webp`}
                  width={391}
                  height={521}
                  alt="Personal Grooming Course"
                />
              </div>
              <div className="con">
                <div className="course-heading">
                  <a href="personal-makeup.php">Personal Grooming Course</a>
                </div>
                <p>Personal Grooming</p>
                <a className="read-more" href="personal-makeup.php">Read More</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* Pagination */}
        <div className="swiper-dots">
          <div className="swiper-pagination-courses"></div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
