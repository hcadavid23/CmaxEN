import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';

export default () => (
    <section className="project-2 pt-115 pb-90">
        <Tabs>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="aportfolio-menu aportfolio-menu2 text-center mb-50">
                        <h2 class="section-title mb-35">Media Gallery</h2>
                    </div>
                </div>
            </div>
            <TabPanel>
            <div className="row aportfolio-active">

                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-5.jpg" className="img-fluid" alt="project_img"/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-6.jpg" className="img-fluid" alt="project_img"/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-7.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-21.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-22.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-23.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-8.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-9.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-10.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-11.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-12.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-13.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-14.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-15.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-17.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-18.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-19.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-20.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-24.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-25.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-26.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-27.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-28.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/project-img-29.jpg" className="img-fluid" alt="project_img"/>

                    </div>
                </div>




            </div>
            </TabPanel>

        </div>
        </Tabs>
    </section>
);
