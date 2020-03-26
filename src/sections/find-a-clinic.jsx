import React from 'react';

import Layout from '../components/common/dtc-layout';
import SEO from '../components/global/seo';
// import Maps from '../components/common/maps';
import ListClinics from '../components/common/ListClinics';



import '../styles/privacy.scss';

const FindClinic = () => (
        <Layout>
        <SEO title="Find a clinic" />

        <ListClinics/>
        </Layout>
    )

export default FindClinic;
