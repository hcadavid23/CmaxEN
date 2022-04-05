import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Service extends Component {

    render() {

        return (
            <section className="service-area pt-120 pb-130" style={{ backgroundImage:`url(${'assets/img/service/service-bg.jpg'})`}}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xxl-5 col-lg-6">
                            <div className="kservice-text mb-50" data-aos="fade-right" data-aos-duration="1000">
                                <h2 className="kservice-text-title mb-40">Visita Nuestro Showroom En el Metaverso</h2>
                                <div className="kservice-author">
                                    <div className="kservice-author-img mr-30">
                                        <img src="assets/img/service/service-author.png" className="img-fluid" alt="author-img"/>
                                    </div>
                                    <div className="kservice-author-sign">
                                        <span>Love it, believe it and do it</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                <div className="kslider--btn" data-animation="fadeInUp" data-delay="0.7s">
                    <Link href="https://hub.link/hZVi9RC"><a className="theme-btn">Ingresa Aquí </a></Link>
                </div>
                </div>
            </div>
        </div>
            </section>

        );
    }
}

export default Service;
