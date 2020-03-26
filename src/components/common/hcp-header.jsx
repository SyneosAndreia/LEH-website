import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { navigate } from 'gatsby';

import { slide as Menu } from 'react-burger-menu';
import Row from '../global/row';
import Col from '../global/col';

// Import Images

import img_logo from '../../images/logo.png';

export default class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
    this.myRef = React.createRef();
  }

    // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }



render() {
  return (
  <div className="header-wrapper">
    <header className="l-container header">
      <Row>
        <Col className="header__logo-wrapper">
          <GatsbyLink to="/hcp">
            <img className="header__logo-wrapper__logo" src={img_logo} alt="" />
          </GatsbyLink>
        </Col>
        <Col className="header__links-wrapper d-none d-lg-flex">
          <GatsbyLink className="header__link" activeClassName="header__link--active" to="/hcp">HCP Home</GatsbyLink>
          <GatsbyLink className="header__link" activeClassName="header__link--active" partiallyActive={false} to="/hcp/about">About EyeMax Mono</GatsbyLink>
          <GatsbyLink className="header__link" activeClassName="header__link--active" partiallyActive={false} to="/hcp/about-invua">About Invua</GatsbyLink>
          <GatsbyLink className="header__link" activeClassName="header__link--active" partiallyActive={false} to="/hcp/contact">Contact Us</GatsbyLink>
          <GatsbyLink className="header__link" activeClassName="header__link--active" partiallyActive={false} to="/hcp/register">Register</GatsbyLink>
          <GatsbyLink className="header__link-site header__link-site--patient" partiallyActive={false} to="/">Visit Patient Site</GatsbyLink>
          {/* <GatsbyLink className="header__link-site header__link-site--patient" partiallyActive={false} onClick={() => this.navigate("/about/"), { replace: false }}>Visit Patient Site</GatsbyLink> */}
        </Col>
        <Col className="header__mobile-menu-wrapper d-block d-lg-none">
        <Menu disableAutoFocus right noOverlay isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
            <GatsbyLink to="/hcp">HCP Home</GatsbyLink>
            <GatsbyLink activeClassName="header__link--active" onClick={() => this.closeMenu()} to="/hcp/about">About EyeMax Mono</GatsbyLink>
            <GatsbyLink activeClassName="header__link--active" onClick={() => this.closeMenu()} to="/hcp/about-invua">About Invua</GatsbyLink>
            <GatsbyLink activeClassName="header__link--active" onClick={() => this.closeMenu()} to="/hcp/contact">Contact Us</GatsbyLink>
            <GatsbyLink activeClassName="header__link--active" onClick={() => this.closeMenu()} to="/about">Visit Patient Site</GatsbyLink>
          </Menu>
        </Col>
      </Row>
      </header>
    </div>
    )
  };

}

// export default Header;