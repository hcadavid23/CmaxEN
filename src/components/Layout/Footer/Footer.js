import React from 'react';
import FooterBottom from './FooterBottom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Footer = () => {

    return (
      <footer style={{ backgroundImage:`url(${'assets/img/bg/footer-bg.png'})`}} className="pt-95 position-relative">
         <div className="common-shape-wrapper wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div className="common-shape-inner wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
         </div>
         <div className="footer-area pb-60">
            <div className="container">
               <div className="row">
                     <div className="col-lg-4 col-sm-6">
                        <div className="widget mb-30">
                           <div className="footer-logo mb-25">
                                 <Link href="/"><a><img src="assets/img/logo/logo-white.png" className="img-fluid" alt="footer-logo"/></a></Link>
                           </div>
                           <p className="mb-20 pr-35">Castillomax Oil and Gas, is a Venezuelan company specialized in the oil and gas sector.</p>
                           <div className="footer-social">
                              <a href="https://mobile.twitter.com/castillomax1" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                              <a href="https://www.facebook.com/castillomax1/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                              <a href="https://www.linkedin.com/company/castillomax-oil-and-gas/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'linkedin']} /></i></a>
                              <a href="https://www.instagram.com/castillomaxoilandgas/?hl=es" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-2 col-sm-6">
                        <div className="widget mb-30">
                           <h4 className="widget-title mb-35">Links</h4>
                           <ul>
                                 <li><Link href="/service"><a> Products & Services</a></Link></li>
                                 <li><Link href="/about"><a>About us</a></Link></li>
                                 <li><Link href="/contact"><a>Contact</a></Link></li>
                                 <li><Link href="/contact"><a>Help</a></Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="widget widget-contact mb-30">
                           <h4 className="widget-title mb-35">Contact</h4>
                           <ul>
                                 <li className="pb-10">Av. Casanova Torre Sur del Conjunto Inmobiliario CC El Recreo, Caracas, República Bolivariana de Venezuela.</li>
                                 <li><img src="assets/img/icon/footer-icon-1.png" className="img-fluid" alt="icon-img"/><a href="mailto:info@castillomax.com">info@castillomax.com</a></li>
                                 <li><img src="assets/img/icon/footer-icon-2.png" className="img-fluid" alt="icon-img"/><a href="tel:+582127627214">+58 212 762 7214</a></li>
                           </ul>
                        </div>
                     </div>

               </div>
            </div>
         </div>
         <FooterBottom />
      </footer>
    );
}

export default Footer;
