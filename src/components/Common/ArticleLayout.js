import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArticleLayout = ({ post }) => {

  return (
    <div className="section-title-wrapper mb-25">

        <h2 className="section-title mb-25">Castillomax Oil and Gas</h2>
        <p className="mb-45">Castillomax Oil and Gas, is a Venezuelan company specializing in the oil and gas sector.  We develop off-shore
        engineering projects, that span from adaptation and modernization of oil maritime terminals, to the automation of crude oil loading
        and unloading processes, besides other activities in this sector.

         <br/>Our work team includes a multidisciplinary group of Venezuelan professionals, highly trained and research-oriented in different areas of the hydrocarbons industry.
         <br/>Castillomax Oil and Gas, S.A. activities are based on the main international standards, such as API, ASME, ASTM, NFPA, OCIMF, ISA, PIP, GPSA, NACE, among others
         that guarantee our excellent engineering and construction practices.</p>

    </div>
  );
}

export default ArticleLayout;
