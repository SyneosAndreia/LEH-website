import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Row from '../global/row';

import '../../styles/sizechanger.scss';

const Col = props => (
  <div className={`size-changer__col ${props.className}`}>{props.children}</div>
);

Col.propTypes = {
  children: PropTypes.node.isRequired,
};

const SizeChanger = props => {
  function handleClick(size) {
    // This is pretty straightforward, but need to make sure to use `em` or `rem`
    // units exclusively so this actually works properly.

    const element = document.querySelector('html');
    element.classList.remove('zoom-fonts-50', 'zoom-fonts-100');
    if (size) {
      element.classList.add(size);
    }
  }

  function handleImageClick() {
    const element = document.querySelector('body');
    element.classList.toggle('img-hide');
  }

  function resetSizer() {
    const body = document.querySelector('body');
    body.classList.remove('img-hide');
    const hyper = document.querySelector('html');
    hyper.classList.remove('zoom-fonts-50', 'zoom-fonts-100');
  }

  return (
    <div className={`size-changer ${props.className}`}>
      <div className="size-changer__container">
        <Row>
          <Col className="size-changer__buttons">
            <button onClick={e => handleClick()} className="small-a">
              A
            </button>
            <button
              onClick={e => handleClick('zoom-fonts-50')}
              className="medium-a"
            >
              A
            </button>
            <button
              onClick={e => handleClick('zoom-fonts-100')}
              className="big-a"
            >
              A
            </button>
            <button
              onClick={e => handleImageClick()}
              >
                Text Only
            </button>
          </Col>
          <Col className="d-none d-md-block">
            <Link 
            to="/hcp"
            onClick={e => resetSizer()}>
              Visit Healthcare
              <br />
              Professional Site
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SizeChanger;
