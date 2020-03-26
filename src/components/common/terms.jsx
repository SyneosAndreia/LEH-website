import React from "react";

import Row from "../global/row";
import Col from "../global/col";

import "../../styles/privacy.scss";

const Terms = props => (
  <section className={"privacy " + (props.className ? `${props.className}` : "")}>
    <div className="l-container">
      <Row>
        <Col className="privacy__content-wrapper">
          <h1 className="l-headline c-teal">Terms of Use</h1>
          <p className="l-p privacy__content-wrapper__header">Introduction</p>
          <p className="l-p">
            These terms of use govern your use of our website; by using our website, you accept
            these terms of use in full. If you disagree with these terms of use or any part of these
            terms of use, you must not use our website.
          </p>
          <p className="l-p">
            If you register with our website we will ask you to expressly agree to these terms of
            use.
          </p>
          <p className="l-p">
            You must be at least 18 years of age to use our website. By using our website and by
            agreeing to these terms of use, you warrant and represent that you are at least 18 years
            of age.
          </p>
          <p className="l-p">
            Our website uses cookies. By using our website and agreeing to these terms of use, you
            consent to our use of cookies in accordance with the terms of our privacy policy /
            cookies policy.
          </p>
          <p className="l-p privacy__content-wrapper__header">Licence to use website</p>
          <p className="l-p">
            Unless otherwise stated, we or our licensors own the intellectual property rights in the
            website and material on the website. Subject to the licence below, all these
            intellectual property rights are reserved.
          </p>
          <p className="l-p">
            You may view, download for caching purposes only, and print pages from the website for
            your own personal use, subject to the restrictions set out below and elsewhere in these
            terms of use.
          </p>
          <p className="l-p">You must not:</p>
          <ol className="privacy__content-wrapper__list" type="a">
            <li className="privacy__content-wrapper__list__item">
              republish material from this website (including republication on another website);
            </li>
            <li className="privacy__content-wrapper__list__item">
              sell, rent or sub-license material from the website;
            </li>
            <li className="privacy__content-wrapper__list__item">
              show any material from the website in public;
            </li>
            <li className="privacy__content-wrapper__list__item">
              reproduce, duplicate, copy or otherwise exploit material on our website for a
              commercial purpose;
            </li>
            <li className="privacy__content-wrapper__list__item">
              edit or otherwise modify any material on the website; or
            </li>
            <li className="privacy__content-wrapper__list__item">
              redistribute material from this website [except for content specifically and expressly
              made available for redistribution (such as our newsletter).
            </li>
          </ol>
          <p className="l-p">
            Where content is specifically made available for redistribution, it may only be
            redistributed within your organisation.
          </p>
          <p className="l-p privacy__content-wrapper__header">Acceptable use</p>
          <p className="l-p">
            You must not use our website in any way that causes, or may cause, damage to the website
            or impairment of the availability or accessibility of the website; or in any way which
            is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful,
            illegal, fraudulent or harmful purpose or activity.
          </p>
          <p className="l-p">
            You must not use our website to copy, store, host, transmit, send, use, publish or
            distribute any material which consists of (or is linked to) any spyware, computer virus,
            Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.
          </p>
          <p className="l-p">
            You must not conduct any systematic or automated data collection activities (including
            without limitation scraping, data mining, data extraction and data harvesting) on or in
            relation to our website without our express written consent.
          </p>
          <p className="l-p privacy__content-wrapper__header">Products</p>
          <p className="l-p">
            The advertising of products on our website constitutes an “invitation to treat” – not a
            contractual offer.
          </p>
          <p className="l-p">Prices stated on our website may be stated incorrectly.</p>
          <p className="l-p">
            The purchase of products via our website will be subject to our terms of sale.
          </p>
          <p className="l-p">
            Each time you make a purchase on our website you will be deemed to have accepted our
            terms of sale.
          </p>
          <p className="l-p privacy__content-wrapper__header">Product reviews</p>
          <p className="l-p">
            In these terms of use, "your reviews" means material (including without limitation text,
            images, audio material, video material and audio-visual material) that you submit to us
            for publication on our website whether as a product review or otherwise.
          </p>
          <p className="l-p">
            You grant to us a worldwide, irrevocable, non-exclusive, royalty-free licence to use,
            reproduce, adapt, publish, translate and distribute your reviews in any existing or
            future media. You also grant to us the right to sub-license these rights, and the right
            to bring an action for infringement of these rights.
          </p>
          <p className="l-p">
            You warrant and represent that your reviews will comply with these terms of use.
          </p>
          <p className="l-p">
            Your reviews must not be illegal or unlawful, must not infringe any third party’s legal
            rights, and must not be capable of giving rise to legal action whether against you or us
            or a third party (in each case under any applicable law and in any jurisdiction).
          </p>
          <p className="l-p">Your reviews (and their publication on our website) must not:</p>
          <ol className="privacy__content-wrapper__list" type="a">
            <li className="privacy__content-wrapper__list__item">
              be libellous or maliciously false;
            </li>
            <li className="privacy__content-wrapper__list__item">be obscene or indecent;</li>
            <li className="privacy__content-wrapper__list__item">
              infringe any copyright, moral right, database right, trade mark right, design right,
              right in passing off, or other intellectual property right;
            </li>
            <li className="privacy__content-wrapper__list__item">
              infringe any right of confidence, right of privacy, or right under data protection
              legislation;
            </li>
            <li className="privacy__content-wrapper__list__item">
              constitute negligent advice or contain any negligent statement;
            </li>
            <li className="privacy__content-wrapper__list__item">
              constitute an incitement to commit a crime;
            </li>
            <li className="privacy__content-wrapper__list__item">
              be in contempt of any court, or in breach of any court order;
            </li>
            <li className="privacy__content-wrapper__list__item">
              be in breach of racial or religious hatred or discrimination legislation;
            </li>
            <li className="privacy__content-wrapper__list__item">be blasphemous;</li>
            <li className="privacy__content-wrapper__list__item">
              be in breach of official secrets legislation;
            </li>
            <li className="privacy__content-wrapper__list__item">
              be in breach of any contractual obligation owed to any person;
            </li>
            <li className="privacy__content-wrapper__list__item">
              depict violence [in an explicit, graphic or gratuitous manner;
            </li>
            <li className="privacy__content-wrapper__list__item">
              be pornographic or sexually explicit;
            </li>
            <li className="privacy__content-wrapper__list__item">
              be untrue, false, inaccurate or misleading;
            </li>
            <li className="privacy__content-wrapper__list__item">
              consist of or contain any instructions, advice or other information which may be acted
              upon and could, if acted upon, cause illness, injury or death, or any other loss or
              damage;
            </li>
            <li className="privacy__content-wrapper__list__item">constitute spam;</li>
            <li className="privacy__content-wrapper__list__item">
              be offensive, deceptive, threatening, abusive, harassing, or menacing, hateful,
              discriminatory or inflammatory; or
            </li>
            <li className="privacy__content-wrapper__list__item">
              cause annoyance, inconvenience or needless anxiety to any person.
            </li>
          </ol>
          <p className="l-p">
            Your reviews must be appropriate, civil, tasteful and accord with generally accepted
            standards of etiquette and behaviour on the internet.
          </p>
          <p className="l-p">
            You must not use any review to link to any website or web page consisting of or
            containing material that would, were it posted on our website, breach the provisions of
            these terms of use.
          </p>
          <p className="l-p">
            You must not submit any reviews to the website that are or have ever been the subject of
            any threatened or actual legal proceedings or other similar complaint.
          </p>
          <p className="l-p">
            We reserve the right to edit or remove any reviews submitted to our website, or stored
            on our servers, or hosted or published upon our website.
          </p>
          <p className="l-p">
            Notwithstanding our rights under these terms of use in relation to your reviews, we do
            not undertake to monitor the submission of reviews to, or the publication of reviews on,
            our website.
          </p>
          <p className="l-p privacy__content-wrapper__header">Limited warranties</p>
          <p className="l-p">
            Whilst we endeavour to ensure that the information on this website is correct, we do not
            warrant its completeness or accuracy; nor do we commit to ensuring that the website
            remains available or that the material on the website is kept up-to-date.
          </p>
          <p className="l-p">
            To the maximum extent permitted by applicable law we exclude all representations,
            warranties and conditions relating to this website and the use of this website
            (including, without limitation, any warranties implied by law of satisfactory quality,
            fitness for purpose and/or the use of reasonable care and skill).
          </p>
          <p className="l-p privacy__content-wrapper__header">
            Limitations and exclusions of liability
          </p>
          <p className="l-p">
            Nothing in these terms of use will: (a) limit or exclude our or your liability for death
            or personal injury resulting from negligence; (b) limit or exclude our or your liability
            for fraud or fraudulent misrepresentation; (c) limit any of our or your liabilities in
            any way that is not permitted under applicable law; or (d) exclude any of our or your
            liabilities that may not be excluded under applicable law. If you are a consumer, any
            statutory rights that you have, that cannot be excluded or limited, will not be affected
            by these terms of use.
          </p>
          <p className="l-p">
            The limitations and exclusions of liability set out in this Section and elsewhere in
            these terms of use: (a) are subject to the preceding paragraph; and (b) govern all
            liabilities arising under the terms of use or in relation to the subject matter of the
            terms of use, including liabilities arising in contract, in tort (including negligence)
            and for breach of statutory duty.
          </p>
          <p className="l-p">
            To the extent that the website and the information and services on the website are
            provided free-of-charge, we will not be liable for any loss or damage of any nature.
          </p>
          <p className="l-p">
            We will not be liable to you in respect of any losses arising out of any event or events
            beyond our reasonable control.
          </p>
          <p className="l-p">
            We will not be liable to you in respect of any business losses, including (without
            limitation) loss of or damage to profits, income, revenue, use, production, anticipated
            savings, business, contracts, commercial opportunities or goodwill.
          </p>
          <p className="l-p">
            We will not be liable to you in respect of any loss or corruption of any data, database
            or software.
          </p>
          <p className="l-p">
            We will not be liable to you in respect of any special, indirect or consequential loss
            or damage.
          </p>
          <p className="l-p privacy__content-wrapper__header">Indemnity</p>
          <p className="l-p">
            You hereby indemnify us and undertake to keep us indemnified against any losses,
            damages, costs, liabilities and expenses (including without limitation legal expenses
            and any amounts paid by us to a third party in settlement of a claim or dispute on the
            advice of our legal advisers) incurred or suffered by us arising out of any breach by
            you of any provision of these terms of use, or arising out of any claim that you have
            breached any provision of these terms of use.
          </p>
          <p className="l-p privacy__content-wrapper__header">Breaches of these terms of use</p>
          <p className="l-p">
            Without prejudice to our other rights under these terms of use, if you breach these
            terms of use in any way, or if we reasonably suspect that you have breached these terms
            of use in any way, we may:
          </p>
          <ol className="privacy__content-wrapper__list" type="a">
            <li className="privacy__content-wrapper__list__item">
              send you one or more formal warnings;
            </li>
            <li className="privacy__content-wrapper__list__item">
              temporarily suspend your access to the website;
            </li>
            <li className="privacy__content-wrapper__list__item">
              permanently prohibit you from accessing the website;
            </li>
            <li className="privacy__content-wrapper__list__item">
              block computers using your IP address from accessing the website;
            </li>
            <li className="privacy__content-wrapper__list__item">
              contact your internet services provider and request that they block your access to the
              website;
            </li>
            <li className="privacy__content-wrapper__list__item">
              bring court proceedings against you for breach of contract or otherwise; and/or
            </li>
            <li className="privacy__content-wrapper__list__item">
              suspend and/or delete your account with the website.
            </li>
          </ol>
          <p className="l-p privacy__content-wrapper__header">Variation</p>
          <p className="l-p">
            We may revise these terms of use from time-to-time. Revised terms of use will apply to
            the use of our website from the date of the publication of the revised terms of use on
            our website. Please check this page regularly to ensure you are familiar with the
            current version.
          </p>
          <p className="l-p privacy__content-wrapper__header">Assignment</p>
          <p className="l-p">
            We may transfer, sub-contract or otherwise deal with our rights and/or obligations under
            these terms of use without notifying you or obtaining your consent.
          </p>
          <p className="l-p">
            You may not transfer, sub-contract or otherwise deal with your rights and/or obligations
            under these terms of use.
          </p>
          <p className="l-p privacy__content-wrapper__header">Severability</p>
          <p className="l-p">
            If a provision of these terms of use is determined by any court or other competent
            authority to be unlawful and/or unenforceable, the other provisions will continue in
            effect. If any unlawful and/or unenforceable provision would be lawful or enforceable if
            part of it were deleted, that part will be deemed to be deleted, and the rest of the
            provision will continue in effect.
          </p>
          <p className="l-p privacy__content-wrapper__header">Exclusion of third party rights</p>
          <p className="l-p">
            These terms of use are for the benefit of you and us, and are not intended to benefit
            any third party or be enforceable by any third party. The exercise of our and your
            rights in relation to these terms of use is not subject to the consent of any third
            party.
          </p>
          <p className="l-p privacy__content-wrapper__header">Entire agreement</p>
          <p className="l-p">
            These terms of use, together with our privacy policy and terms of sale constitute the
            entire agreement between you and us in relation to your use of our website, and
            supersede all previous agreements in respect of your use of this website.
          </p>
          <p className="l-p privacy__content-wrapper__header">Law and jurisdiction</p>
          <p className="l-p">
            These terms of use will be governed by and construed in accordance with English law, and
            any disputes relating to these terms of use will be subject to the non-exclusive
            jurisdiction of the courts of England and Wales.
          </p>
          <p className="l-p privacy__content-wrapper__header">Registrations and authorisations </p>
          <p className="l-p">Our VAT number is 143 0993 16.</p>
          <p className="l-p privacy__content-wrapper__header">Our details</p>
          <p className="l-p">The full name of our company is Invua Medtech Ltd.</p>
          <p className="l-p">
            We are registered in England &amp; Wales under registration number 07601019.
          </p>
          <p className="l-p">
            Our registered address is Park House, 116 Park Street, London W1K 6SS.
          </p>
          <p className="l-p">
            You can contact us by email to{" "}
            <a className="l-link privacy__content-wrapper__link" href="mailto:info@invua">
              info@invua.com
            </a>
          </p>
        </Col>
      </Row>
    </div>
  </section>
);

export default Terms;
