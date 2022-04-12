import React, { Component } from 'react';

class FaqAccordion extends Component {

    render() {

        return (
          <section className="why-we bg-grey pt-100 pb-100 pb-md-100 position-relative">
              <div className="common-shape-wrapper wow slideInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="common-shape-inner wow slideInleft animated" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
              </div>
              <div className="container z-index">
                  <div className="row justify-content-between">

                      <div className="section-title-wrapper">
                          <div className="provide-content">



                         <h2 className="section-title2 mb-10">Onshore and subsea pipe laying<br/></h2>

                       <p>We are specialist in pipe laying service, we have a multidisciplinary and highly-trained team that can execute large-scale projects.
                       <br/>Our service includes planning, execution and commissioning of projects using conventional, S-Lay or Tow-In installation methods,
                       according to the needs and requirements of our clients.
                        <br/>Our activities include manufacturing and installation of risers, horizontal pipe laying, sacrificial anode installation, non-destructive tests, hydrostatic tests, spools manufacturing and development of concrete coating, according to the application.
</p>
                        <video className="container"
                        src="assets/img/about/TV - Miramar_Trim.mp4" width="800" height="600" autoplay="autoplay"  loop="loop"  >
                        </video>


                          </div>
                      </div>
                  </div>
              </div>
          </section>

        );
    }
}

export default FaqAccordion;
