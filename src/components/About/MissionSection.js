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
                            <p className="mb-45">Empresa venezolana que presta servicios en el área petrolera y gasífera. Desarrolla proyectos de ingeniería costa afuera
                            que abarcan la adecuación y modernización de terminales marítimos petroleros, la automatización de procesos de carga y descarga de crudo
                            además otras actividades vinculadas al sector.
                             <br/>Nuestro equipo de trabajo está conformado por un grupo multidisciplinario de profesionales venezolanos, altamente capacitados y orientados
                            a la investigación en diversas áreas de la industria de los hidrocarburos.
                             <br/>Castillomax Oil and Gas, S.A. fundamenta sus actividades en las principales normas internacionales tales como: API, ASME, ASTM, NFPA, OCIMF,
                             ISA, PIP, GPSA, NACE, entre otras que avalan nuestras excelentes prácticas de ingeniería y construcción.</p>

                        </div>
                            <div className="section-title-wrapper mb-25">

                                <h2 className="section-title mb-25">Visión</h2>
                            </div>
                            <p className="mb-45">Ser una empresa líder en la innovación de productos y servicios enfocados al sector de los hidrocarburos, con raíces venezolanas y proyección internacional.
                            </p>

                        </div>
                        <div className="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30" data-aos="fade-left" data-aos-duration="1000">
                            <div className="section-title-wrapper mb-25">

                                <h2 className="section-title mb-25">Misión</h2>
                            </div>
                            <p className="mb-45">Transformar ideas en productos y servicios utilizando tecnología de punta, con un enfoque vanguardista que promueva el desarrollo de soluciones integrales para el mercado petrolero mundial.
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
