import React, { Component } from 'react';

class Map extends Component {

    render() {

        return (
            <div className="map-area">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15692.469385570961!2d-66.8768876!3d10.4914148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb58ad68105cdfe2!2sCastillomax%20Oil%20%26%20Gas!5e0!3m2!1ses!2sve!4v1648648871098!5m2!1ses!2sve" loading="lazy"></iframe>
            </div>
        );
    }
}

export default Map;
