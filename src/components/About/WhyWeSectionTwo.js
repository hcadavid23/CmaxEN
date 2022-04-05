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

                                <h2 className="section-title mb-35">Nuestros valores y principios corporativos</h2>
                            </div>
                            <p><h5 className="section-subtitle mb-0"><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Efectividad:  </h5> Disponemos de recursos tangibles e intangibles de vanguardia que se complementan para el óptimo funcionamiento y rendimiento de la empresa.
                            </p>
                            <p><h5 className="section-subtitle mb-0"><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Excelencia:</h5>Satisfacemos las expectativas de los clientes, socios y colegas, superando los objetivos propuestos, a través del mejoramiento continuo de nuestros procesos productivos.
                            </p>
                            <p><h5 className="section-subtitle mb-0"><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Trabajo en equipo:</h5>Creemos que la unión, el esfuerzo y la cooperación de todo nuestro talento humano optimiza el rendimiento individual y grupal.
                            </p>
                            <p><h5 className="section-subtitle mb-0"><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Pertenencia:</h5>Generamos empatía en los trabajadores, al hacerlos partícipes de cada uno de los procesos de la empresa.
                            </p>
                            <p><h5 className="section-subtitle mb-0"><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Responsabilidad Social Corporativa:</h5> El enfoque de Responsabilidad Social Corporativa de Castillomax Oil and Gas posee tres grandes ejes de acción:
                            Atendemos criterios de transparencia en nuestras operaciones: Evaluamos minuciosamente la ejecución de nuestros proyectos, a nuestros aliados comerciales y el alcance de nuestro apoyo a la comunidad.
                            Protegemos el medio ambiente y hacemos uso responsable de los recursos naturales; por ello, promovemos iniciativas dirigidas a la creación y difusión de tecnologías respetuosas con nuestro entorno.
                            Por otra parte, impulsamos la integración plena de los individuos a la sociedad a lo interno y a lo externo de la organización, al sumarnos tanto a propuestas de asistencia a la población vulnerable como a las de investigación y educación.
                            </p>
                            <p><h5 className="section-subtitle mb-0"><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Calidad:</h5> Estamos comprometidos con la calidad de los productos y servicios prestados a nuestros clientes, es por esto que todas nuestras soluciones se basan en la aplicación de los Estándares
                            Internacionales (ASTM, ASME) y las mejores prácticas de ingeniería que rigen la materia (OCIMF).
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
