import React from 'react'
import './input.css'

function Input({label, name, placeholder, value, onChange}) {
  return (
    <div className='input-container'>
        <label>{label}</label>
        <input
         label={label}
         name={name}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
        />
    </div>
  )
}

export default Input