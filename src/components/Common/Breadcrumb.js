import React, { Component } from 'react';
import Link from 'next/link';

const Breadcrumb = (props) => {
   const { pageTitle } = props;
     return (
         <section className="page-title-area breadcrumb-spacing" style={{ backgroundImage:`url(${'assets/img/bg/breadcrumb-bg.jpg'})`}}>
            <div className="container">
             <div className="row justify-content-center">
                 <div className="col-xxl-9">
                    
                 </div>
             </div>
         </div>
     </section>
     );
   }

   export default Breadcrumb;
