import React from 'react'
import './style.css'

function InputBackground(props) {
  return (
    <div className={props.divClassName}>
      <label className={props.labelClassName} htmlFor={props.htmlFor}>
        {props.label}
      </label>
      <br />
      <input
        autoComplete="off"
        className={props.inputClassName}
        type={props.type}
        placeholder=""
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onClick={props.onClick}
        {...props}
      />
    </div>
  )
}
export default InputBackground
