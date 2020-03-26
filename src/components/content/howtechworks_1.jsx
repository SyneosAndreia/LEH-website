import React from 'react';

import Row from '../global/row';
import Col from '../global/col';

import img_scale_white from '../../images/scale-white.png';
import img_slider_icon from '../../images/icon-slider.png';

var images = require.context('../../images', true);

class EyemaxPRLSlider extends React.Component {
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
        const element = document.getElementById("img-about-prl-slider-icon");
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
        var element = document.getElementById("img-about-prl-slider-icon");
        var slider = document.getElementById("img-about-prl-slider");
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

        var slider = document.getElementById("img-about-prl-slider");
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
        let tickValue = this.state.tickValue.toString().replace('S','').replace('N','')
        let prl_eye = images(`./hcp-about-prl/prl_eye_${this.state.tickValue}.png`)
        let prl_e_standard = images(`./hcp-about-prl/standard_e_${tickValue}.png`)
        let prl_e_eyemax = images(`./hcp-about-prl/eyemax_e_${tickValue}.png`)
        return(
            <section className="about-prl">
            <div id="how-it-works" class="anchr"></div>
            <div className="l-container">
            <Row>
                <Col className="about-prl__content-wrapper">
                <h2 className="l-headline">See how Optimacular Technology works</h2>
                <p className="l-p about-prl__content-wrapper__copy"><b>Slide the arrow</b> below to see an example of how EyeMax Mono maximises functional vision by optimising the image in all areas out to 10<sup>&deg;</sup> of the fovea centre.<sup>7,8</sup></p>
                <img className="about-prl__content-wrapper__eye" src={prl_eye} alt="" />
                <div className="about-prl__content-wrapper__slider-container">
                    <div className="about-prl__content-wrapper__slider-wrapper"
                    onMouseDown={this.onMouseStart.bind(this)}
                    onTouchStart={this.onTouchStart.bind(this)}
                    onMouseMove={this.onMouseMove.bind(this)}
                    onTouchMove={this.onTouchMove.bind(this)}
                    onMouseUp={this.onMouseEnd.bind(this)}
                    onTouchEnd={this.onTouchEnd.bind(this)}>
                        <img id="img-about-prl-slider" className="about-prl__content-wrapper__slider-wrapper__prl-slider" src={img_scale_white} alt="" />
                        <img id="img-about-prl-slider-icon" className="about-prl__content-wrapper__slider-wrapper__prl-slider-icon" src={img_slider_icon} alt=""
                        style={{left: this.state.iconPosition + '%'}} />
                    </div>
                </div>
                <p className="l-p about-prl__content-wrapper__footnote">Use of the fovea is compromised by GA. Patients may naturally use a PRL to shift away from areas of GA.<sup>10</sup></p>
                <p className="l-p about-prl__content-wrapper__footnote">Fundus image is for illustrative purposes only</p>
                </Col>
                <Col className="about-prl__compare-wrapper">
                <div className="about-prl__compare-wrapper__container">
                    <div className="about-prl__compare-wrapper__container__witchcraft">

                        <div className="about-prl__compare-wrapper__container__witchcraft__e-holder">
                            <div className="about-prl__compare-wrapper__container__witchcraft__header-wrap">
                                <p className="l-p about-prl__compare-wrapper__container__witchcraft__header">EyeMax Mono image at {tickValue}<sup>&deg;</sup></p>
                            </div>
                            <div className="about-prl__compare-wrapper__container__witchcraft__image-wrap">
                                <img id="img-about-prl-e-1-eyemax" className="about-prl__compare-wrapper__container__witchcraft__prl-e-1" src={prl_e_eyemax} alt="" />
                            </div>
                        </div>

                        <div className="about-prl__compare-wrapper__container__witchcraft__e-holder">
                            <div className="about-prl__compare-wrapper__container__witchcraft__header-wrap-2">
                                <p className="l-p about-prl__compare-wrapper__container__witchcraft__header">Standard monofocal IOL at {tickValue}<sup>&deg;</sup></p>
                            </div>
                            <div className="about-prl__compare-wrapper__container__witchcraft__image-wrap">
                                <img id="img-about-prl-e-2-standard" className="about-prl__compare-wrapper__container__witchcraft__prl-e-2" src={prl_e_standard} alt="" />
                            </div>
                        </div>


                        {/* <p className="l-p about-prl__compare-wrapper__container__witchcraft__header">EyeMax Mono image at {tickValue}<sup>&deg;</sup></p> */}
                        {/* <img id="img-about-prl-e-1-eyemax" className="about-prl__compare-wrapper__container__witchcraft__prl-e-1" src={prl_e_eyemax} alt="" /> */}
                        {/* <p className="l-p about-prl__compare-wrapper__container__witchcraft__header about-prl__compare-wrapper__container__witchcraft__header--mobile">EyeMax Mono image at {tickValue}<sup>&deg;</sup></p> */}
                        
                        {/* <p className="l-p about-prl__compare-wrapper__container__witchcraft__header">Standard monofocal IOL at {tickValue}<sup>&deg;</sup></p>
                        <img id="img-about-prl-e-2-standard" className="about-prl__compare-wrapper__container__witchcraft__prl-e-2" src={prl_e_standard} alt="" />
                        <p className="l-p about-prl__compare-wrapper__container__witchcraft__header about-prl__compare-wrapper__container__witchcraft__header--mobile">Standard monofocal IOL at {tickValue}<sup>&deg;</sup></p> */}
                    </div>
                    <div className="about-prl__compare-wrapper__container__footnotes">
                        <p className="l-p about-prl__compare-wrapper__container__footnotes__header">EyeMax Mono maximises functional vision by optimising the image in all areas out to 10<sup>&deg;</sup> of the fovea centre<sup>7,8</sup></p>
                        <p className="l-p about-prl__compare-wrapper__container__footnotes__footnote">Simulation of retinal images<sup>8</sup></p>
                    </div>
                </div>
                </Col>
            </Row>
            </div>
            </section>
        );
    }
}

export default EyemaxPRLSlider;