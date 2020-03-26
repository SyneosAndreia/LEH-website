import React from 'react';

import Row from '../global/row';
import Col from '../global/col';

import '../../styles/references.scss';

const References = (props) => (
    <section className={"references " + (props.className ? `references--gray ${props.className}` : 'references--gray')}>
        <div className="l-container">
            <Row>
                <Col className="references__content">
                    <p className="l-p references__content__subhead">References</p>
                    <div dangerouslySetInnerHTML={{__html: props.referenceList}} />
                </Col>
            </Row>
        </div>
    </section>
);

export default References;