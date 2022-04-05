import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import Link from 'next/link';

class HomeSlider extends Component {

    render() {

        return (
            <section className="slider-area fix position-relative">
                <div className="slider-active swiper-container">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                            effect="fade"
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            breakpoints={{
                                768: {
                                    slidesPerView: 1
                                },
                                1200: {
                                    slidesPerView: 1,
                                }
                            }}
                            pagination={{
                                clickable: true,
                                el: '.slider-paginations',
                           }}
                           autoplay= {{
                               delay: 3000,
                               disableOnInteraction: true
                           }}
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            // navigation={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide>
                            <div className="single-slider slider-height swiper-slide" data-swiper-autoplay="10000">
                                <div className="slide-bg" style={{ backgroundImage:`url(${'assets/img/slider/slider-1.jpg'})`}}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="kslider z-index">
                                                <h2 className="kservice-text-title mb-40" data-animation="fadeInUp" data-delay="0.3s">S.T.C.C. ™ <br/>(Thermochemical Combined and Controlled System ™)</h2>
                                                <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Wells and reservoirs matrix stimulation</h2>
                                                <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Reservoir damage removal</h2>
                                                <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Fluids mobility improvement in wells</h2>
                                                <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Reduction in operation time and costs</h2>
                                                <div className="kslider--btn" data-animation="fadeInUp" data-delay="0.7s">
                                                    <Link href="/service-details"><a className="theme-btn">more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-shape shape-1"><img src="assets/img/slider/slider-shape-1.png" className="img-fluid" alt="shape-img"/></div>
                                <div className="slide-shape shape-2"><img src="assets/img/slider/slider-shape-2.png" className="img-fluid" alt="shape-img"/></div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-slider slider-height swiper-slide" data-swiper-autoplay="10000">
                                <div className="slide-bg" style={{ backgroundImage:`url(${'assets/img/slider/slider-2.jpg'})`}}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="kslider z-index">
                                                <h2 className="kservice-text-title mb-40" data-animation="fadeInUp" data-delay="0.3s">Oil and Gas</h2>
                                                <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">EPC of maritime terminals</h2>
                                                <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Technology development</h2>
                                                <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Oil Terminals planning and inspection</h2>
                                                <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Onshore and subsea pipe laying</h2>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-shape shape-1"><img src="assets/img/slider/slider-shape-1.png" className="img-fluid" alt="shape-img"/></div>
                                <div className="slide-shape shape-2"><img src="assets/img/slider/slider-shape-2.png" className="img-fluid" alt="shape-img"/></div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-slider slider-height swiper-slide" data-swiper-autoplay="10000">
                                <div className="slide-bg" style={{ backgroundImage:`url(${'assets/img/slider/slider-3.jpg'})`}}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="kslider z-index">
                                            <h2 className="kservice-text-title mb-40" data-animation="fadeInUp" data-delay="0.3s">Marine Loading Arms</h2>
                                            <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Design, manufacturing and installation</h2>
                                            <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Periodic supervision and inspection</h2>
                                            <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Maintenance and repair</h2>
                                            <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Training for maintenance and operations personnel</h2>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-shape shape-1"><img src="assets/img/slider/slider-shape-1.png" className="img-fluid" alt="shape-img"/></div>
                                <div className="slide-shape shape-2"><img src="assets/img/slider/slider-shape-2.png" className="img-fluid" alt="shape-img"/></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-slider slider-height swiper-slide" data-swiper-autoplay="10000">
                                <div className="slide-bg" style={{ backgroundImage:`url(${'assets/img/slider/slider-4.jpg'})`}}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="kslider z-index">
                                            <h2 className="kservice-text-title mb-40" data-animation="fadeInUp" data-delay="0.3s">Conventional Multi-buoys mooring system</h2>
                                            <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Design, manufacturing and supervision during installation</h2>
                                            <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Detailed mooring analysis</h2>
                                            <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Numerical modelling simulation</h2>
                                            <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">International certification</h2>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-shape shape-1"><img src="assets/img/slider/slider-shape-1.png" className="img-fluid" alt="shape-img"/></div>
                                <div className="slide-shape shape-2"><img src="assets/img/slider/slider-shape-2.png" className="img-fluid" alt="shape-img"/></div>
                            </div>
                        </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="slider-paginations slide-dots"></div>
                </div>
            </section>
        );
    }
}

export default HomeSlider;
