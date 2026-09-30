"use client";
import React from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { basePath } from "@/lib/basePath";

const Services = () => {
  return (
    <div>
      <div className="section-padding about-services">
        <section className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="title2">Our Services</h2>
              </div>
              <p>
                Beyond our renowned makeup artist courses in Mumbai, Glam Blush
                offers specialized beauty services. From bridal to editorial
                makeup, our studio demonstrates the expertise and elegance that
                you would expect from the top makeup academy in Mumbai.
              </p>
            </div>
          </div>
          <Swiper
            loop={true}
            spaceBetween={10}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".custom-swiper-pagination",
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
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
              <div className="slider-content">
                <div className="card__image">
                  <Image
                    src={`${basePath}/assets/images/about/services/bridal.webp`}
                    alt="Bridal"
                    width={270}
                    height={350}
                    className="card__img"
                  />
                </div>
                <div className="card__data">
                  <h5 className="card__name">Bridal</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-content">
                <div className="card__image">
                  <Image
                    src={`${basePath}/assets/images/about/services/engagement.webp`}
                    alt="Engagement"
                    width={270}
                    height={350}
                    className="card__img"
                  />
                </div>
                <div className="card__data">
                  <h5 className="card__name">Engagement</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-content">
                <div className="card__image">
                  <Image
                    src={`${basePath}/assets/images/about/services/party.webp`}
                    alt="Party"
                    width={270}
                    height={350}
                    className="card__img"
                  />
                </div>
                <div className="card__data">
                  <h5 className="card__name">Party</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-content">
                <div className="card__image">
                  <Image
                    src={`${basePath}/assets/images/about/services/pre-wedding.webp`}
                    alt="Pre-Wedding"
                    width={270}
                    height={350}
                    className="card__img"
                  />
                </div>
                <div className="card__data">
                  <h5 className="card__name">Pre-Wedding</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-content">
                <div className="card__image">
                  <Image
                    src={`${basePath}/assets/images/about/services/sangeet.webp`}
                    alt="Sangeet"
                    width={270}
                    height={350}
                    className="card__img"
                  />
                </div>
                <div className="card__data">
                  <h5 className="card__name">Sangeet</h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Custom Pagination */}
          <div className="custom-swiper-pagination"></div>
        </section>
      </div>
    </div>
  );
};

export default Services;
