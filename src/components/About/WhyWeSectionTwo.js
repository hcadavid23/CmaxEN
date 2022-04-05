import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WhyWeTwo extends Component {

    render() {

        return (
        <section className="why-we bg-grey pt-125 pb-75 position-relative fix">
            <div className="common-shape-wrapper wow slideInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="common-shape-inner"></div>
            </div>
            <div className="container z-index">
                <div className="row justify-content-between">

                        <div className="choose-left mb-40 mr-xs-0 mr-md-0 mr-lg-0 mr-90" data-aos="fade-up-right" data-aos-duration="1000">
                            <div className="section-title-wrapper">

                                <h2 className="section-title mb-35">Our Corporate Values and Principles </h2>
                            </div>
                            <p><h5 className="section-subtitle mb-0"><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Effectiveness:  </h5> We have state-of-the-art tangible and intangible resources that complement each other for the optimal operation and performance of our company.
                            </p>
                            <p><h5 className="section-subtitle mb-0"><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Excellency:</h5> We fulfill the expectations of our clients, partners, and colleagues, exceeding the objectives through continuous improvement of our production processes.
                            </p>
                            <p><h5 className="section-subtitle mb-0"><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Team Work:</h5> We believe in union, effort and cooperation of our human resource to optimize individual and group performance.
                            </p>
                            <p><h5 className="section-subtitle mb-0"><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Sense of Belonging:</h5> We generate empathy in our human talent since they participate in each and every one of our company’s processes.
                            </p>
                            <p><h5 className="section-subtitle mb-0"><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Corporate Social Responsibility:</h5> Castillomax Oil and Gas approach to Corporate Social Responsibility is focused on three main areas:
                            We ensure transparency in our operations by closely evaluating projects’ execution for our commercial allies, as well as the scope of support to the community.
                            We protect the environment using natural resources in a responsible way; we support activities aimed at creating and promoting technologies that respect the environment.
                            We also encourage the full integration of community stakeholders, both in and out of our organization, since we contribute to any assistance plan to vulnerable populations and we implement research and education activities.
                            </p>
                            <p><h5 className="section-subtitle mb-0"><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Quality:</h5> We are committed to the quality of our products and the services we offer our clients; thus, our solutions are based
                             on International Standards (ASTM, ASME) and the best engineering practices in this matter (OCIMF).
                            </p>

                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                            <div className="accordion" id="accordionExample">
                            </div>
                        </div>
                    </div>


            </div>


        </section>

        );
    }
}

export default WhyWeTwo;
