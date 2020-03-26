import React from 'react';

import Layout from '../components/common/dtc-layout';
import SEO from '../components/global/seo';
import PrivacyPolicy from '../components/common/privacy';

import '../styles/privacy.scss';

const PrivacyPolicyDTC = () => (
  <Layout>
    <SEO title="Privacy Policy" />

    <PrivacyPolicy></PrivacyPolicy>
    
  </Layout>
);

export default PrivacyPolicyDTC;
