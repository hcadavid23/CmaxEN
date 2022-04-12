import React, { Component } from 'react';
import ArticleLayout from '../Common/ArticleLayout';
import posts from '../../sample-data/blog-posts/posts.json';
import Breadcrumb from '../Common/Breadcrumb';
import PaginationSection from '../Common/Pagination';


class BlogMain extends Component {

    render() {

        return (
            <main>

                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Blog" />
				{/* breadcrumb-end */}

        <section className="why-we bg-grey pt-100 pb-100 pb-md-100 position-relative">
    <div className="common-shape-wrapper wow slideInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
        <div className="common-shape-inner wow slideInleft animated" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
    </div>
    <div className="container z-index">
        <div className="row justify-content-between">

            <div className="section-title-wrapper">
                <div className="provide-content">

                 <h2 className="section-title2 mb-10">Multi-buoys Mooring Systems<br/></h2>
                 <p  class="mb-45">Castillomax Oil and Gas designs, builds and supervises the installation of Conventional Multi-Buoy Mooring Systems, according to the international standards and best engineering practices.
                 <br/>Besides, we use the latest numerical modelling simulation software for our studies, to ensure quality, operation and durability of the manufactured equipment.</p>
                 <model-viewer
                 className="model-viewer mb-10"
                  loading="eager"
                  src="assets/img/3dmodel/bouy textured.glb"
                 ar ar-modes="webxr scene-viewer quick-look"
                 camera-controls environment-image="neutral"
                 poster="assets/img/about/about-img-9x.jpg" shadow-intensity="1">
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

        	</main>
        );
    }
}

export default BlogMain;
