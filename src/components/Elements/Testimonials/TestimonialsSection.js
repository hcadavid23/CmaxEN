import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle'

class Testimonial extends Component {

    render() {

        return (
            <section className="testimonial-area pt-115 pb-85">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-wrapper text-center mb-45">
                                <h5 className="section-subtitle mb-20">Others</h5>
                                <h2 className="section-title mb-35">Awards & Events</h2>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-active swiper-container">
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
                                            slidesPerView: 3
                                        }
                                    }}
                                    autoplay= {{
                                        delay: 5000,
                                        disableOnInteraction: true
                                    }}
                                // pagination={{ clickable: true }}
                                // scrollbar={{ draggable: true }}
                                // navigation={{ clickable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slide">
                                    <div className="ktestimonial-text">
                                        <p>“World <br/>Quality Commitment” award granted by Business Initiative Directions to acknowledge Entrepreneurial Leadership, Quality Excellency, Paris, 2015.</p>
                                    </div>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slide">
                                    <div className="ktestimonial-text">
                                        <p>“Future Leader” award granted to our CEO, Mr. Miguel Ángel Castillo Lara in 2015  by the prestigious publication Petroleum Magazine in an event held in the city of London, United Kingdom.</p>
                                    </div>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slide">
                                    <div className="ktestimonial-text">
                                        <p>Granted by our<br/> support to the Latin <br/>American Society <br/> of Oil Maritime <br/>Terminals and Monobuoys  <br/> Operators <br/>in Peru,<br/> 2015.</p>
                                    </div>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slide">
                                    <div className="ktestimonial-text">
                                        <p>Recognized as Diamond Sponsor in the IX Symposium<br/> of the Latin American Society of Oil Maritime Terminals<br/> and Monobuoys Operators in Peru, 2015.</p>
                                    </div>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slide">
                                    <div className="ktestimonial-text">
                                        <p>Castillomax Oil and Gas is a Member of the Latin American Society of Oil Maritime Terminals and Monobuoys Operators – SLOM.<br/>  Bogota, Colombia <br/>2016.</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonial;
