import React from "react";


import Row from "../global/row";
import Col from "../global/col";

import data from '../data/data.json'
import "../../styles/listClinics.scss";

import GoogleMapsContainer from './maps';




// const ListClinics = ( props) => (
//   <div>
//     <Maps/>

//     <section className={"listClinics " + (props.className ? `${props.className}` : "")}>
//       <div className="l-container">
//         <Row className="l-row">
//           <Col className="listClinics__content-wrapper">

//             <h2 className="l-headline">List of registered clinics</h2>

//             <div className="listClinics__clinics-wrapper">
//               {data.map((clinic) =>
//                 <div className="clinic-wrapper" key={clinic.id}>
//                   <div className="l-p clinic-cell1" key={clinic.name}>
//                     {clinic.name} <br/>
//                     {clinic.jobTitle} 
//                   </div>

//                   <div className="l-p clinic-cell2" key={clinic.streetName}>
//                     {clinic.clinicName} <br/>
//                     {clinic.telephone} <br/>
//                     <a href={'mailto:'+ clinic.email} >{clinic.email}</a> <br/>
//                     <a href={clinic.webAddress} target="_blank">{clinic.webAddress}</a>
//                   </div>

//                   <div className="l-p clinic-cell3"> 
//                     {clinic.streetName}<br/>
//                     {clinic.postCode}<br/>

//                     <a  onClick={handleClick()} href="#">View on Map ></a>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </Col>
//         </Row>
//       </div>
//     </section>
//   </div>
// );

class ListClinics extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clinicId: 1,
      clinicLat: 51.507351,
      clinicLong: "-0.127758"
    }
  
  }


  handleClick(e, clinic) {
    window.scrollTo(0, 0); 
    console.log(clinic.id);


    this.setState({ 
      clinicId: clinic.id,
      clinicLat: clinic.lat,
      clinicLong: clinic.lng
     })
  }

  render() {
    const points = [{
      id: this.state.clinicId,
      lat: parseFloat(this.state.clinicLat),
      lng: parseFloat(this.state.clinicLong),
    }]

    return (
      <div>
        <section className="GoogleMaps">
          <div className="GoogleMaps__location-map">
            <GoogleMapsContainer 
              points={points} 
            />
          </div>
        </section>
    
        <section className="listClinics">
          <div className="l-container">
            <Row className="l-row">
              <Col className="listClinics__content-wrapper">
    
                <h2 className="l-headline">List of registered clinics</h2>
    
                <div className="listClinics__clinics-wrapper">
                  {data.map((clinic) => {
                    return(
                    <div className="clinic-wrapper" key={clinic.id}>
                      <div className="l-p clinic-cell1" key={clinic.name}>
                        {clinic.name} <br/>
                        {clinic.jobTitle} 
                      </div>
    
                      <div className="l-p clinic-cell2" key={clinic.streetName}>
                        {clinic.clinicName} <br/>
                        {clinic.telephone} <br/>
                        <a href={'mailto:'+ clinic.email} >{clinic.email}</a> <br/>
                        <a href={clinic.webAddress} target="_blank">{clinic.webAddress}</a>
                      </div>
    
                      <div className="l-p clinic-cell3"> 
                        {clinic.streetName}<br/>
                        {clinic.postCode}<br/>
    
                        <div onClick={((e) => this.handleClick(e, clinic))}>View on Map ></div>
                      </div>
                    </div>)}
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
  }


}


export default ListClinics;
