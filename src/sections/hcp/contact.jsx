import React from 'react';

import Layout from '../../components/common/hcp-layout';
import SEO from '../../components/global/seo';
import Row from '../../components/global/row';
import Col from '../../components/global/col';
import ContactForm from '../../components/content/contact-form';

import '../../styles/hcp-contact-us.scss';

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us" />

    <section className="contact-landing">
      <div className="l-container">
        <Row>
          <Col className="contact-landing__content-wrapper">
            <h2 className="l-headline">Contact us</h2>
            <p className="l-p contact-landing__content-wrapper__statement">To request additional information about EyeMax Mono<sup>&trade;</sup> or to schedule a visit from a representative, please call, email, or use the form below to send a message.</p>
          </Col>
        </Row>
      </div>
    </section>

    <ContactForm></ContactForm>

  </Layout>
);

export default ContactUs;
