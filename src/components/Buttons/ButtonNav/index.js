import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

function ButtonNav(props) {
    return (
        <div className="buttonDiv">
            <button type="button" className="iconStyle">
                <FontAwesomeIcon icon={props.icon} />
            </button>
        </div>
    )
}
export default ButtonNav