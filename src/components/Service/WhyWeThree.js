import React, { Component } from 'react';

class WhyWeThree extends Component {

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




                           <h2 className="section-title2 mb-10">Single Point Mooring<br/></h2>
                           <p>We have the know-how and capability to design, build and install turret type Monobuoys (Single Point Mooring),
                            taking into account the specific characteristics of each loading and unloading process, environmental conditions and other significant parameters.</p>
                           <model-viewer
                           className="model-viewer mb-10"
                            src="assets/img/3dmodel/scene (5).glb"

                           camera-controls environment-image="neutral"
                           poster="assets/img/about/about-img-1.png" shadow-intensity="1">
                           </model-viewer>

                           <script
                           type="module"
                           src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
                           ></script>
                           <script type="module" src="examples/built/dependencies.js">
                             </script>
                             <script type="module" src="./examples/built/docs-and-examples.js">
                             </script>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default WhyWeThree;
