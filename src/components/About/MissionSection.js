import React, { Component } from 'react';
import Link from 'next/link';

class Mission extends Component {

    render() {

        return (
        <section className="mission-area pt-0 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30" data-aos="fade-left" data-aos-duration="1000">
                        <div className="section-title-wrapper mb-25">

                            <h2 className="section-title mb-25">Castillomax Oil and Gas</h2>
                            <p className="mb-45">Castillomax Oil and Gas, is a Venezuelan company specializing in the oil and gas sector.  We develop off-shore
                            engineering projects, that span from adaptation and modernization of oil maritime terminals, to the automation of crude oil loading
                            and unloading processes, besides other activities in this sector.

                             <br/>Our work team includes a multidisciplinary group of Venezuelan professionals, highly trained and research-oriented in different areas of the hydrocarbons industry.
                             <br/>Castillomax Oil and Gas, S.A. activities are based on the main international standards, such as API, ASME, ASTM, NFPA, OCIMF, ISA, PIP, GPSA, NACE, among others
                             that guarantee our excellent engineering and construction practices.</p>

                        </div>
                            <div className="section-title-wrapper mb-25">

                                <h2 className="section-title mb-25">Vision</h2>
                            </div>
                            <p className="mb-45">To be a leading Company in the innovation of products and services for the hydrocarbons sector with Venezuelan roots and international projection.
                            </p>

                        </div>
                        <div className="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30" data-aos="fade-left" data-aos-duration="1000">
                            <div className="section-title-wrapper mb-25">

                                <h2 className="section-title mb-25">Mission</h2>
                            </div>
                            <p className="mb-45">To transform ideas into products and services using state-of-the-art technology with a vanguard vision that promotes the development of comprehensive solutions for the oil world market.
                            </p>

                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="kintro-img mb-30" data-aos="fade-right" data-aos-duration="1000">
                            <img src="assets/img/about/about-img-6.jpg" className="img-fluid" alt="about-img"/>

                        </div>
                        <div className="kintro-img mb-30" data-aos="fade-right" data-aos-duration="1000">
                            <img src="assets/img/about/multimedia-5106e0452c87a0708cd5235e0e8e45a4.jpg" className="img-fluid" alt="about-img"/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Mission;
