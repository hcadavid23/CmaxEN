import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Pricing extends Component {

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


                       <h2 className="section-title2 mb-10">PLEM (Pipeline End Manifold)<br/></h2>
                       <p class="mb-45">Castillomax Oil and Gas offers a complete range of pipe system possibilities for the loading and unloading of products.
                        We have the capability to design, install, replace and modernize with cutting-edge PLEMs.</p>
                       <model-viewer
                       className="model-viewer mb-10"
                        src="assets/img/3dmodel/plem Textured.glb"
                       ar ar-modes="webxr scene-viewer quick-look"
                       camera-controls environment-image="neutral"
                       poster="assets/img/about/about-img-10x.jpg" shadow-intensity="1">

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

export default Pricing;
