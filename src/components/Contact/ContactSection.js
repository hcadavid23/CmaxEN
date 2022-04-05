import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {

    render() {

        return (
            <section className="contact-area pt-120 pb-80 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                        <div className="section-title-wrapper mb-15">
                            <h5 className="section-subtitle mb-20">Para más información</h5>
                            <h2 className="section-title">Contáctanos</h2>
                        </div>
                        <div className="contact-info mr-50 mr-xs-0  mr-md-0">
                            <div className="single-contact-info d-flex align-items-center">
                                <div className="contact-info-icon">
                                    <a href="#"><i><FontAwesomeIcon icon={['fas', 'comments']} /></i></a>
                                </div>
                                <div className="contact-info-text mt-10">
                                    <span>Llame al</span>
                                    <h5><a href="tell:+582127627214">+58 212 762 7214</a></h5>
                                </div>
                            </div>
                            <div className="single-contact-info d-flex align-items-center">
                                <div className="contact-info-icon">
                                    <a href="#"><i><FontAwesomeIcon icon={['fas', 'envelope']} /></i></a>
                                </div>
                                <div className="contact-info-text mt-10">
                                    <span>Envíe un Correo</span>
                                    <h5><a href="mailto:info@castillomax.com">info@castillomax.com</a> </h5>
                                </div>
                            </div>
                            <div className="single-contact-info d-flex align-items-center">
                                <div className="contact-info-icon">
                                    <a href="#"><i><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /></i></a>
                                </div>
                                <div className="contact-info-text mt-10">
                                    <span>Visite Nuestra Oficina</span>
                                    <h5><a href="#">Av. Casanova Torre Sur del Conjunto Inmobiliario CC El Recreo Piso 8-5. Caracas, República Bolivariana de Venezuela.</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                        <div className="contact-form">
                            <form action="https://formsubmit.co/61858b2ac59e2516250e585f6f6da624" id="contact-form" method="POST">
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="name" type="text" placeholder="Nombre"/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="email" type="email" placeholder="Dirección de Correo"/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="phone" type="text" placeholder="Teléfono"/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="subject" type="text" placeholder="Asunto"/>
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                                        <textarea placeholder="Escribe un mensaje" name="massage"></textarea>
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 mb-20">
                                        <button type="submit" className="theme-btn border-btn">Enviar mensaje</button>
                                    </div>
                                    
                                </div>
                            </form>
                            <p className="ajax-response"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Contact;
