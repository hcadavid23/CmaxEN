import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import Link from 'next/link';

class BlogSlider extends Component {

    render() {

        return (
            <section className="blog-area pt-50 fix" style={{ backgroundImage:`url(${'assets/img/blog/blog-bg-1.jpg'})`}}>
                <div className="container pb-50">
                    <div className="blog-border">
                        <div className='row'>
                            <div className='col-xl-4'>
                                <div className="blog-text pt-0" data-aos="zoom-in">
                                    <div className="section-title-wrapper pr-25 mb-50">

                                        <h2 className="section-title mb-35">Our Brands</h2>

                                    </div>
                                    <div className="kblog-arrow">
                                        <div className="blog-button-prev slide-prev"><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-left']} /></i></div>
                                        <div className="blog-button-next slide-next"><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-8'>
                                <div className="blog-active swiper-container">
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
                                                576: {
                                                    slidesPerView: 1,
                                                },
                                                768: {
                                                    slidesPerView: 2,
                                                },
                                                1200: {
                                                    slidesPerView: 2,
                                                },
                                                1400: {
                                                    slidesPerView: 3
                                                }
                                            }}
                                            autoplay= {{
                                                delay: 3000,
                                                disableOnInteraction: true
                                            }}
                                            navigation={{
                                                clickable: true,
                                                nextEl: '.blog-button-next',
                                                prevEl: '.blog-button-prev',
                                        }}
                                            // pagination={{ clickable: true }}
                                            // scrollbar={{ draggable: true }}
                                            onSwiper={(swiper) => console.log(swiper)}
                                            onSlideChange={() => console.log('slide change')}
                                        >
                                        <SwiperSlide>
                                            <div className="kblog swiper-slide">
                                                <div className="kblog-img">
                                                    <Link href="/blog-details"><a><img src="assets/img/blog/blog-img-1.png" className="img-fluid" alt="blog-img"/></a></Link>
                                                  </div>
                                                  </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="kblog swiper-slide">
                                                <div className="kblog-img">
                                                    <Link href="/blog-details"><a><img src="assets/img/blog/blog-img-2.png" className="img-fluid" alt="blog-img"/></a></Link>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="kblog swiper-slide">
                                                <div className="kblog-img">
                                                    <Link href="/blog-details"><a><img src="assets/img/blog/blog-img-3.png" className="img-fluid" alt="blog-img"/></a></Link>
                                                </div>
                                            </div>
                                        </SwiperSlide>


                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogSlider;
