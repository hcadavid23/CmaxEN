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
                                                <h2 className="kservice-text-title mb-40" data-animation="fadeInUp" data-delay="0.3s">S.T.C.C. ™ <br/>(Sistema Termoquímico Combinado y Controlado ™)</h2>
                                                <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Estimulación matricial de pozos y yacimientos</h2>
                                                <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Remoción de daños en el yacimiento</h2>
                                                <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Mejora de la movilidad de los fluidos del pozo</h2>
                                                <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Reducción de tiempo y costos de operación</h2>
                                                <div className="kslider--btn" data-animation="fadeInUp" data-delay="0.7s">
                                                    <Link href="/service-details"><a className="theme-btn">Conoce más</a></Link>
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
                                                <h2 className="kservice-text-title mb-40" data-animation="fadeInUp" data-delay="0.3s">Petróleo y Gas</h2>
                                                <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">IPC de terminales marítimos</h2>
                                                <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Desarrollo de tecnologías</h2>
                                                <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Planificación e inspección de terminales</h2>
                                                <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Tendido de líneas terrestres y submarinas</h2>

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
                                            <h2 className="kservice-text-title mb-40" data-animation="fadeInUp" data-delay="0.3s">Brazos de Carga Marinos</h2>
                                            <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Diseño, fabricación e instalación</h2>
                                            <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Supervisión e inspecciones periódicas</h2>
                                            <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Mantenimiento y reparaciones</h2>
                                            <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Adiestramiento a personal de mantenimiento y operaciones</h2>

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
                                            <h2 className="kservice-text-title mb-40" data-animation="fadeInUp" data-delay="0.3s">Sistema de Amarre Multiboyas</h2>
                                            <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Diseño, fabricación y supervisión de instalación</h2>
                                            <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Análisis de amarre detallado</h2>
                                            <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Simulación numérica de modelos</h2>
                                            <h2 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.5s">Certificación internacional</h2>
                                                
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
