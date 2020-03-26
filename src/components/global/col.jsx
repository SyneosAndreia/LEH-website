import React from 'react';

export default function Col(props) {

  return <div
    className={
      props.className ? `col l-col ${props.className}` : 'col l-col'
    } 
  >{props.children}</div>;
}


// if (typeof window !== "undefined") {
//   // eslint-disable-next-line global-require
//   require("smooth-scroll")('a[href*="#"]', {
//     speed: 300,
//     offset: 80,
// 		easing: 'easeInOutCubic'
//   })

// }