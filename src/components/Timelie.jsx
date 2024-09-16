import Arrow from "../assets/svg/arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import { useRef } from "react";

const Timelie = () => {
  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleOnSwipeChange = (swiper) => {
    const prevButton = document.querySelector(".timeline-swiper__button-prev");
    const nextButton = document.querySelector(".timeline-swiper__button-next");

    if (swiper.isBeginning) {
      prevButton.classList.add("opacity-50");
      prevButton.disabled = true;
    } else {
      prevButton.classList.remove("opacity-50");
      prevButton.disabled = false;
    }

    if (swiper.isEnd) {
      nextButton.classList.add("opacity-50");
      nextButton.disabled = true;
    } else {
      nextButton.classList.remove("opacity-50");
      nextButton.disabled = false;
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-end pb-2 pb-lg-3 border-bottom border-1 border-light">
        <h2 className="border-start border-5 border-primary ps-2 h1 fw-normal m-0">
          Financial sector development timeline
        </h2>
        <a
          href=""
          className="btn btn-link text-decoration-none p-0 d-inline-flex flex-nowrap align-items-center flex-shrink-0"
        >
          <span className="text-nowrap">View all</span>
          <Arrow width="15px" height="15px" className="ms-2" />
        </a>
      </div>
      <div className="pt-3">
        <div className="d-none d-lg-flex justify-content-end mb-5">
          <button
            onClick={goToPrevSlide}
            className="timeline-swiper__button-prev btn btn-outline-secondary btn-sm py-1 px-3 d-inline-flex align-items-center bg-transparent text-body opacity-50"
          >
            <Arrow width="12px" height="12px" />
          </button>
          <button
            onClick={goToNextSlide}
            className="timeline-swiper__button-next btn btn-outline-secondary btn-sm py-1 px-3 d-inline-flex align-items-center bg-transparent ms-2 text-body"
          >
            <Arrow width="12px" height="12px" />
          </button>
        </div>
        <Swiper
          ref={swiperRef}
          className="timeline-swiper"
          modules={[FreeMode, Navigation]}
          slidesPerView="auto"
          freeMode={true}
          breakpoints={{
            992: {
              allowTouchMove: false,
              centeredSlides: false,
              freeMode: false,
            },
          }}
          onSlideChange={(swiper) => handleOnSwipeChange(swiper)}
        >
          <SwiperSlide className="px-2 px-lg-3">
            <a
              href="#"
              className="timeline-swiper__card card p-lg-3 shadow text-decoration-none"
            >
              <img className="mb-2" src="/src/assets/img/002.jpg" />
              <h3 className="fw-medium mb-2 fs-6">
                Fusce a magna pellentesque
              </h3>
              <p className="mb-3 mb-lg-4">
                Morbi feugiat nisi in felis maximus, vel sollicitudin dui
                commodo. Integer blandit non odio a congue. Maecenas in aliquet
                nisl. Integer maximus et.
              </p>
              <span className="btn btn-link text-decoration-none p-0 d-inline-flex flex-nowrap align-items-center flex-shrink-0">
                <span className="text-nowrap fw-bold">View all</span>
                <Arrow width="15px" height="15px" className="ms-2" />
              </span>
            </a>
            <div className="timeline-swiper__date d-flex justify-content-center">
              <div className="d-inline-flex flex-column align-items-center timeline-swiper__date-wrapper">
                <span className="timeline-swiper__date-month fw-medium lh-1">
                  July
                </span>
                <span className="timeline-swiper__date-year fs-5 fw-medium lh-1">
                  2025
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-2 px-lg-3">
            <a
              href="#"
              className="timeline-swiper__card card p-lg-3 shadow text-decoration-none"
            >
              <img className="mb-2" src="/src/assets/img/001.jpg" />
              <h3 className="fw-medium mb-2 fs-6">
                Nunc bibendum felis in varius laoreet
              </h3>
              <p className="mb-3 mb-lg-4">
                Morbi feugiat nisi in felis maximus, vel sollicitudin dui
                commodo. Integer blandit non odio a congue. Maecenas in aliquet
                nisl. Integer maximus et.
              </p>
              <span className="btn btn-link text-decoration-none p-0 d-inline-flex flex-nowrap align-items-center flex-shrink-0">
                <span className="text-nowrap fw-bold">View all</span>
                <Arrow width="15px" height="15px" className="ms-2" />
              </span>
            </a>
            <div className="timeline-swiper__date d-flex justify-content-center">
              <div className="d-inline-flex flex-column align-items-center timeline-swiper__date-wrapper">
                <span className="fs-5 fw-medium lh-1">May</span>
                <span className="fs-4 fw-medium lh-1">2024</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-2 px-lg-3">
            <a
              href="#"
              className="timeline-swiper__card card p-lg-3 shadow text-decoration-none"
            >
              <img className="mb-2" src="/src/assets/img/003.jpg" />
              <h3 className="fw-medium mb-2 fs-6">
                Quisque sed ultricies justo
              </h3>
              <p className="mb-3 mb-lg-4">
                Feugiat nisi in felis maximus, vel sollicitudin dui commodo.
                Integer blandit non odio a congue. Maecenas in aliquet nisl.
                Integer maximus et...
              </p>
              <span className="btn btn-link text-decoration-none p-0 d-inline-flex flex-nowrap align-items-center flex-shrink-0">
                <span className="text-nowrap fw-bold">View all</span>
                <Arrow width="15px" height="15px" className="ms-2" />
              </span>
            </a>
            <div className="timeline-swiper__date d-flex justify-content-center">
              <div className="d-inline-flex flex-column align-items-center timeline-swiper__date-wrapper">
                <span className="fs-5 fw-medium lh-1">March</span>
                <span className="fs-4 fw-medium lh-1">2023</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-2 px-lg-3">
            <a
              href="#"
              className="timeline-swiper__card card p-lg-3 shadow text-decoration-none"
            >
              <img className="mb-2" src="/src/assets/img/006.jpg" />
              <h3 className="fw-medium mb-2 fs-6">
                Nullam elementum vestibulum
              </h3>
              <p className="mb-3 mb-lg-4">
                Morbi feugiat nisi in felis maximus, vel sollicitudin dui
                commodo. Integer blandit non odio a congue. Maecenas in aliquet
                nisl. Integer maximus et.
              </p>
              <span className="btn btn-link text-decoration-none p-0 d-inline-flex flex-nowrap align-items-center flex-shrink-0">
                <span className="text-nowrap fw-bold">View all</span>
                <Arrow width="15px" height="15px" className="ms-2" />
              </span>
            </a>
            <div className="timeline-swiper__date d-flex justify-content-center">
              <div className="d-inline-flex flex-column align-items-center timeline-swiper__date-wrapper">
                <span className="fs-5 fw-medium lh-1">April</span>
                <span className="fs-4 fw-medium lh-1">2017</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Timelie;
