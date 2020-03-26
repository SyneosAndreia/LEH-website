import React from 'react';

// Import Components

import Layout from '../components/common/dtc-layout';
import SEO from '../components/global/seo';
import Row from '../components/global/row';
import Col from '../components/global/col';
import About from '../components/content/dtc-about';
import HowItWorks from '../components/content/dtc-how-it-works';

// Import Styles

import '../styles/dtc-about.scss';

// Import Images


class AboutPage extends React.Component {
  constructor(props) {
      super(props);
  }

  render(){
      return(
        <Layout>
          <SEO title="About" />

          <section className="dtc-about__landing">

            <div className="l-container">
              <div className="dtc-about__image-wrap dtc-about__image-wrap__landing-img dtc-about__image-wrap--right">
                <div className="dtc-about__photo-wrapper__photo-dots dtc-about__photo-wrapper__photo-dots--white-left"></div>
              </div>
              <div className="l-container">
                <Row className="l-row--reverse-sm dtc-about__landing__row">
                  <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--padTopBottom">
                    <h1 className="l-headline dtc-about__landing__header c-teal">EyeMax Mono<sup>&trade;</sup>:</h1>
                    <h2 className="l-headline dtc-about__landing__subhead c-teal">Helping bring life back into focus for patients with dry AMD and cataracts</h2>
                    <p className="l-p">If you have trouble seeing clearly because of cataracts and dry AMD, we're glad you're here to learn about EyeMax Mono, which can help people with these conditions to see better.</p>
                  </Col>
                </Row>
              </div>
            </div>

          </section>
      
            {/* <section className="dtc-about__landing">
              <div className="l-container">
                <Row className="l-row--reverse-sm dtc-about__landing__row">
                  <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--half">
                      <h1 className="l-headline dtc-about__landing__header c-teal">EyeMax Mono<sup>&trade;</sup>:</h1>
                      <h2 className="l-headline dtc-about__landing__subhead c-teal">Helping bring life back into focus for patients with dry AMD and cataracts</h2>
                      <p className="l-p">If you have trouble seeing clearly because of cataracts and dry AMD, we're glad you're here to learn about EyeMax Mono, which can help people with these conditions to see better.</p>
                  </Col>
                  <Col className="dtc-about__photo-wrapper dtc-about__content-wrapper__photo-wrapper">
                    <img className="dtc-about__photo-wrapper__photo" src={img_landing} alt="" />
                    <div className="dtc-about__photo-wrapper__photo-dots dtc-about__photo-wrapper__photo-dots--white-left"></div>
                  </Col>
                </Row>
              </div>
            </section> */}
      
            <About></About>
      
            <HowItWorks></HowItWorks>
      
        </Layout>
      );
  }
}

export default AboutPage;
