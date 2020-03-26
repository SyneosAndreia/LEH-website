import React from 'react';

import Row from '../global/row';

import '../../styles/safety.scss';

import img_expand from '../../images/icon-expand.png';
import img_collapse from '../../images/icon-collapse.png';

const Safety = (props) => (
    <section className={"safety " + (props.className ? `safety--gray ${props.className}` : 'safety--gray')}>
        <div className="l-container">
            <Row>
                <div className="safety__content-wrapper">
                    <p className="l-p safety__content-wrapper__headline">Read important information about EyeMax Mono surgery</p>
                    <p className="l-p"> 
                        <span className="safety__content-wrapper__subhead">CAUTION</span>
                        <span className="safety__content-wrapper__content"><br/>Special consideration should be given to the dimensions of the lens model in relation to the anatomical clearances in the patient’s eye. Long-term clinical outcome must be carefully weighed against the potential benefit associated with the implantation of an intraocular lens. The patient’s clinical progress should be carefully monitored. Patients with any of the following condition may not be suitable candidates for an intraocular lens because the lens may exacerbate an existing condition, may interfere with diagnosis or treatment of a condition, or may pose an unreasonable risk to the patient’s eyesight. Careful preoperative evaluation and sound clinical judgment should be used by the surgeon to decide the benefit/risk ratio before implanting a lens in a patient with one or more of these conditions:
                            <br/>Choroidal hemorrhage, chronic severe uveitis, concomitant severe eye disease, excessive vitreous loss, extremely shallow anterior chamber, medically uncontrolled glaucoma, microphthalmos, non-age-related cataract, posterior capsular rupture (preventing fixation of IOL), proliferative diabetic retinopathy (severe), severe corneal dystrophy, severe optic atrophy, uncontrollable positive pressure and zonular separation (preventing fixation of IOL)</span>
                    </p>
                    <ExpandSection>
                        <p className="l-p safety__content-wrapper__subhead">WARNINGS</p>
                        <ol className="l-p safety__content-wrapper__warnings-precautions__contents__list">
                            <li className="l-li safety__content-wrapper__warnings-precautions__contents__list__item">As with any surgical procedure, there is a risk involved. Potential complications accompanying cataract or implant surgery may include, but are not limited to the following: corneal endothelial damage, infection (endophthalmitis), retinal detachment, vitritis, cystoid macular edema, corneal edema, pupillary block, cyclitic membrane, iris prolapse, hypopyon, and transient or persistent glaucoma.</li>
                            <li className="l-li safety__content-wrapper__warnings-precautions__contents__list__item">The safety and effectiveness of intraocular lens implants have not been substantiated in patients with pre-existing ocular conditions (chronic drug miosis, glaucoma, amblyopia, diabetic retinopathy, previous corneal transplant, previous retinal detachment and/or iritis, etc.). Physicians considering lens implantation in such patients should explore the use of alternative methods of aphakic correction and consider lens implantation only if alternatives are deemed unsatisfactory in meeting the needs of the patient.</li>
                            <li className="l-li safety__content-wrapper__warnings-precautions__contents__list__item">The long-term effects of intraocular lens implantation have not been determined. Therefore, physicians should continue to monitor patients postoperatively on a regular basis.</li>
                            <li className="l-li safety__content-wrapper__warnings-precautions__contents__list__item">Patients with preoperative problems such as corneal endothelial disease, abnormal cornea, macular degeneration, retinal degeneration, glaucoma and chronic drug miosis may not achieve the visual acuity of patients without such problems. The physicians must determine the benefits to be derived from lens implantation when such condition exists.</li>
                            <li className="l-li safety__content-wrapper__warnings-precautions__contents__list__item">Postoperative distension of the capsular bag with variable amounts of anterior chamber shallowing and induced myopia have been associated with capsulorhexis techniques and implantaion of PMMA, silicone and acrylic posterior chamber lenses (Holtz, 1992)</li>
                        </ol>
                        <p className="l-p safety__content-wrapper__content">
                            It is recommended that viscoelastic be removed from the eye at the close surgery with emphasis on the space between the posterior capsule lens. This may be accomplished by gently depressing the optic posteriorly with the I/A tip and using standard irrigation I aspiration techniques to remove the viscoelastic agent from the eye. This should force any trapped viscoelastic anteriorly where it can be easily aspirated.
                            <br/><br/>*NOTE: Implantation of intraocular lenses should not be performed in patients under eighteen years of age.
                        </p>
                        <p className="l-p safety__content-wrapper__subhead">PRECAUTIONS</p>
                        <ol className="l-p safety__content-wrapper__warnings-precautions__contents__list">
                            <li className="l-li safety__content-wrapper__warnings-precautions__contents__list__item">Do not resterilize these intraocular lenses by any methods. (See RETURNED GOODS POLICY).</li>
                            <li className="l-li safety__content-wrapper__warnings-precautions__contents__list__item">Use only sterile intraocular irrigating solutions (such as Contasol – BSS) to rinse and I or soak lenses.</li>
                            <li className="l-li safety__content-wrapper__warnings-precautions__contents__list__item">Handle lenses carefully to avoid damage to lens surfaces or haptics.</li>
                            <li className="l-li safety__content-wrapper__warnings-precautions__contents__list__item">Do not attempt to reshape haptic in any way.</li>
                            <li className="l-li safety__content-wrapper__warnings-precautions__contents__list__item">A high level of surgical skill is required for intraocular lens implantation. The surgeon should have observed and I or assisted innumerous implantations and successfully completed on or more courses on intraocular lens implantation before attempting to implant intraocular lenses.</li>
                        </ol>
                        <p className="l-p safety__content-wrapper__content">Do not reuse. If reuse, it may lead to toxic effect.</p>
                    </ ExpandSection>
                </div>
            </Row>
        </div>
    </section>
);

export default Safety;

// The ExpandSection component houses the button that triggers the expand/collapse and uses state/css to set the image and expand/collapse the content.

class ExpandSection extends React.Component {
    constructor(props) {
        super(props);

        // Beginning State
        this.state = { 
                        collapsed: true,
                        icon: img_expand
                    };
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
            icon: !this.state.collapsed ? img_expand : img_collapse
        });
    }

    render(){
        return(
            <div className="safety__content-wrapper__warnings-precautions">
                <button className={"safety__content-wrapper__warnings-precautions__button"} onClick={this.toggle.bind(this)}>
                    <img className="safety__content-wrapper__warnings-precautions__icon" src={this.state.icon} alt="" /><span>Expand to read more</span>
                </button>
                <div className={"safety__content-wrapper__warnings-precautions__contents " + (this.state.collapsed ? "safety__content-wrapper__warnings-precautions__contents--collapsed" : "safety__content-wrapper__warnings-precautions__contents--opened")}>{this.props.children}</div>
            </div>
        );
    }
}