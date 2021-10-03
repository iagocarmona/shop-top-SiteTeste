import React from 'react'
import './style.css'

function ButtonSubmit(props) {
  return (
    <div className={props.classDivName} type="submit">
      <button className={props.className} onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  )
}
export default ButtonSubmit
