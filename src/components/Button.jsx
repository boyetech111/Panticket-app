import React from 'react';
import './button.css';

function Button({ onclick, title, variation, } ) {
  return (
    <>
        <button onClick={onclick} className={`${variation}-btn btn-style`}>{title}</button>

    </>
  )
}

export default Button;