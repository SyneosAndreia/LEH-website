import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/common/hcp-layout';
import SEO from '../../components/global/seo';
import Row from '../../components/global/row';
import Col from '../../components/global/col';
import '../../styles/hcp-about-invua.scss';



const AboutInvua = ({data}) => (
  <Layout className="hcp-about-invua">
    <SEO title="About Invua" />

    <section className="about-invua">
      <div className="l-container">
        <Row>
          <Col className="about-invua__content-wrapper">
            <h2 className="l-headline about-invua__heading">About Invua</h2>
            <p className="l-p">Invua is a pioneering medical technology company and a leading developer of ocular implants for macular disorders. By looking beyond boundaries and thinking differently about vision, we are creating solutions for some of the world’s most challenging eye conditions. Our leading product, EyeMax Mono™ uses innovative lens technology and is marketed internationally as a solution for dry AMD and cataract. Dry AMD is a condition with a global prevalence of 196 million, and currently no cure.</p>
            <p className="l-p">EyeMax Mono™ is the only intraocular lens (IOL) specifically designed for patients with dry AMD. The ground-breaking Optimacular Technology™ behind EyeMax Mono™ allows people with dry AMD to make better use of functioning areas of the macula not as severely affected by the disease, and improve their vision.</p>
            <p className="l-p">The ethos of our company was shaped by pioneering eye specialists and scientists. We challenge ourselves to think differently about vision today, so patients can enjoy better vision tomorrow. For more information, please visit www.eyemaxmono.com</p>
          </Col>
        </Row>
      </div>

      <div className=" l-container">
        <div className="about-invua__text-panel-wrapper">
        <Row>
            <Col className="about-invua__text-wrapper">
              <p className="l-p about-invua__text-wrapper__header">Our vision</p>
              <p className="l-p about-invua__text-wrapper__statement">Imaginative thinking that transforms lives</p>
            </Col>
            <Col className="about-invua__text-wrapper about-invua__text-wrapper--right">
            <p className="l-p about-invua__text-wrapper__header">Our mission</p>
              <p className="l-p about-invua__text-wrapper__statement">To think differently about vision today so patients can enjoy better vision tomorrow</p>
            </Col>
        </Row>
        </div>
      </div>
    </section>

    <section className="our-values">
      <div className="l-container">
      <Row>
          <Col className="our-values__content-wrapper">
            <h2 className="l-headline our-values__heading">Our values</h2>
          </Col>
        </Row>
      </div>
      <div className="l-container">
      <div className="our-values__text-panel-wrapper">
        <Row>
            <Col className="our-values__text-wrapper">
              <p className="l-p our-values__text-wrapper__header">Curiosity</p>
              <p className="l-p our-values__text-wrapper__statement">we look beyond boundaries, explore and experiment</p>
            </Col>
            <Col className="our-values__text-wrapper">
            <p className="l-p our-values__text-wrapper__header">Tenacity</p>
              <p className="l-p our-values__text-wrapper__statement">we use our determination and resilience to make change happen</p>
            </Col>
            <Col className="our-values__text-wrapper our-values__text-wrapper--right">
            <p className="l-p our-values__text-wrapper__header">Humanity</p>
              <p className="l-p our-values__text-wrapper__statement">we act with the needs of people in mind</p>
            </Col>
        </Row>
        </div>
        </div>
    </section>


    {/* <References className="references--gray" referenceList={data.file.childMarkdownRemark.html} /> */}
  </Layout>
);

export default AboutInvua;


// Using GraphQL to pull in references from page provided

export const referenceQuery = graphql`
  query {
    file(relativePath: { eq: "hcp-about.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;