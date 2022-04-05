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
                                <h5 className="section-subtitle mb-20">Otros</h5>
                                <h2 className="section-title mb-35">Premios y Eventos</h2>
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
                                        <p>Reconocidos por la organización Business Initiative Directions con el premio “World Quality Commitment” el cual reconoce el Liderazgo, la Calidad y la Excelencia empresarial. París, 2015.</p>
                                    </div>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slide">
                                    <div className="ktestimonial-text">
                                        <p>En 2015, nuestro director ejecutivo en jefe, Sr. Miguel Ángel Castillo Lara, fue galardonado por la prestigiosa revista Petroleum Economist como “Líder del Futuro”. Londres, 2015.</p>
                                    </div>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slide">
                                    <div className="ktestimonial-text">
                                        <p>Reconocidos por nuestro respaldo a la Sociedad Latinoamericana de <br/>  Operadores de Terminales Marítimos Petroleros y Monoboyas. <br/> Lima, Perú<br/> 2015.</p>
                                    </div>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slide">
                                    <div className="ktestimonial-text">
                                        <p>Distinguidos como Patrocinadores Diamantes de la IX Jornada Sociedad Latinoamericana de Operadores de Terminales Marítimos Petroleros y Monoboyas realizada en Lima, Perú 2015.</p>
                                    </div>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slide">
                                    <div className="ktestimonial-text">
                                        <p>Castillomax Oil and Gas Miembro de la Sociedad Latinoamericana de Operadores de Terminales Marítimos Petroleros y Monoboyas - SLOM.<br/>  Bogotá , Colombia <br/>2016.</p>
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
