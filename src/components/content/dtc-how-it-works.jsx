// import { Link } from 'gatsby';
import React from 'react';


// Import Components

import Row from '../global/row';
import Col from '../global/col';

// Import Images
import img_eyemax_compare from '../../images/dtc-about-eyemax-compare.png';
import img_how_eye from '../../images/dtc-about-how-eye.png';
import img_how_eye_mobile from '../../images/dtc-about-how-eye-mobile.png';


class HowItWorks extends React.Component {



    render(){
        return(
            
            <div name="scroll-container">
                
                <section className="dtc-about__how-it-works">
                    <div id="how-it-works" class="anchr"></div>
                    <div className="l-container">
                    <Row>
                        <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--full">
                            <h2 className="l-headline c-teal">How does EyeMax Mono work?</h2>
                            <p className="l-p l-p--statement dtc-about__how-it-works__statement">Dry AMD affects the macula at the back of your eye. The central macula is the most important area for achieving sharp vision in order to read and see faces.</p>
                            <p className="l-p">With dry AMD, dark patches may develop in the central area of your vision. Your eye may naturally try to adapt by using healthier areas of the macula to help you see. This might make you feel like you are looking out of the side of your eye. Although this may help reduce the dark patches in your vision, your sight will be blurred.</p>
                            <img className="dtc-about__how-it-works__eye" src={img_how_eye} alt="" />
                            <img className="dtc-about__how-it-works__eye--mobile" src={img_how_eye_mobile} alt="" />
                        </Col>
                    </Row>
                    </div>
                </section>
            
                <section className="dtc-about__eyemax-improves">
                    <div className="l-container">
                    <Row>
                        <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--half">
                        <h2 className="l-headline c-teal">EyeMax Mono improves vision by using the healthier areas of your macula</h2>
                        <ul className="l-list dtc-about__eyemax-improves__list">
                            <li className="l-list__item dtc-about__eyemax-improves__list__item">The unique design of EyeMax Mono helps you to naturally use the healthier areas of the macula to see more clearly</li>
                            <li className="l-list__item dtc-about__eyemax-improves__list__item">It does this by reducing the blurriness and making a sharper image</li>
                        </ul>
                        </Col>
                        <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--half">
                        <img className="dtc-about__eyemax-improves__compare" src={img_eyemax_compare} alt="" />
                        <p className="l-p l-p--footnote dtc-about__eyemax-improves__footnote">*For illustrative purposes only. Degree of visual impairment and post-procedure results will vary.</p>
                        </Col>
                    </Row>
                    </div>
                </section>

                <section className="dtc-about__procedure">
                    <div className="l-container">
                        <div className="dtc-about__image-wrap dtc-about__image-wrap__proceedure-img dtc-about__image-wrap--right">
                        <div className="dtc-about__photo-wrapper__photo-dots dtc-about__photo-wrapper__photo-dots--yellow-left"></div>
                    </div>
                    <div className="l-container"></div>
                        <Row className="l-row--reverse-sm dtc-about__vision-changes__row">
                            <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--half">
                                <h2 className="l-headline">What is the EyeMax Mono procedure like?</h2>
                                <p className="l-p l-p--statement">EyeMax Mono is inserted into your eye using a standard procedure</p>
                                <ul className="l-list dtc-about__procedure__list">
                                <li className="l-list__item dtc-about__procedure__list__item">The procedure is common and the same as that used for removing a cataract and inserting a monofocal lens</li>
                                <li className="l-list__item dtc-about__procedure__list__item">A small opening will be made to remove your natural lens and replace it with EyeMax Mono</li>
                                <li className="l-list__item dtc-about__procedure__list__item">A local anaesthetic will be used</li>
                                <li className="l-list__item dtc-about__procedure__list__item">You can expect to have the procedure and go home the same day </li>
                                </ul>
                                <p className="l-p">Your eye should recover from surgery in a few days to weeks. Eye drops may be given to you to use while your eye heals.</p>
                            </Col>
                        </Row>
                    </div>
                </section>

                <section className="dtc-about__after-procedure">
                    <div className="l-container">
                        <div className="dtc-about__image-wrap dtc-about__image-wrap__after-proceedure-img dtc-about__image-wrap--left">
                        <div className="dtc-about__photo-wrapper__photo-dots dtc-about__photo-wrapper__photo-dots--green-right"></div>
                    </div>
                    <div className="l-container"></div>
                        <Row className="l-row--reverse-sm dtc-about__vision-changes__row">
                            <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--half dtc-about__content-wrapper--half--right">
                                <h2 className="l-headline">What can I expect after the procedure?</h2>
                                <p className="l-p l-p--statement">EyeMax Mono has already helped thousands of patients like you who previously had no options to help improve their worsening eyesight caused by dry AMD and cataracts</p>
                                <p className="l-p">How dry AMD changes your ability to see is different for each person. Although the speed at which dry AMD progresses cannot be predicted, with this condition, your sight will get worse over time.</p>
                                <p className="l-p">EyeMax Mono is not a cure and it will not stop the dry AMD from progressing. However, it may improve your sight and how well you can read for as long as you have sufficient healthier areas of your macula remaining.</p>
                            </Col>
                        </Row>
                    </div>
                </section>
            
                <section className="dtc-about__glasses">
                    <div className="l-container">
                    <Row>
                        <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--full">
                            <h2 className="l-headline">Will I need to use glasses with EyeMax Mono?</h2>
                            <p className="l-p">Your prescription and the way you use your glasses may change after EyeMax Mono is implanted. Your eye specialist will discuss with you if you will need to use glasses after the procedure. You may need to start using glasses even if you do not use them now.</p>
                        </Col>
                    </Row>
                    </div>
                </section>
            </div>
        );
    }
}

export default HowItWorks;