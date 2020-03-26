import React from 'react';

// Import Components

import Row from '../global/row';
import Col from '../global/col';
import ConditionsToggle from './dtc-conditions';

// Import Images
import img_symptoms_compare from '../../images/dtc-about-improve-symptoms.png';
import img_lens from '../../images/dtc-about-lens.png';


class About extends React.Component {

    render(){
        return(

            <div id="about">

            <ConditionsToggle></ConditionsToggle>
      
            <section className="dtc-about__improve-symptoms">
              <div className="l-container">
                <Row>
                  <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--half dtc-about__improve-symptoms__col">
                    <h2 className="l-headline">How can you improve the symptoms of both your dry AMD and cataracts?</h2>
                    <p className="l-p dtc-about__improve-symptoms__p">If you only had a cataract, your eye specialist would likely recommend replacing your natural lens with an artificial one, called a monofocal lens. Although a monofocal lens would help address the blurry, misty vision caused by the cataract, it would not help with the dark patches and blind spots caused by dry AMD.</p>
                    <p className="l-p l-p--statement c-yellow dtc-about__improve-symptoms__p">For people like you with dry AMD and cataracts, a more specialised lens is required to help address both conditions: that's where EyeMax Mono comes in</p>
                  </Col>
                  <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--half">
                    <img className="dtc-about__improve-symptoms__compare" src={img_symptoms_compare} alt="" />
                    <p className="l-p l-p--statement dtc-about__improve-symptoms__compare-statement c-yellow">Standard monofocal lenses help reduce blur but do not address blind spots</p>
                    <p className="l-p l-p--footnote">*For illustrative purposes only. Degree of visual impairment and post-procedure results will vary.</p>
                  </Col>
                </Row>
              </div>
            </section>
      
            <section className="dtc-about__eyemax-tech">
              <div className="l-container">
                <div className="dtc-about__image-wrap dtc-about__image-wrap__orangecol-img dtc-about__image-wrap--right">
                  <div className="dtc-about__photo-wrapper__photo-dots dtc-about__photo-wrapper__photo-dots--white-left"></div>
                </div>
                <div className="l-container">
                <Row>
                  <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--half">
                    <img className="dtc-about__eyemax-tech__lens" src={img_lens} alt="" />
                  </Col>
                  <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--half dtc-about__eyemax-tech__col">
                    <div className="dtc-about__photo-wrapper__photo-dots dtc-about__photo-wrapper__photo-dots--light-dark-orange-right">
                      <div className="dtc-about__eyemax-tech__col__container">
                      <h2 className="l-headline">What is EyeMax Mono?</h2>
                        <p className="l-p l-p--statement">A unique innovation for your dry AMD and cataracts</p>
                        <p className="l-p">EyeMax Mono was developed using Optimacular<sup>&trade;</sup> Technology.</p>
                        <ul className="l-list dtc-about__eyemax-tech__list">
                          <li className="l-list__item dtc-about__eyemax-tech__list__item">Sharpens vision and reduces blur in patients with central vision loss</li>
                          <li className="l-list__item dtc-about__eyemax-tech__list__item">May improve reading ability</li>
                          <li className="l-list__item dtc-about__eyemax-tech__list__item">Has the potential to make everyday tasks more manageable</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
                </div>
              </div>
            </section>



{/* 
            <section className="dtc-about__eyemax-tech">
              <div className="l-container">
                <Row>
                  <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--half">
                    <img className="dtc-about__eyemax-tech__lens" src={img_lens} alt="" />
                  </Col>
                  <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--half dtc-about__eyemax-tech__col">
                    <div className="dtc-about__photo-wrapper__photo-dots dtc-about__photo-wrapper__photo-dots--light-dark-orange-right">
                      <div className="dtc-about__eyemax-tech__col__container">
                      <h2 className="l-headline">What is EyeMax Mono?</h2>
                        <p className="l-p l-p--statement">A unique innovation for your dry AMD and cataracts</p>
                        <p className="l-p">EyeMax Mono was developed using Optimacular<sup>&trade;</sup> Technology.</p>
                        <ul className="l-list dtc-about__eyemax-tech__list">
                          <li className="l-list__item dtc-about__eyemax-tech__list__item">Sharpens vision and reduces blur</li>
                          <li className="l-list__item dtc-about__eyemax-tech__list__item">May improve reading ability</li>
                          <li className="l-list__item dtc-about__eyemax-tech__list__item">Has the potential to make everyday tasks more manageable</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </section> */}

{/* 

            <section className="dtc-about__vision-changes">

              <div className="l-container">
                <div className="dtc-about__image-wrap dtc-about__image-wrap__landing-img dtc-about__image-wrap--right">
                  <div className="dtc-about__photo-wrapper__photo-dots dtc-about__photo-wrapper__photo-dots--white-left"></div>
                </div>
                <div className="l-container">
                  <Row className="l-row--reverse-sm dtc-about__landing__row">
                    <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--padTopBottom">
                      <h1 className="l-headline dtc-about__landing__header">EyeMax Mono<sup>&trade;</sup>:</h1>
                      <h2 className="l-headline dtc-about__landing__subhead c-teal">Helping bring life back into focus for patients with dry AMD and cataracts</h2>
                      <p className="l-p">If you have trouble seeing clearly because of cataracts and dry AMD, we're glad you're here to learn about EyeMax Mono, which can help people with these conditions to see better.</p>
                    </Col>
                  </Row>
                </div>
              </div>

              </section>
 */}

            <section className="dtc-about__vision-changes">
              <div className="l-container">
                <div className="dtc-about__image-wrap dtc-about__image-wrap__vision-changes-img dtc-about__image-wrap--right">
                <div className="dtc-about__photo-wrapper__photo-dots dtc-about__photo-wrapper__photo-dots--green-left"></div>
              </div>
              <div className="l-container"></div>
                <Row className="l-row--reverse-sm dtc-about__vision-changes__row">
                  <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--half">
                      <h2 className="l-headline">What changes to my vision can I expect with EyeMax Mono?</h2>
                      <p className="l-p">EyeMax Mono can help you to read more easily and enjoy everyday activities</p>
                      <ul className="l-list dtc-about__vision-changes__list">
                        <li className="l-list__item dtc-about__vision-changes__list__item">EyeMax Mono can help you overcome some of the challenges you currently face as a result of your poor sight, helping you continue to do the simple but essential activities of daily life</li>
                        <li className="l-list__item dtc-about__vision-changes__list__item">From seeing your friends and family, to checking a train timetable, EyeMax Mono can help you stay connected with the world</li>
                      </ul>
                  </Col>
                </Row>
                </div>
            </section>
            </div>
        );
    }
}

export default About;