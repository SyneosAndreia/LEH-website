import React from 'react';
import axios from 'axios';

import Row from '../global/row';
import Col from '../global/col';

import '../../styles/contact-form.scss';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    // SET BEGINNING STATE
    this.state = { 
      // FORM INPUTS
      name: "",
      email: "",
      message: "",
      // FORM VALIDATION
      formErrors: {name: '', email: '', message: ''},
      nameValid: false,
      emailValid: false,
      messageValid: false,
      formValid: true,
      // MAIL SEND VALIDATION
      mailSent: false,
      error: null
    };
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    
    this.setState({
      [name]: value },
      () => { this.validateField(name, value)
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    const API_PATH = 'https://' + window.location.host + '/contact-send.php';

    this.validateField('name', this.state.name);
    this.validateField('email', this.state.email);
    this.validateField('message', this.state.message);
    
    if(this.state.formValid) {
      axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
       data: this.state
      })
      .then(result=>{ this.setState({
              mailSent: result.data.sent
            });
      })
      .catch(error=>this.setState({ 
              error: error.message
            }));   
    }
  }
  
  validateField(fieldName, value) {
    console.log(fieldName + " - " + value );
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let messageValid = this.state.messageValid;
  
    switch(fieldName) {
      case 'name':
        nameValid = value.length > 0;
        fieldValidationErrors.name = nameValid ? '' : 'Name cannot be empty';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Email is invalid';
        break;
      case 'message':
        messageValid = value.length > 0;
        fieldValidationErrors.message = messageValid ? '': 'Message cannot be empty';
        break;
      // default:
      //   break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      nameValid: nameValid,
      emailValid: emailValid,
      messageValid: messageValid
    }, this.validateForm);
  }
  
  validateForm() {
    console.log('== ' + this.state.nameValid);
    console.log('== ' + this.state.emailValid);
    console.log('== ' + this.state.messageValid);
    this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.messageValid});
    console.log('==dddddd ' + this.state.nameValid && this.state.emailValid && this.state.messageValid);
  }


  render(){
    return(
        <section className="contact-form">
        <div className="l-container">
          <div className={this.state.mailSent ? "contact-form__submit-message contact-form__submit-message--on" : "contact-form__submit-message"}>
            <h2>Thank you. We have received your enquiry.</h2>
          </div>
          <form action="#" className={this.state.mailSent ? "contact-form__form contact-form__form--off" : "contact-form__form"}>
            <Row>
              <Col className="contact-form__single">
                <input 
                  className={(!this.state.formErrors.name || this.state.nameValid) ? "contact-form__input" : "contact-form__input contact-form__input--invalid"}
                  name="name" 
                  id="name" 
                  type="text" 
                  placeholder="YOUR NAME"
                  value={this.state.name}
                  onChange={this.handleInputChange} 
                />
              </Col>
              <Col className="contact-form__single">
                <input 
                  className={(!this.state.formErrors.email || this.state.emailValid)? "contact-form__input" : "contact-form__input contact-form__input--invalid"}
                  name="email" 
                  id="email" 
                  type="email" 
                  placeholder="YOUR EMAIL"
                  value={this.state.email}
                  onChange={this.handleInputChange} 
                />
              </Col>
            </Row>
            <Row>
              <Col className="contact-form__double">
                <textarea 
                  className={(!this.state.formErrors.message || this.state.messageValid) ? "contact-form__textarea" : "contact-form__textarea contact-form__textarea--invalid"}
                  name="message" 
                  id="message" 
                  cols="30" 
                  rows="10" 
                  placeholder="TELL US MORE"
                  value={this.state.message}
                  onChange={this.handleInputChange} 
                />
              </Col>
            </Row>
            <Row>
              <Col className="contact-form__single">
                <input className="contact-form__button" type="button" value="Send" onClick={e => this.handleSubmit(e)}  />
              </Col>
              <Col className="contact-form__single contact-form__single--error">

              {(this.state.formErrors.name!="") || (this.state.formErrors.email!="") || (this.state.formErrors.message!="") ? 

                <div className={this.state.formValid ? "contact-form__form__errors" : "contact-form__form__errors contact-form__form__errors--on"}>
                  <span className="contact-form__form__errors__arrow" />
                  <ul className="contact-form__form__errors__list c-orange">
                    {this.state.formErrors.name ? <li><span className="c-gray">{this.state.formErrors.name}</span></li> : ""}
                    {this.state.formErrors.email ? <li><span className="c-gray">{this.state.formErrors.email}</span></li> : ""}
                    {this.state.formErrors.message ? <li><span className="c-gray">{this.state.formErrors.message}</span></li> : ""}
                  </ul>
                </div>
                : "" }

              </Col>
            </Row>
          </form>
        </div>
      </section>
    );
  }
}

export default ContactForm;