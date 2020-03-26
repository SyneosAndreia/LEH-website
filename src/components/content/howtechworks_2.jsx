import React from 'react';

import Row from '../global/row';
import Col from '../global/col';

import img_scale_gray from '../../images/scale-gray.png';
import img_slider_icon from '../../images/icon-slider.png';

var images = require.context('../../images', true);

class EyemaxIOLSlider extends React.Component {
    constructor(props) {
        super(props);

        // Beginning State
        this.state = { 
            // Each array value is tick value and slider position value
            ticks:  [['S10',-5],
                    ['S9',0],
                    ['S8',5],
                    ['S7',10],
                    ['S6',15],
                    ['S5',20],
                    ['S4',25],
                    ['S3',30],
                    ['S2',35],
                    ['S1',40],
                    ['0',45],
                    ['N1',50],
                    ['N2',55],
                    ['N3',60],
                    ['N4',65],
                    ['N5',70],
                    ['N6',75],
                    ['N7',80],
                    ['N8',85],
                    ['N9',90],
                    ['N10',93]],
            iconPosition: 45,
            tickValue: 0,
            difference: 0,
            isDragging: false
        };
    }

    onMouseStart = (e) => {
        e.nativeEvent.preventDefault();

        this.onMoveStart(e.nativeEvent.target, e.nativeEvent.clientX);
    }

    onTouchStart = (e) => {
        const touch = e.touches[0];
        const target = e.nativeEvent.target;

        this.onMoveStart(target, touch.pageX);
    }

    onMoveStart(target, clientX) {
        const element = document.getElementById("img-about-iol-slider-icon");
        if(element !== target)
            return;

        this.setState({ 
            difference: clientX - element.offsetLeft,
            isDragging: true
        });
    }

    onMouseEnd = (e) => {
        e.nativeEvent.preventDefault();
        this.onMoveEnd();
    }

    onTouchEnd = (e) => {
        e.nativeEvent.preventDefault();
        this.onMoveEnd();
    }

    onMoveEnd(){
        // Find closest number in ticks array
        var element = document.getElementById("img-about-iol-slider-icon");
        var slider = document.getElementById("img-about-iol-slider");
        var target = element.offsetLeft / slider.clientWidth * 100;
        var minDiff=1000;
        var pos;
        var tick;
        var i=0;
        for(i in this.state.ticks){
            var m=Math.abs(target-this.state.ticks[i][1]);
            if(m<minDiff){ 
                minDiff=m; 
                pos=this.state.ticks[i][1];
                tick=this.state.ticks[i][0];
            }
        }

        this.setState({
            isDragging: false,
            iconPosition: pos,
            tickValue: tick
        })
    }

    onMouseMove = (e) => {
        this.onMove(e.nativeEvent.clientX);
    }
  
    onTouchMove = (e) => {
      if (e.changedTouches && e.changedTouches.length) {
        const touch = e.changedTouches[0];
        this.onMove(touch.clientX);
      }
    }

    onMove(clientX) {
        if(!this.state.isDragging)
            return;

        var slider = document.getElementById("img-about-iol-slider");
        var newX = clientX - this.state.difference;
        var percent = newX / slider.clientWidth * 100;

        if(newX > -50 && newX < 500)
        {
            this.setState({
                iconPosition: percent
            })
        }
    }

    render(){
        let iol_eye = images(`./hcp-about-iol/iol-eye-${this.state.tickValue}.png`)
        let iol_e_standard = images(`./hcp-about-iol/standard-iol-${this.state.tickValue}.png`)
        let iol_e_eyemax = images(`./hcp-about-iol/eyemax-iol-${this.state.tickValue}.png`)
        return(
            <section className="about-macula">
              <div className="l-container">
                <Row>
                  <Col className="about-macula__content-wrapper">
                    <h2 className="l-headline c-teal">Optimacular Technology enables EyeMax Mono to optimise image quality across the macula from 0<sup>&deg;</sup> out to 10<sup>&deg;</sup> of eccentricity<sup>7,8</sup></h2>
                  </Col>
                </Row>
                <Row>
                  <Col className="about-macula__eye-wrapper">
                    <p className="l-p about-macula__eye-wrapper__copy"><b>Slide the scale</b> below for a side view of how this works.</p>
                    <img className="about-macula__eye-wrapper__eye" src={iol_eye} alt="" />
                    <div className="about-macula__eye-wrapper__slider-container">
                      <div className="about-macula__eye-wrapper__slider-wrapper"
                      onMouseDown={this.onMouseStart.bind(this)}
                      onTouchStart={this.onTouchStart.bind(this)}
                      onMouseMove={this.onMouseMove.bind(this)}
                      onTouchMove={this.onTouchMove.bind(this)}
                      onMouseUp={this.onMouseEnd.bind(this)}
                      onTouchEnd={this.onTouchEnd.bind(this)}>
                          <img id="img-about-iol-slider" className="about-macula__eye-wrapper__slider-wrapper__iol-slider" src={img_scale_gray} alt="" />
                          <img id="img-about-iol-slider-icon" className="about-macula__eye-wrapper__slider-wrapper__iol-slider-icon" src={img_slider_icon} alt=""
                          style={{left: this.state.iconPosition + '%'}} />
                      </div>
                    </div>
                    <p className="l-p about-macula__eye-wrapper__footnote">
                      Slide to activate eccentric fixation up to 10<sup>&deg;</sup>
                      <br/>Ray tracing and simulated retinal images are for illustrative purposes only<sup>8</sup>
                    </p>
                  </Col>
                  <Col className="about-macula__compare-wrapper">
                    <Row>
                      <Col className="about-macula__compare-wrapper__content-wrapper">
                        <p className="l-p">EyeMax Mono</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="about-macula__compare-wrapper__iol-wrapper">
                        <img className="about-macula__compare-wrapper__iol-wrapper__iol" src={iol_e_eyemax} alt="" />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="about-macula__compare-wrapper__content-wrapper">
                        <p className="l-p">Standard monofocal IOL shows progressive blur</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="about-macula__compare-wrapper__iol-wrapper">
                        <img className="about-macula__compare-wrapper__iol-wrapper__iol" src={iol_e_standard} alt="" />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </section>
        );
    }
}

export default EyemaxIOLSlider;