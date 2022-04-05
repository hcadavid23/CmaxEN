import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class About extends Component {

    render() {

        return (
            <section className="about-area pt-120 pb-70 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="kabout-img mb-50 mr-70" data-aos="zoom-out-up" data-swiper-autoplay="10000">
                                <div className="kabout-img-shape"></div>
                                <img src="assets/img/about/about-img-1x.jpg" className="img-fluid z-index" alt="about-img"/>
                                <div className="kabout-img-small">
                                    <img src="assets/img/about/about-img-2.jpg" className="img-fluid" alt="about-img"/>
                                    <div className="kabout-img-small-icon play_btn">
                                        <span>
                                            <img src="assets/img/icon/about-icon.png" className="img-fluid" alt="about-icon"/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="kabout mb-50" data-aos="zoom-out-down" data-swiper-autoplay="10000">
                                <div className="section-title-wrapper mb-45">
                                    <h2 className="section-title mb-35">Virtual Reality Simulations</h2>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="kabout-service mb-30">
                                            <h4 className="kabout-service-title">3D Rendering</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="kabout-service mb-30">
                                            <h4 className="kabout-service-title">Virtual Reality</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="kabout-service mb-30">
                                            <h4 className="kabout-service-title">High-quality simulations</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="kabout-service mb-30">
                                            <h4 className="kabout-service-title">Service innovation</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-title-wrapper mb-45">
                                    <h2 className="section-title mb-35">Single Point Moorings</h2>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="kabout-service mb-30">
                                            <h4 className="kabout-service-title">Product’s loading and unloading systems</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="kabout-service mb-30">
                                            <h4 className="kabout-service-title">Turret type monobuoys</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="kabout-service mb-30">
                                            <h4 className="kabout-service-title">Customized design, manufacturing and installation</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="kabout-service mb-30">
                                            <h4 className="kabout-service-title">High transfer reliability</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="kabout-btn">
                                    <Link href="/service"><a className="theme-btn border-btn">Learn more</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
