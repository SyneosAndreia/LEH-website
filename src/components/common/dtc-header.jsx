import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import Modal from 'react-modal';
// import Cookie from '../global/cookie';
import { navigate } from 'gatsby';


import { slide as Menu } from 'react-burger-menu';
import Row from '../global/row';
import Col from '../global/col';
import '../../styles/header.scss';

// Import Images
import img_logo from '../../images/logo.png';

// const Navi = require("@reach/router")
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    // background            : '#f79433',
    background            : 'transparent',
    border                : 'none',
  }
};


export default class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
      modalIsOpen: false
    }
    this.myRef = React.createRef();

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeModalAndNavigate = this.closeModalAndNavigate.bind(this);
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

 
  openModal(e) {
    e.preventDefault();
    this.setState({modalIsOpen: true});
  }
  
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
    this.closeMenu()
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
  closeModalAndNavigate(e) {
      this.setState({modalIsOpen: false});
      const name = 'isHCP';
      const value = 'true';
      const days = 1;
      const  expires = "";
      if (this.days) {
        const dater = new Date();
        dater.setTime(dater.getTime() + (days*24*60*60*1000));
      }
      document.cookie = name + "=" + (value || "")  + expires + "; path=/";
      navigate("/hcp/");
  }
  
  
  getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
  }

  render() {
    return (
    <div id="header-wrapper" className="header-wrapper">
      <header className="l-container header">

        <Row>
          <Col className="header__logo-wrapper">
          
            <GatsbyLink to="/about">
              <img className="header__logo-wrapper__logo" src={img_logo} alt="" />
            </GatsbyLink>
          </Col>
          <Col className="header__links-wrapper d-none d-lg-flex">
            <GatsbyLink className="header__link  header__link--active" partiallyActive={false} to="/about">About EyeMax Mono</GatsbyLink>
            <GatsbyLink className="header__link" partiallyActive={false} to="/about/#how-it-works">How it Works</GatsbyLink>
            <GatsbyLink className="header__link" partiallyActive={false} to="/find-a-clinic">Find a clinic</GatsbyLink>
            <GatsbyLink className="header__link" partiallyActive={false} to="/contact">Contact Us</GatsbyLink>
            <GatsbyLink className="header__link-site header__link-site--patient" onClick={this.openModal}>Visit Healthcare<br />Professional Site</GatsbyLink>
          </Col>
          <Col className="header__mobile-menu-wrapper d-block d-lg-none">
            <Menu disableAutoFocus right noOverlay isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
            <GatsbyLink activeClassName="header__link--active" onClick={() => this.closeMenu()} partiallyActive={false} to="/about">About EyeMax Mono</GatsbyLink>
            <GatsbyLink activeClassName="header__link--active" onClick={() => this.closeMenu()} partiallyActive={false} to="/about/#how-it-works">How it Works</GatsbyLink>
            <GatsbyLink activeClassName="header__link--active" onClick={() => this.closeMenu()} partiallyActive={false} to="/find-a-clinic">Find a clinic</GatsbyLink>            
            <GatsbyLink activeClassName="header__link--active" onClick={() => this.closeMenu()} partiallyActive={false} to="/contact">Contact Us</GatsbyLink>
            <GatsbyLink activeClassName="header__link--active" partiallyActive={false} onClick={this.openModal}>Visit Healthcare<br />Professional Site</GatsbyLink>
            </Menu>
          </Col>
        </Row>
      </header>

      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
        >
        <div className="modal-wrap">
          <div><p>By visiting this site you agree you are a Healthcare Professional (HCP) and agree to the data collection policies stated in the website Terms and Conditions.</p></div>
          <form>
          <div class="l-button l-button--white-orange splash-btn" data-type="ok" onClick={this.closeModalAndNavigate}>OK</div>
          <div class="l-button l-button--white-orange splash-btn" data-type="cancel" onClick={this.closeModal}>Cancel</div>
          </form>
        </div>
      </Modal>

      
    </div>
    
    )
  };

}

// export default Header;
