import React from 'react';

import Row from '../global/row';
import Col from '../global/col';


class dataCollection extends React.Component {
    constructor(props) {
        super(props);

    }


    render(){
        return(

            <section className="data-collection__conditions">
              <div className="l-container">
                <Row>
                  <Col className="data-collection__content-wrapper data-collection__content-wrapper--full">
                    <h2 className="l-headline c-teal data-collection__conditions__header">You have two separate medical conditions, in one or both of your eyes, which commonly affect people as they get older. Together, these conditions make it hard for you to see clearly and may be making simple, everyday tasks difficult.</h2>
                    
                    <div className="data-collection__conditions__toggle-container" >
                    </div>
                    <div >
                      <p className="l-p l-p--statement c-teal data-collection__conditions__toggle-contents__statement">Dry AMD affects an area at the back of your eye called the macula</p>
                      <p className="l-p data-collection__conditions__toggle-contents__p">The macula is important for your central vision. This allows you to see shapes and colours clearly, and to read, drive, and see faces.</p>
                      <ul className="l-list data-collection__conditions__toggle-contents__list">
                        <li className="l-list__item data-collection__conditions__toggle-contents__list__item">Dry AMD is characterized by damage to the macula</li>
                        <li className="l-list__item data-collection__conditions__toggle-contents__list__item">This damage results in dark patches or blind spots</li>
                        <li className="l-list__item data-collection__conditions__toggle-contents__list__item">As you get older the condition can become worse</li>
                      </ul>
                    </div>
                    <div>
                      <p className="l-p l-p--statement c-teal data-collection__conditions__toggle-contents__statement">Cataracts are cloudy patches that form in an area of your eye called the lens</p>
                      <ul className="l-list data-collection__conditions__toggle-contents__list">
                        <li className="l-list__item data-collection__conditions__toggle-contents__list__item">The lens is near the front of your eye</li>
                        <li className="l-list__item data-collection__conditions__toggle-contents__list__item">The cloudiness from cataracts causes your sight to become blurry and misty</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </section>
        );
    }
}

export default dataCollection;