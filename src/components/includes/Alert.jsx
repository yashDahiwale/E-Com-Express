import React from 'react'

// Import Icons
import { RxCross2 } from "react-icons/rx";

function Alert(props) {
    return (
        <div className='alert-container'>
            {props.alertMessage}
            <RxCross2 className="close-btn" onClick={() => { props.setShowAlert(false) }} />
        </div>
    )
}

export default Alert
