import React from 'react';
import Link from 'next/link';

const FooterBottom = () => {
    return (
        <div className="copyright-area">
            <div className="container">
               <div className="copyright-bg">
                     <div className="row align-items-center">
                        <div className="col-md-6">
                           <div className="copyright">
                                 <span>Copyright ©2022 Castillomax Oil and Gas. Todos los derechos reservados</span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="privacy-text text-center text-md-end">
                                 <ul>
                                    <li>
                                       <Link href="/contact"><a>Términos  & Condiciones</a></Link>
                                       <Link href="/contact"><a>Politica de Privacidad</a></Link>
                                    </li>
                                 </ul>
                           </div>
                        </div>
                     </div>
               </div>
            </div>
         </div>
    );
}

export default FooterBottom;
