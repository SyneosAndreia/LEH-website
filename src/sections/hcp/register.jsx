import React from 'react';

import Layout from '../../components/common/hcp-layout';
import SEO from '../../components/global/seo';
import Row from '../../components/global/row';
import Col from '../../components/global/col';
import RegisterForm from '../../components/content/register-form';


import '../../styles/hcp-register.scss';

const Register = () => (
    <Layout>
        <SEO title="Register Here"/>

        <section className="register-landing">
          <div className="l-container">
            <Row>
              <Col className="register-landing__content-wrapper">
                <h2 className="l-headline">Register</h2>
              </Col>
            </Row>
          </div>
        </section>

        <RegisterForm/>
    </Layout>
);


export default Register;