import React from 'react'
import './formInput.scss'

export default function FormInput({ label, handleChange, ...otherProps }) {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} { ...otherProps }></input>
            {
                label ? 
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>) : null
            }
        </div>
    )
}
