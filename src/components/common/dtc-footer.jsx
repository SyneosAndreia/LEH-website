import React from "react";
import { Link } from "gatsby";

import Row from "../global/row";
import Col from "../global/col";
import Logo from "../images/logoWhite";
import CELogo from "../../images/logo-ce-white.png";
import "../../styles/footer.scss";

export default class Footer extends React.Component {
  // const Footer = () => (

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.myRef = React.createRef();
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    return (
      <footer className="footer">
        <div className="l-container">
          <Row>
            <Col className="footer__info">
              <Link to="/about">
                <Logo />
              </Link>
              {/* <p className="l-p footer__copy footer__copy--address">
      4 Harley Street<br/>London, W1G 9PB
    </p> */}
              <p className="l-p">
                <Link className="footer__link footer__link--contact" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="footer__link footer__link--contact" to="/terms-of-use">
                  Terms of Use
                </Link>
                <span className="footer__copy">&copy; {new Date().getFullYear()} EYEMAX MONO</span>
              </p>
              <p className="l-p footer__copy footer__copy--contact">
                <Link className="footer__link footer__link--contact" to="/contact">
                  Contact us
                </Link>
              </p>
            </Col>
            <Col className="footer__disclaimer">
              <p className="footer__copy footer__copy--box">
                EyeMax Mono is designed to optimise visual outcomes in patients with dry AMD. Please
                refer to the Instructions For Use. Adverse events should be reported as soon as
                possible to{" "}
                <a className="footer__link" href="mailto:eventreporting@invua.com">
                  eventreporting@invua.com
                </a>
              </p>
              <img className="footer__icon" src={CELogo} alt="" />
              <p className="footer__copy footer__copy--disclaimer">
                CE 2460
                <br />
                <br />
                EyeMax Mono<sup>&trade;</sup> is a registered trademark of{" "}
                <span className="l-no-break">Invua Medtech Limited</span>
                <br />
                Job bag number: INV COM 206 | Date of preparation: October 2019
              </p>
            </Col>
          </Row>
        </div>
      </footer>
    );
  }
}

// export default Footer;
