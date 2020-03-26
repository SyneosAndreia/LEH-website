import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';

import Row from '../global/row';
import Col from '../global/col';

import '../../styles/register-form.scss';

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
    zIndex                : 100,
    maxWidth              : "70%",
    paddig                : "0"
  }
};

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    // SET BEGINNING STATE
    this.state = { 
      modalIsOpen: false,
      // FORM INPUTS
      name: "",
      jobTitle: "",
      clinicName: "",
      streetName: "",
      postCode: "",
      email: "",
      telephone: "",
      webAddress: "",
      // FORM VALIDATION
      formErrors: {name: '', jobTitle: '', clinicName: '', streetName: '', postCode: '', email: '', telephone: '', webAddress: ''},
      nameValid: false,
      jobTitleValid: false,
      clinicNameValid: false,
      streetNameValid: false,
      postCodeValid: false,
      emailValid: false,
      telephoneValid: false,      
      webAddressValid: false,
      formValid: true,
      // MAIL SEND VALIDATION
      mailSent: false,
      error: null
    }

    this.openModal = this.openModal.bind(this);
    this.closeModalAndNavigate = this.closeModalAndNavigate.bind(this);
  }
  

  openModal(e) {
    e.preventDefault();
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // prevet parent scrolling
    document.body.style.overflow = 'hidden'
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
    // this.closeMenu()
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    document.body.style.overflow = 'auto'
  }
  
  closeModalAndNavigate(e) {
      this.setState({modalIsOpen: false});
      document.body.style.overflow = 'auto'
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
    event.preventDefault();

    this.validateField('name', this.state.name);
    this.validateField('jobTitle', this.state.jobTitle);
    this.validateField('clinicName', this.state.clinicName);
    this.validateField('streetName', this.state.streetName);
    this.validateField('postCode', this.state.postCode);
    this.validateField('email', this.state.email);
    this.validateField('telephone', this.state.telephone);
    this.validateField('webAddress', this.state.webAddress);

    // if(this.state.formValid) {
    //   this.setState({modalIsOpen: true});
    // }

  }

  submitForm = event => {
    const API_PATH = 'https://' + window.location.host + '/contact-send.php';

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



  validateField(fieldName, value) {
    console.log(fieldName + " - " + value );
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let jobTitleValid = this.state.jobTitleValid;
    let clinicNameValid = this.state.clinicNameValid;
    let streetNameValid = this.state.streetNameValid;
    let postCodeValid = this.state.postCodeValid;
    let emailValid = this.state.emailValid;
    let telephoneValid = this.state.telephoneValid;
    let webAddressValid = this.state.webAddressValid;

  
    switch(fieldName) {
      case 'name':
        nameValid = value.length > 0;
        fieldValidationErrors.name = nameValid ? '' : 'Name cannot be empty';
        break;
      case 'jobTitle':
        jobTitleValid = value.length > 0;
        fieldValidationErrors.jobTitle = jobTitleValid ? '' : 'Job Title cannot be empty';
      break;
      case 'clinicName':
        clinicNameValid = value.length > 0;
        fieldValidationErrors.clinicName = clinicNameValid ? '' : 'Clinic/Organization Name cannot be empty';
      break;
      case 'streetName':
        streetNameValid = value.length > 0;
        fieldValidationErrors.streetName = streetNameValid ? '' : 'Street Name cannot be empty';
      break;
      case 'postCode':
        postCodeValid = value.length > 0;
        fieldValidationErrors.postCode = postCodeValid ? '' : 'Postal Code cannot be empty';
      break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Email is invalid';
        break;
      case 'telephone':
        telephoneValid = value.length > 0;
        fieldValidationErrors.telephone = telephoneValid ? '': 'Telephone cannot be empty';
      break;
      case 'webAddress':
        webAddressValid = value.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
        fieldValidationErrors.webAddress = webAddressValid ? '': 'Web address is invalid';
      break;
      default:
      break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      nameValid: nameValid,
      jobTitleValid: jobTitleValid,
      clinicNameValid: clinicNameValid,
      streetNameValid: streetNameValid,
      postCodeValid: postCodeValid,
      emailValid: emailValid,
      telephoneValid: telephoneValid,
      webAddressValid: webAddressValid,
    }, this.validateForm);

  }
  
  validateForm() {
    this.setState({formValid: 
      this.state.nameValid && 
      this.state.jobTitleValid && 
      this.state.clinicNameValid && 
      this.state.streetNameValid && 
      this.state.postCodeValid && 
      this.state.emailValid && 
      this.state.telephoneValid && 
      this.state.webAddressValid});
  }


  render(){
    return(
      <div>
      <section className="register-form">
        <div className="l-container">
          <form action="#" className="" onSubmit={this.addItem}>
            <Row>
              <Col className="register-form__single">
                <input 
                  className="register-form__input"
                  name="name" 
                  id="name" 
                  type="text" 
                  placeholder="NAME"
                  value={this.state.name}
                  onChange={this.handleInputChange} 
                />
              </Col>
              <Col className="register-form__single">
                <input 
                  className="register-form__input"
                  name="jobTitle" 
                  id="jobTitle" 
                  type="text" 
                  placeholder="JOB TITLE"
                  value={this.state.jobTitle}
                  onChange={this.handleInputChange} 
                />
              </Col>
              <Col className="register-form__single">
                <input 
                  className="register-form__input"
                  name="clinicName" 
                  id="clinicName" 
                  type="text" 
                  placeholder="CLINIC/ORGANIZATION NAME"
                  value={this.state.clinicName}
                  onChange={this.handleInputChange} 
                />
              </Col>
              <Col className="register-form__single">
                <input 
                  className="register-form__input"
                  name="streetName" 
                  id="streetName" 
                  type="text" 
                  placeholder="STREET NAME"
                  value={this.state.address}
                  onChange={this.handleInputChange} 
                />
              </Col>
              <Col className="register-form__single">
                <input
                  className="register-form__input" 
                  name="postCode" 
                  id="postCode" 
                  type="text" 
                  placeholder="POSTAL CODE"
                  value={this.state.postCode}
                  onChange={this.handleInputChange} 
                />
              </Col>
              <Col className="register-form__single">
                <input 
                  className="register-form__input"
                  name="email" 
                  id="email" 
                  type="email" 
                  placeholder="YOUR EMAIL"
                  value={this.state.email}
                  onChange={this.handleInputChange} 
                />
              </Col>
              <Col className="register-form__single">
                <input 
                  className="register-form__input"
                  name="telephone" 
                  id="telephone" 
                  type="tel" 
                  placeholder="TELEPHONE"
                  value={this.state.phone}
                  onChange={this.handleInputChange} 
                />
              </Col>
              <Col className="register-form__single">
                <input 
                  className="register-form__input"
                  name="webAddress" 
                  id="webAddress" 
                  type="url" 
                  placeholder="WEB ADDRESS"
                  value={this.state.phone}
                  onChange={this.handleInputChange} 
                />
              </Col>
            </Row>
            <Row>
              <Col className="register-form__single">
                <input className="register-form__button" type="button" value="Register" onClick={this.openModal}  />
              </Col>

              <Col className="register-form__single register-form__single--error">

              {(this.state.formErrors.name!=="") || 
              (this.state.formErrors.jobTitle!=="") || 
              (this.state.formErrors.clinicName!=="") || 
              (this.state.formErrors.streetName!=="") || 
              (this.state.formErrors.postCode!=="") || 
              (this.state.formErrors.email!=="") || 
              (this.state.formErrors.telephone!=="") || 
              (this.state.formErrors.webAddress!=="") ? 

                <div className={this.state.formValid ? "register-form__form__errors" : "register-form__form__errors register-form__form__errors--on"}>
                  <span className="register-form__form__errors__arrow" />
                  <ul className="register-form__form__errors__list c-orange">
                    {this.state.formErrors.name ? <li><span className="c-gray">{this.state.formErrors.name}</span></li> : ""}
                    {this.state.formErrors.jobTitle ? <li><span className="c-gray">{this.state.formErrors.jobTitle}</span></li> : ""}
                    {this.state.formErrors.clinicName ? <li><span className="c-gray">{this.state.formErrors.clinicName}</span></li> : ""}
                    {this.state.formErrors.streetName ? <li><span className="c-gray">{this.state.formErrors.streetName}</span></li> : ""}
                    {this.state.formErrors.postCode ? <li><span className="c-gray">{this.state.formErrors.postCode}</span></li> : ""}
                    {this.state.formErrors.email ? <li><span className="c-gray">{this.state.formErrors.email}</span></li> : ""}
                    {this.state.formErrors.telephone ? <li><span className="c-gray">{this.state.formErrors.telephone}</span></li> : ""}
                    {this.state.formErrors.webAddress ? <li><span className="c-gray">{this.state.formErrors.webAddress}</span></li> : ""}
                  </ul>
                </div>
                : "" }

              </Col>
            </Row>
          </form>
        </div>
      </section>



      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
      >
        <div className="modal-wrap">
          <div className="modal-wrap__container">
            <h2>INFORMATION AND CONSENT FORM FOR PERSONAL DATA PROCESSING</h2>
            <p>Pursuant to the regulations in force on personal data protection, Invua Medtech Ltd and address, shall process your personal contact and job details as the data controller for the following purposes: </p>
            <ol>
              <li>Adding your personal data to Invua Medtech Ltd database for arranging medical visits and sending you medical information. The legal basis for this processing shall be Invua Medtech Ltd legitimate interest in accordance with article 6.1.f) of the General Data Protection Regulation (GDPR) and article 19 of the Organic Law on Personal Data Protection (LOPDGDD), which restricts personal data processing to the details required to track your place of work and maintain business relations with you.</li>
              <li>Publishing and sharing on the EyemaxMono.com website to allow patients to contact you directly. The legal basis for processing your data is the consent you gave by ticking the corresponding box.</li>
              <li>Sending promotional and marketing materials promoting Invua Medtech Ltd products. The legal basis for processing your data is the consent you gave by ticking the corresponding box.</li>
              <li>Sending information about events organised by Invua Medtech Ltd or third parties that may be of interest to you. The legal basis for processing your data is the consent you gave by ticking the corresponding box.</li>
              <li>Conducting surveys and market studies about Invua Medtech Ltd products. The legal basis for processing your data shall be Invua Medtech Ltd legitimate interest to improve its products, services and relations with healthcare professionals. Your personal data will be protected under appropriate safeguards, including organizational and technical measures to help ensure data minimization, such as pseudonymisation. </li>
            </ol>

            <p>Furthermore, Invua Medtech Ltd hereby informs you that your personal data shall be kept on record: </p>

            <ul>
              <li>For as long as Invua Medtech Ltd continue to have a business relationship with you;</li>
              <li>Until the time you withdraw your consent, but this shall not affect the lawfulness of processing your personal data based on the consent you gave prior withdrawing or objecting to it;</li>
              <li>Until they had to be kept on record according to law for a longer term. The foregoing is notwithstanding their being duly blocked for disclosure to the authorities.</li>
            </ul>

            <p>Pursuant to the above provisions on the purposes for processing your personal data, they may be disclosed to companies in the Invua Medtech Ltd Group based on Invua Medtech Ltd legitimate interest for internal administrative purposes as provided for in Clause 48 of the GDPR.</p>
            <p>You may exercise your rights of data access, rectification, erasure, restriction and/or portability, as well as to submit any queries or suggestions in respect of the processing of your personal data by writing an email to company e-mail or a letter addressed to Invua Medtech Ltd and address. Finally, you are entitled to file claims with the competent supervisory body on data protection matters.</p>
            <p>You hereby state that you have read the foregoing and consent to Invua Medtech Ltd processing your personal data under the terms and conditions set forth herein.</p>
          </div>
          <form>
            <div class="l-button l-button--white-orange splash-btn" data-type="ok" onClick={this.submitForm}>OK</div>

          </form>
        </div>
      </Modal>
      
      </div>
    );
  }
}

export default RegisterForm;