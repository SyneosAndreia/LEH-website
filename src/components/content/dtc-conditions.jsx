import React from 'react';

import Row from '../global/row';
import Col from '../global/col';

var images = require.context('../../images', true);

class ConditionsToggle extends React.Component {
    constructor(props) {
        super(props);

        // Beginning State
        this.state = { 
            toggleDry: "active",
            toggleCat: "inactive",
            toggleName: "dry"
        };
    }

    onClick = (e) => {
        e.nativeEvent.preventDefault();
        var dryClass = 'toggle-dry dtc-about__conditions__toggle';
        var catClass = 'toggle-cat dtc-about__conditions__toggle';

        if(e.nativeEvent.target.className.includes(dryClass) || e.nativeEvent.target.parentElement.className.includes(dryClass)){
            this.setState({
                toggleDry: "active",
                toggleCat: "inactive",
                toggleName: "dry"
            })
        }

        if(e.nativeEvent.target.className.includes(catClass) || e.nativeEvent.target.parentElement.className.includes(catClass)){
            this.setState({
                toggleDry: "inactive",
                toggleCat: "active",
                toggleName: "cat"
            })
        }
    }

    render(){
        let img_eye = images(`./dtc-about-eye-${this.state.toggleName}.png`)
        return(

            <section className="dtc-about__conditions">
              <div className="l-container">
                <Row>
                  <Col className="dtc-about__content-wrapper dtc-about__content-wrapper--full">
                    <h2 className="l-headline c-teal dtc-about__conditions__header">You have two separate medical conditions, in one or both of your eyes, which commonly affect people as they get older. Together, these conditions make it hard for you to see clearly and may be making simple, everyday tasks difficult.</h2>
                    <img className={"dtc-about__conditions__eye " + "dtc-about__conditions__eye--" + this.state.toggleName} src={img_eye} alt="" />
                    <div className="dtc-about__conditions__toggle-container" onClick={this.onClick.bind(this)}>
                      <span className={'toggle-dry dtc-about__conditions__toggle dtc-about__conditions__toggle--' + this.state.toggleDry}>Dry AMD</span>
                      <span className={'toggle-cat dtc-about__conditions__toggle dtc-about__conditions__toggle--' + this.state.toggleCat}>Cataracts</span>
                    </div>
                    <div className={"dtc-about__conditions__toggle-contents dtc-about__conditions__toggle-contents--" + this.state.toggleDry}>
                      <p className="l-p l-p--statement c-teal dtc-about__conditions__toggle-contents__statement">Dry AMD affects an area at the back of your eye called the macula</p>
                      <p className="l-p dtc-about__conditions__toggle-contents__p">The macula is important for your central vision. This allows you to see shapes and colours clearly, and to read, drive, and see faces.</p>
                      <ul className="l-list dtc-about__conditions__toggle-contents__list">
                        <li className="l-list__item dtc-about__conditions__toggle-contents__list__item">Dry AMD is characterized by damage to the macula</li>
                        <li className="l-list__item dtc-about__conditions__toggle-contents__list__item">This damage results in dark patches or blind spots</li>
                        <li className="l-list__item dtc-about__conditions__toggle-contents__list__item">As you get older the condition can become worse</li>
                      </ul>
                    </div>
                    <div className={"dtc-about__conditions__toggle-contents dtc-about__conditions__toggle-contents--" + this.state.toggleCat}>
                      <p className="l-p l-p--statement c-teal dtc-about__conditions__toggle-contents__statement">Cataracts are cloudy patches that form in an area of your eye called the lens</p>
                      <ul className="l-list dtc-about__conditions__toggle-contents__list">
                        <li className="l-list__item dtc-about__conditions__toggle-contents__list__item">The lens is near the front of your eye</li>
                        <li className="l-list__item dtc-about__conditions__toggle-contents__list__item">The cloudiness from cataracts causes your sight to become blurry and misty</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </section>
        );
    }
}

export default ConditionsToggle;