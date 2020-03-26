import React from 'react';

export default function Row(props) {

  return <div
    className={
      props.className ? `l-row ${props.className}` : 'l-row'
    } 
  >{props.children}</div>;
}
