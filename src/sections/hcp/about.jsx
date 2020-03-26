import { Link } from "gatsby";
import React from "react";
import { graphql } from "gatsby";
import { Player, BigPlayButton } from "video-react";

import Layout from "../../components/common/hcp-layout";
import SEO from "../../components/global/seo";
import Row from "../../components/global/row";
import Col from "../../components/global/col";
import Safety from "../../components/common/safety";
import References from "../../components/common/references";
import EyemaxPRLSlider from "../../components/content/howtechworks_1";
import EyemaxIOLSlider from "../../components/content/howtechworks_2";

import "../../styles/hcp-about.scss";
import "../../../node_modules/video-react/dist/video-react.css"; // import css

import img_landing from "../../images/hcp-about-landing.jpg";
import img_lens from "../../images/hcp-about-lens.png";
import img_lens_no_logo from "../../images/hcp-about-lens-no-logo.png";
import img_data_chart_1 from "../../images/hcp-about-data-chart-1.png";
import img_data_chart_2 from "../../images/hcp-about-data-chart-2.png";
import video_poster from "../../video/videoPoster.jpg";
import video_file from "../../video/video.mp4";

const About = ({ data }) => (
  <Layout className="hcp-about">
    <SEO title="About Eyemax Mono" />
    <section className="about-landing">
      <div id="about-landing" class="anchr"></div>
      <div className="l-container">
        <Row className="l-row--reverse-sm">
          <Col className="about-landing__content-wrapper">
            <h1 className="l-headline">
              AMD is the leading cause of legal blindness worldwide, with 90% of cases caused by dry
              AMD<sup>1-5</sup>
            </h1>
            <ul className="about-landing__content-wrapper__list">
              <li className="l-li about-landing__content-wrapper__list__item">
                <span className="c-white">
                  Currently there are more than 50 million cases of dry AMD across Europe
                  <sup>6</sup>
                </span>
              </li>
              <li className="l-li about-landing__content-wrapper__list__item">
                <span className="c-white">
                  Estimated pooled prevalence is expected to reach 69 million by 2040<sup>6</sup>
                </span>
              </li>
            </ul>
          </Col>
          <Col className="about-landing__photo-wrapper">
            <img className="about-landing__photo-wrapper__photo" src={img_landing} alt="" />
          </Col>
        </Row>
      </div>
    </section>

    <section className="about-lens">
      <div id="about-lens" class="anchr"></div>
      <div className="l-container">
        <Row>
          <Col className="about-lens__photo-wrapper">
            <img className="about-lens__photo-wrapper__photo" src={img_lens} alt="" />
          </Col>
          <Col className="about-lens__content-wrapper">
            <h2 className="l-headline about-lens__content-wrapper__subhead">
              EyeMax Mono<sup>&trade;</sup> is specifically designed for dry AMD patients with
              central vision loss<sup>7,8</sup>
            </h2>
            <p className="l-p">EyeMax Mono features:</p>
            <ul className="about-lens__content-wrapper__list">
              <li className="l-li about-lens__content-wrapper__list__item">
                Foldable, injectable, single-piece intraocular lens (IOL)
              </li>
              <li className="l-li about-lens__content-wrapper__list__item">Square-edge design</li>
              <li className="l-li about-lens__content-wrapper__list__item">
                Ultraviolet-absorbing, hydrophobic, soft, yellow acrylic
              </li>
              <li className="l-li about-lens__content-wrapper__list__item">
                Design accounts for chromatic and spherical aberration
              </li>
            </ul>
            <p className="l-p about-lens__content-wrapper__statement">
              EyeMax Mono is a clear choice for your patients with advanced dry AMD
            </p>
            <p className="l-p">Contact us to learn more about EyeMax Mono candidacy</p>
          </Col>
        </Row>
      </div>
    </section>

    <section className="about-lens-tech">
      <div id="about-lens-tech" class="anchr"></div>
      <div className="l-container">
        <Row>
          <Col className="about-lens-tech__content-wrapper">
            <h2 className="l-headline c-teal">
              EyeMax Mono: Unique Optimacular<sup>&trade;</sup> Technology optimises image quality
              at the preferred retinal locus (PRL*)<sup>7,8</sup>
            </h2>
            <ul className="about-lens-tech__content-wrapper__list c-orange">
              <li className="l-li about-lens-tech__content-wrapper__list__item">
                <span className="c-gray">
                  EyeMax Mono is uniquely shaped to deliver an optimised image to all areas of the
                  macula up to 10<sup>&deg;</sup> from the fovea centre<sup>7,8</sup>
                </span>
              </li>
              <li className="l-li about-lens-tech__content-wrapper__list__item">
                <span className="c-gray">A standard monofocal IOL is not designed to do this</span>
              </li>
              <li className="l-li about-lens-tech__content-wrapper__list__item about-lens-tech__content-wrapper__list__item--sub-list">
                <ul className="about-lens-tech__content-wrapper__list__item--sub-list__list c-orange">
                  <li className="l-li about-lens-tech__content-wrapper__list__item--sub-list__list__item">
                    <span className="c-gray">
                      Image quality degrades with increasing eccentricity from the fovea more
                      severely with a standard monofocal IOL than with an ageing crystallinelens
                      <sup>9</sup> or EyeMax Mono<sup>8</sup>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <p className="l-p about-lens-tech__content-wrapper__footnote">
              *PRL may also be known as eccentric fixation.
            </p>
          </Col>
          <Col className="about-lens-tech__info-blurb-wrapper">
            <div className="about-lens-tech__info-blurb-wrapper__info-blurb">
              <span className="about-lens-tech__info-blurb-wrapper__info-blurb__arrow" />
              <p className="l-p about-lens-tech__info-blurb-wrapper__info-blurb__statement">
                To compensate for macular function loss, in some patients fixation may shift to a
                healthier part of the macula and a PRL may naturally form<sup>10</sup>
              </p>
              <ul className="about-lens-tech__info-blurb-wrapper__info-blurb__list c-orange">
                <li className="l-li about-lens-tech__info-blurb-wrapper__info-blurb__list__item">
                  <span className="c-gray">
                    A PRL may naturally form when fixation shifts to a healthier part of the macula,
                    usually at the border of geographic atrophy (GA)<sup>10</sup>
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </section>

    <EyemaxPRLSlider></EyemaxPRLSlider>

    <EyemaxIOLSlider></EyemaxIOLSlider>

    <section className="about-moa-cta">
      <div id="about-moa-cta" class="anchr"></div>
      <div className="l-container">
        <Row>
          <Col className="about-moa-cta__content-wrapper">
            <h3 className="l-cta-subhead">
              EyeMax Mono may help support vision during disease progression, provided there is
              functioning macula tissue remaining within 10<sup>&deg;</sup> of the fovea centre
              <sup>7,8</sup>
            </h3>
            <p className="l-p">
              <Link className="about-moa-cta__content-wrapper__link" to="/hcp/contact">
                Contact us
              </Link>{" "}
              to discuss EyeMax Mono MOA
            </p>
          </Col>
        </Row>
      </div>
    </section>

    <section className="about-data">
      <div id="about-data" class="anchr"></div>
      <div className="l-container">
        <Row>
          <Col className="about-data__content-wrapper">
            <h2 className="l-headline c-teal">An average gain of 18 letters</h2>
            <p className="l-p about-data__content-wrapper__subhead">
              EyeMax Mono has been proven to improve visual acuity<sup>7,8*</sup>
            </p>
            <p className="l-p about-data__content-wrapper__statement">
              In one case series, dry AMD patients (n&#61;244 eyes) achieved mean gains of 3&#43;
              lines post-implantation (ETDRS gain of 18 letters)<sup>7</sup>*<sup>&dagger;</sup>
            </p>
            <p className="l-p about-data__content-wrapper__footnote">
              *Comparing pre- and post-operative assessments.<sup>7,8</sup>
              <br />
              &dagger;Mean follow-up at 3 months. Mean age at surgery 80 years. Baseline LogMAR
              visual acuity &ge; 0.3.<sup>7</sup>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="about-data__chart-wrapper">
            <p className="l-p about-data__chart-wrapper__header">
              Corrected distance visual acuity (CDVA)
            </p>
            <img className="about-data__chart-wrapper__chart" src={img_data_chart_1} alt="" />
            <p className="l-p about-data__chart-wrapper__footer">
              Mean pre-operative CDVA (LogMAR) improved from 1.06 to 0.71 post-operatively (CI -0.39
              to -0.32; p&lt;0.0001). Error bars represent SEM.
            </p>
          </Col>
          <Col className="about-data__chart-wrapper about-data__chart-wrapper--right">
            <p className="l-p about-data__chart-wrapper__header">
              Corrected near visual acuity (CNVA)
            </p>
            <img className="about-data__chart-wrapper__chart" src={img_data_chart_2} alt="" />
            <p className="l-p about-data__chart-wrapper__footer">
              Mean pre-operative CNVA (LogMAR) improved from 1.36 to 0.88 post-operatively (CI –0.53
              to -0.44; p&lt;0.0001). Error bars represent SEM.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="about-data__chart-footnote">
            <p className="l-p about-data__chart-footnote__footnote">
              *SEM&#61;standard error of the mean.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="about-data__content-wrapper about-data__content-wrapper--bottom">
            <p className="l-p about-data__content-wrapper__statement">
              In another study, EyeMax Mono improved reading function in patients with dry AMD in
              (n-8 eyes)<sup>8</sup>
            </p>
            <p className="l-p about-data__content-wrapper__support">
              Mean reading speed improved by 57%<sup>8</sup>
            </p>
            <p className="l-p about-data__content-wrapper__support">
              {" "}
              Reading acuity* and critical print size<sup>&dagger;</sup> also improved following
              EyeMax Mono implantation<sup>8</sup>
            </p>
            <p className="l-p about-data__content-wrapper__footnote">
              *1.07 &plusmn; 0.31 preoperatively to 0.9 &plusmn; 0.37 postoperatively logMAR (n=7).
              <br />
              &dagger;1.04 &plusmn; 0.25 preoperatively to 0.95 &plusmn; 0.27 postoperatively logMAR
              (n&#61;8).
            </p>
          </Col>
        </Row>
      </div>
    </section>

    <section className="about-practice">
      <div id="about-practice" class="anchr"></div>
      <div className="l-container">
        <Row>
          <Col className="about-practice__photo-wrapper">
            <img className="about-practice__photo-wrapper__photo" src={img_lens_no_logo} alt="" />
          </Col>
          <Col className="about-practice__content-wrapper">
            <h2 className="l-headline about-practice__content-wrapper__subhead">
              EyeMax Mono integrates easily into your clinical practice
            </h2>
            <p className="l-p">
              EyeMax Mono can be implanted using standard, well-established techniques<sup>7,8</sup>
            </p>
            <ul className="about-lens__content-wrapper__list">
              <li className="l-li about-practice__content-wrapper__list__item">
                Implantation follows the same surgical principles as insertion of a standard
                monofocal lens following cataract removal<sup>7,8</sup>
              </li>
              <li className="l-li about-practice__content-wrapper__list__item">
                The lens is made of hydrophobic, soft acrylic material and can easily be folded into
                an IOL injector system for implantation into the capsular bag<sup>7,8</sup>*
              </li>
              <li className="l-li about-practice__content-wrapper__list__item">
                A small (2.2–2.6 mm) corneal incision is required for implantation<sup>7,8</sup>
              </li>
              <li className="l-li about-practice__content-wrapper__list__item">
                Post-operative care should be completed according to standard cataract surgery
              </li>
              <li className="l-li about-practice__content-wrapper__list__item">
                As with standard monofocal lenses, EyeMax Mono can be implanted in one or both eyes
              </li>
            </ul>
            <p className="l-p">
              *EyeMax Mono lenses are supplied with a compatible Medicel injector.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="about-practice__video-wrapper">
            <p className="l-p about-practice__video-wrapper__statement">
              See EyeMax Mono implantation
            </p>
            <Player playsInline poster={video_poster} src={video_file}>
              <BigPlayButton position="center" style={{ width: "200px" }} className="round-play" />
            </Player>
          </Col>
        </Row>
      </div>
    </section>

    <section className="about-safety-profile">
      <div id="about-safety-profile" class="anchr"></div>
      <div className="l-container">
        <Row>
          <Col className="about-safety-profile__content-wrapper">
            <p className="l-p about-safety-profile__content-wrapper__statement">
              The safety profile of EyeMax Mono is consistent with that reported for standard
              cataract procedures<sup>7.8,11</sup>
            </p>
            <ul className="about-safety-profile__content-wrapper__list c-orange">
              <li className="l-li about-safety-profile__content-wrapper__list__item">
                <span className="c-gray">
                  Minimal intra-operative complications were reported during EyeMax Mono
                  implantation<sup>7,8,11</sup>
                </span>
              </li>
              <li className="l-li about-safety-profile__content-wrapper__list__item about-safety-profile__content-wrapper__list__item--sub-list">
                <ul className="about-safety-profile__content-wrapper__list__item--sub-list__list c-orange">
                  <li className="l-li about-safety-profile__content-wrapper__list__item--sub-list__list__item">
                    <span className="c-gray">
                      Complications resolved with no sequelae and were consistent with those
                      reported for standard monofocal lens implantation<sup>7</sup>
                    </span>
                  </li>
                </ul>
              </li>
              <li className="l-li about-safety-profile__content-wrapper__list__item">
                <span className="c-gray">
                  To date, few post-operative complications have been reported<sup>7,8,11</sup>
                </span>
              </li>
              <li className="l-li about-safety-profile__content-wrapper__list__item">
                <span className="c-gray">
                  Mean post-operative endothelial cell counts were slightly reduced by 7&#37; (244
                  eyes)<sup>7</sup>
                </span>
              </li>
              <li className="l-li about-safety-profile__content-wrapper__list__item">
                <span className="c-gray">
                  Intraocular pressure is reduced or remains stable following implantation
                  <sup>7,8</sup>
                </span>
              </li>
            </ul>
            <Link className="l-link about-safety-profile__content-wrapper__link" to="/hcp/contact">
              Schedule a visit from an EyeMax Mono representative
            </Link>
          </Col>
        </Row>
      </div>
    </section>

    <Safety className="safety--white" />
    <References className="references--gray" referenceList={data.file.childMarkdownRemark.html} />
  </Layout>
);

export default About;

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
