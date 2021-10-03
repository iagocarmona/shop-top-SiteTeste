import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

function ButtonIcon(props) {
  return (
    <button type="button" className="buttonStyle" onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon} className="iconStyle" />
      <div className="submitButton">{props.name}</div>
    </button>
  )
}
export default ButtonIcon
