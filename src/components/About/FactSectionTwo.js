import React, { Component } from 'react';

class FactTwo extends Component {

    render() {

        return (
        <section className="fact-area pb-400" style={{ backgroundImage:`url(${'assets/img/bg/fact-bg.jpg'})`}}>
            <div className="container">
                <div className="fun-fact text-center pb-80">

                </div>
            </div>
            <div className="container">
                <div className="row gx-0">
                    <div className="col-lg-3 col-sm-6">
                        <div className="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".3s">
                            <div className="kfact-icon">

                            </div>


                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".6s">
                            <div className="kfact-icon">

                            </div>


                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".9s">
                            <div className="kfact-icon">

                            </div>


                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="kfact kfact-last-child text-center mb-30 wow fadeInUp" data-wow-duration="1s">
                            <div className="kfact-icon">

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default FactTwo;
