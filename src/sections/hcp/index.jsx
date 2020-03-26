import { Link } from 'gatsby';
import React from 'react';
import { graphql } from 'gatsby';

// Import Components

import Layout from '../../components/common/hcp-layout';
import SEO from '../../components/global/seo';
import Row from '../../components/global/row';
import Col from '../../components/global/col';
import Safety from '../../components/common/safety';
import References from '../../components/common/references';

// Import Styles

import '../../styles/hcp-home.scss';

// Import Images

import img_landing_logo from '../../images/hcp-home-landing-logo.png';
import img_landing from '../../images/hcp-home-landing.jpg';
import img_moa from '../../images/hcp-home-moa.jpg';
import img_practice from '../../images/hcp-home-practice.jpg';

// Begin [HCP Home] Layout

const Home = ({data}) => (
  <Layout className="hcp-home">
    <SEO title="Healthcare Professionals" />

    <section className="hcp-home__hcp-landing">
      <div className="l-container">
        <Row className="l-row--reverse-sm hcp-home__hcp-landing__row">
          <Col className="hcp-home__content-wrapper hcp-home__content-wrapper--half">
              <img className="hcp-home__hcp-landing__logo" src={img_landing_logo} alt="" />
              <h1 className="l-headline hcp-home__hcp-landing__header">18 letters<sup>1,2*</sup></h1>
              <p className="l-p l-p--statement">Imagine what your dry AMD patients could really gain</p>
          </Col>
          <Col className="hcp-home__photo-wrapper">
            <img className="hcp-home__photo-wrapper__photo" src={img_landing} alt="" />
          </Col>
        </Row>
      </div>
    </section>

    <section className="hcp-home__hcp-about-cta">
      <div className="l-container">
        <Row>
          <Col className="hcp-home__content-wrapper hcp-home__content-wrapper--full">
            <h2 className="l-headline c-teal">EyeMax Mono<sup>&trade;</sup> is a unique optical innovation using Optimacular<sup>&trade;</sup> Technology to improve visual function<sup>1,2</sup></h2>
            <p className="l-p">EyeMax Mono is specifically designed for patients who have dry AMD and central vision loss with cataract and has been shown to provide mean visual acuity gains of 18 early treatment diabetic retinopathy study (ETDRS) letters.<sup>*</sup></p>
            <p className="l-p l-p--footnote">*Approximate ETDRS letter gain calculated from mean post-operative corrected distance visual acuity (CDVA) logarithm of the minimum angle of resolution (LogMAR) improvement.</p>
            <Link className="l-button l-button--teal-white" to="/hcp/about-overview">Learn More</Link>
          </Col>
        </Row>
      </div>
    </section>

    <section className="hcp-home__hcp-moa-cta">
      <div className="l-container">
        <Row className="l-row--reverse-sm hcp-home__hcp-moa-cta__row">
          <Col className="hcp-home__content-wrapper hcp-home__content-wrapper--half hcp-home__content-wrapper--half--short">
            <h2 className="l-headline">Unique Optimacular Technology optimises image quality at the preferred retinal locus (PRL)<sup>1,2</sup></h2>
            <p className="l-p">EyeMax Mono maximises functional vision by optimising the image in all areas out to 10<sup>&deg;</sup> from the fovea centre.</p>
            <Link className="l-button l-button--white-teal" to="/hcp/about/#how-it-works">See How It Works</Link>
          </Col>
          <Col className="hcp-home__photo-wrapper">
            <img className="hcp-home__photo-wrapper__photo hcp-home__hcp-moa-cta__photo" src={img_moa} alt="" />
          </Col>
        </Row>
      </div>
    </section>

    <section className="hcp-home__hcp-postop-cta">
      <div className="l-container">
        <Row>
          <Col className="hcp-home__content-wrapper hcp-home__content-wrapper--full">
              <h2 className="l-headline">EyeMax Mono can help you change the dry AMD conversation, giving many patients new hope for visual functional gains</h2>
              <p className="l-p">In a study, mean reading speed, reading acuity,<sup>*</sup> and critical print size<sup>&dagger;</sup> improved following <span className="l-no-break">EyeMax Mono implantation.<sup>1</sup></span></p>
            <p className="l-p l-p--footnote">*1.07 &#177; 0.31 pre-operatively to 0.9 &#177; 0.37 post-operatively logMAR (n&#61;7).
              <br/>†1.04 &#177; 0.25 pre-operatively to 0.95 &#177; 0.27 post-operatively logMAR (n&#61;8).</p>
              <Link className="l-button l-button--white-orange" to="/hcp/about/#about-data">See Case Series Data</Link>
          </Col>
        </Row>
      </div>
    </section>

    <section className="hcp-home__hcp-practice-cta">
      <div className="l-container">
        <Row className="hcp-home__hcp-practice-cta__row">
          <Col className="hcp-home__content-wrapper hcp-home__content-wrapper--half hcp-home__content-wrapper--half--short">
            <h2 className="l-headline c-teal">EyeMax Mono integrates easily into your clinical practice</h2>
            <p className="l-p">Implanting the EyeMax Mono lens does not require additional surgical training, and its safety profile is consistent with standard cataract procedures.<sup>1-3</sup></p>
            <Link className="l-button l-button--teal-white" to="/hcp/about/#about-practice">Learn More</Link>
            <Link className="l-link l-link--teal-orange hcp-home__hcp-practice-cta__link" to="/hcp/contact">Talk with an EyeMax Mono representative</Link>
          </Col>
          <Col className="hcp-home__photo-wrapper">
            <img className="hcp-home__photo-wrapper__photo hcp-home__hcp-practice-cta__photo" src={img_practice} alt="" />
          </Col>
        </Row>
      </div>
    </section>

    <Safety className="safety--gray" />
    <References className="references--white" referenceList={data.file.childMarkdownRemark.html} />
  </Layout>
);

export default Home;

// Using GraphQL to pull in references from page provided

export const referenceQuery = graphql`
  query {
    file(relativePath: { eq: "hcp-home.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;