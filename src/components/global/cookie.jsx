import React from 'react';
import CookieConsent from "react-cookie-consent";

export default function Col(props) {

  return <CookieConsent
  location="bottom"
  buttonText="I understand"
  cookieName="LEHCookieConsent"
  style={{ background: "rgba(0,0,0,0.8)" }}
  buttonStyle={{ background: "#f79433", color: "#ffffff", fontSize: "16px", borderRadius: "3px", fontFamily: "FSJoey" }}
  expires={150}
>
  <p style={{ margin: "0px" }}>This website uses cookies to enhance the user experience.</p>
</CookieConsent>;
}


// if (typeof window !== "undefined") {
//   // eslint-disable-next-line global-require
//   require("smooth-scroll")('a[href*="#"]', {
//     speed: 300,
//     offset: 80,
// 		easing: 'easeInOutCubic'
//   })

// }