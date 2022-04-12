import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import CtaTwo from '../HomeTwo/CtaTwoSection';
import FaqAccordion from './FaqAccordion';
import FaqForm from './FaqFormSection';


class FaqMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Faq" />
				{/* breadcrumb-end */}

                {/* faq-start */}
                <FaqAccordion />
				{/* faq-end */}

                {/* form-start */}
                
				{/* form-end */}

                {/* pricing-start */}

                {/* pricing-end */}
        	</main>
        );
    }
}

export default FaqMain;
