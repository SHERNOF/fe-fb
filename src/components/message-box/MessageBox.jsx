import React from 'react'
import './messageBox.scss'

export default function MessageBox({status, message}) {


   
    return (
      <div className={`messageBox ${status}`}>
        <h6 className={status}>{message}</h6> 
    </div>
      
    )
}
