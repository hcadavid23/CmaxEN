import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ServiceDetails extends Component {

    render() {

        return (
            <section className="service-detals pt-0 pb-100 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="develop-wrapper">
                                <div className="develop-thumb">
                                    <img src="assets/img/service/service-img-5.jpg" alt=""/>
                                </div>
                                <div className="develop-content">
                                    <h3 className="service-title">Estimulaciones matriciales reactivas y no reactivas.</h3>
                                    <h4>Sistema Termoquímico Combinado y Controlado STCC ™. </h4>
                                    <p> Es un sistema de estimulación matricial termoquímico capaz de alcanzar altas temperaturas y presiones de acorde a su diseño. </p>
                                </div>
                            </div>

                            <div className="planning-wrapper pt-50">
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                                        <div className="plan-thumb mb-md-40 mb-xs-40">
                                            <img src="assets/img/service/service-img-6.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                                        <div className="plan-content">
                                            <h4>Efectos generados por el STCC™</h4>

                                            <ul>
                                                <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Produce un aumento en la temperatura, permitiendo así la remoción de depósitos orgánicos como Asfáltenos y Parafinas.</li>
                                                <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>La salmuera obtenida no es dañina para la formación, inhibiendo así el hinchamiento de las arcillas de formación.</li>
                                                <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Libera nitrógeno, el cual disminuye el peso en la columna hidrostática e incrementa la movilidad del crudo en la tubería de producción.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-xxl-12">
                                        <div className="plan-content pr-10 pt-50 pt-xs-30 pt-md-30 pb-15">

                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="sidebar-wrap">
                                <div className="widget_categories grey-bg">
                                    <h4 className="bs-widget-title pl-20">Beneficios</h4>
                                    <ul>
                                        <li><Link href="/service-details"><a>Fácil Aplicación <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link></li>
                                        <li><Link href="/service-details"><a>Reacción controlada e instantánea<i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link></li>
                                        <li><Link href="/service-details"><a>Recuperación de la tasa diferida de producción<i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link></li>
                                        <li><Link href="/service-details"><a>Facilita el trabajo en serie de pozos<i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link></li>
                                        <li><Link href="/service-details"><a>Reducción de tiempo y costos de operación <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="develop-wrapper">
                                <div className="develop-thumb">
                                <div className="develop-content">

                                    <h4>Sistema de Fracturamiento Termoquímico SFT ™. </h4>
                                    <p> Es un sistema de fracturamiento por etapas aplicado a yacimientos no convencionales, que actúa debido a la expansión del Nitrógeno (N₂)
                                    generado durante la reacción exotérmica de la tecnología.</p>
                                </div>
                                    <img src="assets/img/service/Sftbanner (1).png" alt=""/>
                                </div>

                            </div>

                            <div className="planning-wrapper pt-50">
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                                        <div className="plan-thumb mb-md-40 mb-xs-40">
                                            <img src="assets/img/service/Imagen1sgft.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                                        <div className="plan-content">
                                            <h4>Efectos generados por el SFT™</h4>

                                            <ul>
                                                <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Generación de Nitrógeno que permite alcanzar las presiones requeridas in situ.
                                                 Presión generada entre 10,000 – 30,000 psi ( resultados de modelos numéricos).</li>
                                                <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Incremento de la permeabilidad producto de las fracturas.</li>
                                                <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Incremento de la temperatura. La reacción alcanza los 220 ºF.</li>
                                                  <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Permite el control de la presión generada en fondo.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-xxl-12">
                                        <div className="plan-content pr-10 pt-50 pt-xs-30 pt-md-30 pb-15">

                                        </div>
                                    </div>

                                </div>
                            </div>
                                    <div className="col-xxl-12">
                                        <div className="plan-content pr-10 pt-50 pt-xs-30 pt-md-30 pb-15">

                                        </div>
                                    </div>

                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="sidebar-wrap">
                                <div className="widget_categories grey-bg">
                                    <h4 className="bs-widget-title pl-20">Beneficios</h4>
                                    <ul>
                                        <li><Link href="/service-details"><a>Generación de altos niveles de presión.<i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link></li>
                                        <li><Link href="/service-details"><a>Reducción del consumo de agua potable en comparación al Fracturamiento Hidráulico.<i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link></li>
                                        <li><Link href="/service-details"><a>Adaptabilidad a los equipos en superficie.<i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link></li>
                                        <li><Link href="/service-details"><a>Efectividad en la generación de fracturas.<i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link></li>


                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetails;
