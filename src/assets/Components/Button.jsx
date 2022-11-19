import React from 'react';
import './Button.css';


export const Button = ({clickHandler, icon}) => {
  return (
    <>
        <button onClick={clickHandler} >{icon}</button>
    </>
  )
}
