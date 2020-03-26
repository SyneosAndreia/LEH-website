import React from "react";

import Row from "../global/row";
import Col from "../global/col";

import "../../styles/privacy.scss";

const Privacy = props => (
  <section className={"privacy " + (props.className ? `${props.className}` : "")}>
    <div className="l-container">
      <Row>
        <Col className="privacy__content-wrapper">
          <h1 className="l-headline c-teal">Privacy Policy</h1>
          <p className="l-p">
            We are committed to safeguarding the privacy of our website visitors; this policy sets
            out how we will treat your personal information. Our website uses cookies. We will ask
            you to consent to our use of cookies in accordance with the terms of this policy when
            you first visit our website. / By using our website and agreeing to this policy, you
            consent to our use of cookies in accordance with the terms of this policy.
          </p>
          <p className="l-p privacy__content-wrapper__header">What information do we collect?</p>
          <p className="l-p">
            We may collect, store and use the following kinds of personal information:
          </p>
          <ol className="privacy__content-wrapper__list" type="a">
            <li className="privacy__content-wrapper__list__item">
              information about your computer and about your visits to and use of this website
              (including your IP address, geographical location, browser type and version, operating
              system, referral source, length of visit, page views, website navigation;
            </li>
            <li className="privacy__content-wrapper__list__item">
              information relating to any transactions carried out between you and us on or in
              relation to this website, including information relating to any purchases you make of
              our goods or services;
            </li>
            <li className="privacy__content-wrapper__list__item">
              information that you provide to us for the purpose of registering with us;
            </li>
            <li className="privacy__content-wrapper__list__item">
              information that you provide to us for the purpose of subscribing to our website
              services, email notifications and/or newsletters;
            </li>
            <li className="privacy__content-wrapper__list__item">
              any other information that you choose to send to us;
            </li>
          </ol>
          <p className="l-p">
            Before you disclose to us the personal information of another person, you must obtain
            that person's consent to both the disclosure and the processing of that personal
            information in accordance with the terms of this privacy policy.
          </p>
          <p className="l-p privacy__content-wrapper__header">Cookies</p>
          <p className="l-p">
            A cookie is a file containing an identifier (a string of letters and numbers) that is
            sent by a web server to a web browser and is stored by the browser. The identifier is
            then sent back to the server each time the browser requests a page from the server. This
            enables the web server to identify and track the web browser.
          </p>
          <p className="l-p">
            We may use both "session" cookies and "persistent" cookies on the website. Session
            cookies will be deleted from your computer when you close your browser. Persistent
            cookies will remain stored on your computer until deleted, or until they reach a
            specified expiry date.
          </p>
          <p className="l-p">
            We will use the session cookies to: keep track of you whilst you navigate the website;
            keep track of items in your shopping basket; prevent fraud and increase website
            security. We will use the persistent cookies to: enable our website to recognise you
            when you visit; keep track of your preferences in relation to your use of our website.
          </p>
          <p className="l-p">
            We use Google Analytics to analyse the use of this website. Google Analytics generates
            statistical and other information about website use by means of cookies, which are
            stored on users' computers. The information generated relating to our website is used to
            create reports about the use of the website. Google will store this information.
            Google’s privacy policy is available at:{" "}
            <a
              className="l-link privacy__content-wrapper__link"
              href="http://www.google.com/privacypolicy.html"
            >
              http://www.google.com/privacypolicy.html
            </a>
            .
          </p>
          <p className="l-p">
            We publish Google AdSense interest-based advertisements on our website. These are
            tailored by Google to reflect your interests. To determine your interests, Google will
            track your behaviour on our website and on other websites across the web using the DART
            cookie. You can view, delete or add interest categories associated with your browser
            using Google's Ads Preference Manager, available at:{" "}
            <a
              className="l-link privacy__content-wrapper__link"
              href="http://www.google.com/ads/preferences/"
            >
              http://www.google.com/ads/preferences/
            </a>
            . You can opt out of the AdSense partner network cookie at:{" "}
            <a
              className="l-link privacy__content-wrapper__link"
              href="http://www.google.com/privacy/ads/"
            >
              http://www.google.com/privacy/ads/
            </a>{" "}
            or by using the NAI's (Network Advertising Initiative's) multi-cookie opt-out mechanism
            at:{" "}
            <a
              className="l-link privacy__content-wrapper__link"
              href="http://www.networkadvertising.org/managing/opt_out.asp"
            >
              http://www.networkadvertising.org/managing/opt_out.asp
            </a>
            . However, these opt-out mechanisms use cookies, and if you clear the cookies from your
            browser your opt-out will not be maintained. To ensure that an opt-out is maintained in
            respect of a particular browser, you should use the Google browser plug-in available at:{" "}
            <a
              className="l-link privacy__content-wrapper__link"
              href="http://www.google.com/ads/preferences/plugin"
            >
              http://www.google.com/ads/preferences/plugin
            </a>
            .
          </p>
          <p className="l-p">
            Most browsers allow you to reject all cookies, whilst some browsers allow you to reject
            just third party cookies. For example, in Internet Explorer (version 9) you can refuse
            all cookies by clicking "Tools", "Internet options", "Privacy", and selecting "Block All
            Cookies" using the sliding selector. Blocking all cookies will, however, have a negative
            impact upon the usability of many websites, including this one.
          </p>
          <p className="l-p privacy__content-wrapper__header">Using your personal information</p>
          <p className="l-p">
            Personal information submitted to us via this website will be used for the purposes
            specified in this privacy policy or in relevant parts of the website. We may use your
            personal information to:
          </p>
          <ol className="privacy__content-wrapper__list" type="a">
            <li className="privacy__content-wrapper__list__item">administer the website;</li>
            <li className="privacy__content-wrapper__list__item">
              improve your browsing experience by personalising the website;
            </li>
            <li className="privacy__content-wrapper__list__item">
              enable your use of the services available on the website;
            </li>
            <li className="privacy__content-wrapper__list__item">
              send you goods purchased via the website, and supply to you services purchased via the
              website;
            </li>
            <li className="privacy__content-wrapper__list__item">
              asend statements and invoices to you, and collect payments from you;
            </li>
            <li className="privacy__content-wrapper__list__item">
              send you general (non-marketing) commercial communications;
            </li>
            <li className="privacy__content-wrapper__list__item">
              send you email notifications which you have specifically requested;
            </li>
            <li className="privacy__content-wrapper__list__item">
              send you our newsletter and other marketing communications relating to our business
              which we think may be of interest to you, by post or, where you have specifically
              agreed to this, by email or similar technology (and you can inform us at any time if
              you no longer require marketing communications);
            </li>
            <li className="privacy__content-wrapper__list__item">
              provide third parties with statistical information about our users – but this
              information will not be used to identify any individual user;
            </li>
            <li className="privacy__content-wrapper__list__item">
              deal with enquiries and complaints made by or about you relating to the website;
            </li>
            <li className="privacy__content-wrapper__list__item">
              keep the website secure and prevent fraud;
            </li>
            <li className="privacy__content-wrapper__list__item">
              verify compliance with the terms and conditions governing the use of the website;
            </li>
          </ol>
          <p className="l-p">
            Where you submit personal information for publication on our website, we will publish
            and otherwise use that information in accordance with the licence you grant to us.
          </p>
          <p className="l-p">
            We will not, without your express consent, provide your personal information to any
            third parties for the purpose of direct marketing.
          </p>
          <p className="l-p">
            All our website financial transactions are handled through our payment services
            provider, Sage Pay. You can review the Sage Pay privacy policy at{" "}
            <a
              className="l-link privacy__content-wrapper__link"
              href="https://www.sagepay.co.uk/policies"
            >
              https://www.sagepay.co.uk/policies
            </a>
            . We will share information with Sage Pay only to the extent necessary for the purposes
            of processing payments you make via our website, refunding such payments and dealing
            with complaints and queries relating to such payments and refunds.
          </p>
          <p className="l-p privacy__content-wrapper__header">Disclosures</p>
          <p className="l-p">
            We may disclose your personal information to any of our employees, officers, agents,
            suppliers or subcontractors insofar as reasonably necessary for the purposes set out in
            this privacy policy.
          </p>
          <p className="l-p">
            We may disclose your personal information to any member of our group of companies (this
            means our subsidiaries, our ultimate holding company and all its subsidiaries) insofar
            as reasonably necessary for the purposes set out in this privacy policy.
          </p>
          <p className="l-p">In addition, we may disclose your personal information:</p>
          <ol className="privacy__content-wrapper__list" type="a">
            <li className="privacy__content-wrapper__list__item">
              to the extent that we are required to do so by law;
            </li>
            <li className="privacy__content-wrapper__list__item">
              in connection with any ongoing or prospective legal proceedings;
            </li>
            <li className="privacy__content-wrapper__list__item">
              in order to establish, exercise or defend our legal rights (including providing
              information to others for the purposes of fraud prevention and reducing credit risk);
            </li>
            <li className="privacy__content-wrapper__list__item">
              to the purchaser (or prospective purchaser) of any business or asset that we are (or
              are contemplating) selling; and
            </li>
            <li className="privacy__content-wrapper__list__item">
              to any person who we reasonably believe may apply to a court or other competent
              authority for disclosure of that personal information where, in our reasonable
              opinion, such court or authority would be reasonably likely to order disclosure of
              that personal information.
            </li>
          </ol>
          <p className="l-p">
            Except as provided in this privacy policy, we will not provide your information to third
            parties.
          </p>
          <p className="l-p privacy__content-wrapper__header">International data transfers</p>
          <p className="l-p">
            Information that we collect may be stored and processed in and transferred between any
            of the countries in which we operate in order to enable us to use the information in
            accordance with this privacy policy.
          </p>
          <p className="l-p">
            Information which you provide may be transferred to countries (including the United
            States, which do not have data protection laws equivalent to those in force in the
            European Economic Area.
          </p>
          <p className="l-p">
            In addition, personal information that you submit for publication on the website will be
            published on the internet and may be available, via the internet, around the world. We
            cannot prevent the use or misuse of such information by others.
          </p>
          <p className="l-p">You expressly agree to such transfers of personal information.</p>
          <p className="l-p privacy__content-wrapper__header">
            Security of your personal information
          </p>
          <p className="l-p">
            We will take reasonable technical and organisational precautions to prevent the loss,
            misuse or alteration of your personal information.
          </p>
          <p className="l-p">
            We will store all the personal information you provide on our secure (password- and
            firewall-protected) servers.
          </p>
          <p className="l-p">
            All electronic transactions entered into via the website will be protected by encryption
            technology.
          </p>
          <p className="l-p">
            You acknowledge that the transmission of information over the internet is inherently
            insecure, and we cannot guarantee the security of data sent over the internet.
          </p>
          <p className="l-p">
            You are responsible for keeping your password and other login details confidential. We
            will not ask you for your password (except when you log in to the website).
          </p>
          <p className="l-p privacy__content-wrapper__header">Policy amendments</p>
          <p className="l-p">
            We may update this privacy policy from time to time by posting a new version on our
            website. You should check this page occasionally to ensure you are happy with any
            changes.
          </p>
          <p className="l-p">We may also notify you of changes to our privacy policy by email.</p>
          <p className="l-p privacy__content-wrapper__header">Your rights</p>
          <p className="l-p">
            You may instruct us to provide you with any personal information we hold about you.
            Provision of such information will be subject to:
          </p>
          <ol className="privacy__content-wrapper__list" type="a">
            <li className="privacy__content-wrapper__list__item">
              the payment of a fee (currently fixed at GBP 10); and
            </li>
            <li className="privacy__content-wrapper__list__item">
              the supply of appropriate evidence of your identity (for this purpose, we will usually
              accept a photocopy of your passport certified by a solicitor or bank plus an original
              copy of a utility bill showing your current address).
            </li>
          </ol>
          <p className="l-p">
            We may withhold such personal information to the extent permitted by law.
          </p>
          <p className="l-p">
            You may instruct us not to process your personal information for marketing purposes, by
            sending an email to us. In practice, you will usually either expressly agree in advance
            to our use of your personal information for marketing purposes, or we will provide you
            with an opportunity to opt out of the use of your personal information for marketing
            purposes.
          </p>
          <p className="l-p privacy__content-wrapper__header">Third party websites</p>
          <p className="l-p">
            The website contains links to other websites. We are not responsible for the privacy
            policies or practices of third party websites.
          </p>
          <p className="l-p privacy__content-wrapper__header">Updating information</p>
          <p className="l-p">
            Please let us know if the personal information which we hold about you needs to be
            corrected or updated.
          </p>
          <p className="l-p privacy__content-wrapper__header">Contact</p>
          <p className="l-p">
            If you have any questions about this privacy policy or our treatment of your personal
            information, please write to us by email to{" "}
            <a className="l-link privacy__content-wrapper__link" href="mailto:info@invua">
              info@invua.com
            </a>
          </p>
        </Col>
      </Row>
    </div>
  </section>
);

export default Privacy;
