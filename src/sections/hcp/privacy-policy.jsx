import React from 'react';

import Layout from '../../components/common/hcp-layout';
import SEO from '../../components/global/seo';
import PrivacyPolicy from '../../components/common/privacy';

import '../../styles/privacy.scss';

const PrivacyPolicyHCP = () => (
  <Layout>
    <SEO title="Privacy Policy" />

    <PrivacyPolicy></PrivacyPolicy>
    
  </Layout>
);

export default PrivacyPolicyHCP;
