import React from 'react';

import Layout from '../components/common/dtc-layout';
import SEO from '../components/global/seo';
import Row from '../components/global/row';
import Col from '../components/global/col';
import ContactForm from '../components/content/contact-form';

import '../styles/dtc-contact-us.scss';

// Import Images

import img_contact_landing from '../images/dtc-contact-us.jpg';

const ContactUs = () => (
  <Layout>
    <SEO title="Contact us" />

    <section className="dtc-contact-landing">
      <div className="l-container">
        <Row className="dtc-contact-landing__row">
          <Col className="dtc-contact-landing__content-wrapper">
            <h1 className="dtc-contact-landing__content-wrapper__header">Contact us</h1>
            <p className="l-p dtc-contact-landing__content-wrapper__statement">For any enquiries, please fill in the contact form below</p>
          </Col>
          <Col className="dtc-contact-landing__photo-wrapper dtc-contact-landing_content-wrapper__photo-wrapper">
            <img className="dtc-contact-landing__photo-wrapper__photo" src={img_contact_landing} alt="" />
            <div className="dtc-contact-landing__photo-wrapper__photo-dots dtc-contact-landing__photo-wrapper__photo-dots--white-left"></div>
          </Col>
        </Row>
      </div>
    </section>

    <section className="dtc-contact-header-mobile">
      <div className="l-container">
        <Row>
          <Col className="dtc-contact-header-mobile__content-wrapper">
            <h1 className="dtc-contact-header-mobile__content-wrapper__header">Contact us</h1>
            <p className="l-p dtc-contact-header-mobile__content-wrapper__statement">For any enquiries, please fill in the contact form below</p>
          </Col>
        </Row>
      </div>
    </section>

    <ContactForm></ContactForm>
    
  </Layout>
);

export default ContactUs;
