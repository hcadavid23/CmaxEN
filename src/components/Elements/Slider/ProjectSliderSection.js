import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import Link from 'next/link';

class ProjectSlider extends Component {

    render() {

        return (
            <div className="project-active swiper-container">
                <div className="swiper-wrapper">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplaydisableoninteraction={"false"}
                    loop={true}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1400: {
                            slidesPerView: 4,
                        }
                    }}
                    autoplay= {{
                        delay: 3000,
                        disableOnInteraction: true
                    }}
                    navigation={{
                        clickable: true,
                        nextEl: '.project-button-next',
                        prevEl: '.project-button-prev',
                   }}
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                >
                    <SwiperSlide>
                        <div className="kproject swiper-slide">
                            <img src="assets/img/project/project-img-1.jpg" className="img-fluid" alt="project_img"/>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slide">
                            <img src="assets/img/project/project-img-2.jpg" className="img-fluid" alt="project_img"/>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slide">
                            <img src="assets/img/project/project-img-3.jpg" className="img-fluid" alt="project_img"/>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slide">
                            <img src="assets/img/project/project-img-4.jpg" className="img-fluid" alt="project_img"/>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="kproject swiper-slide">
                            <img src="assets/img/project/project-img-4xx.jpg" className="img-fluid" alt="project_img"/>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="kproject swiper-slide">
                            <img src="assets/img/project/project-img-4xxx.jpg" className="img-fluid" alt="project_img"/>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slide">
                            <img src="assets/img/project/project-img-1.jpg" className="img-fluid" alt="project_img"/>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slide">
                            <img src="assets/img/project/project-img-2.jpg" className="img-fluid" alt="project_img"/>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slide">
                            <img src="assets/img/project/project-img-3.jpg" className="img-fluid" alt="project_img"/>
                            
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        );
    }
}

export default ProjectSlider;
